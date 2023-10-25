<script lang="ts">
    import type {TokenOTPrincipalResp, UserResp} from "$lib/api/core/data-contracts";
    import {Res} from "$lib/core/result";
    import type {PageData} from './$types';
    import Page from "$lib/components/complex/page.svelte";
    import {Input} from "$lib/components/ui/input";
    import type {ProblemDetails} from "../../errors/problem_details";
    import {Button, buttonVariants} from "$lib/components/ui/button";
    import {api, problem} from "../../store";
    import {get} from "svelte/store";
    import {page} from "$app/stores";
    import {toResult} from "$lib/utility";
    import RevokeButton from "$lib/components/complex/revoke-button.svelte"
    import {PlusCircle, Loader2} from "lucide-svelte";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Card from "$lib/components/ui/card";
    import {invalidateAll} from "$app/navigation";

    export let data: PageData;


    $: user = Res.fromSerial<UserResp, ProblemDetails>(data.result)
        .match({
            ok: (a: UserResp): UserResp | null => {
                problem.set(null);
                return a;
            },
            err: (e) => {
                problem.set(e);
                return null;
            }
        }) satisfies Promise<UserResp | null>;

    let u: UserResp | null = null;

    let searchTerm = "";

    function update(uu: UserResp | null): string {
        u = uu;
        return "";
    }

    $: filtered = u?.tokens?.filter(t => t?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) ?? true) ?? [];

    let tokeName = "";

    const a = get(api)

    function tokenNameError(n: string): string[] {
        const err = [];
        if (n.length < 1) err.push("Enter a name");
        if (n.length > 256) err.push("Name cannot be longer that 256 characters");
        return err;
    }

    let revokeQueue = 0;

    let open = false;

    let alertOpen = false;

    let createdToken = "";

    async function createToken(name: string): Promise<TokenOTPrincipalResp> {
        revokeQueue++;
        const token = toResult(() =>
            a.vUserTokensCreate($page.data?.user?.principal?.id ?? "", "1", {name}), "Failed to create token");
        return await token.match({
            err: (e) => {
                problem.set(e);
                open = false;
                tokeName = "";
                revokeQueue--;
                return {};
            },
            ok: async (t) => {
                problem.set(null);
                open = false;
                tokeName = "";
                await invalidateAll()
                revokeQueue--;

                return t
            }
        })
    }



    async function apiToken(name: string): Promise<void> {
        const token = await createToken(name);
        alertOpen = true;
        createdToken = token?.apiKey ?? "";
    }

    $: disabled = tokenNameError(tokeName).length > 0;

</script>

{#await user then u}
    {update(u)}
{/await}

<div class="w-full min-h-screen bg-muted dark:bg-background">
    <div class="max-w-[1200px] w-11/12 mx-auto py-8 flex-col space-y-8">
        <div class="justify-between flex space-x-4">
            <Input id="search" class="bg-background text-foreground dark:bg-slate-900"
                   placeholder="Type here to search for tokens" bind:value={searchTerm}/>
            <AlertDialog.Root bind:open={alertOpen}>
                <AlertDialog.Content class="max-w-[640px] w-11/12">
                    <AlertDialog.Header class="w-full">
                        <AlertDialog.Title class="text-foreground">API Token</AlertDialog.Title>
                        <AlertDialog.Description class="text-muted-foreground">
                            API Token has been successfully created. Please store
                            this token in a safe place as this token cannot be view
                            again after you close this window
                        </AlertDialog.Description>
                        <div class="w-full">
                            <p class="bg-muted text-foreground font-mono text-xs p-4">
                                {createdToken}
                            </p>
                        </div>
                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                        <AlertDialog.Cancel on:click={() => alertOpen = false} >Close</AlertDialog.Cancel>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog.Root>


            <Dialog.Root bind:open={open}>
                <Dialog.Trigger class={buttonVariants({ variant: "outline", class: "bg-primary text-background" })}>
                    Create Token
                </Dialog.Trigger>
                <Dialog.Content class="sm:max-w-[425px]">
                    <Dialog.Header>
                        <Dialog.Title class="text-foreground">New API Token</Dialog.Title>
                        <Dialog.Description class="text-muted-foreground">
                            Name your API Token
                        </Dialog.Description>
                        <Input id="name" bind:value={tokeName} placeholder="Token name"
                               class="text-foreground col-span-3"/>
                        <p class="text-sm text-red-400">{tokenNameError(tokeName)[0] ?? " "}</p>

                    </Dialog.Header>

                    <Dialog.Footer>
                        <Button {disabled} on:click={()=> apiToken(tokeName)}>
                            {#if revokeQueue === 0 }
                                <PlusCircle class="mr-2 h-4 w-4"/>
                            {:else}
                                <Loader2 class="mr-2 h-4 w-4 animate-spin"/>
                            {/if}
                            Create
                        </Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Root>

        </div>
        <Page notFoundMessage="No api tokens" empty={filtered.length === 0} problem={$problem} queue={u == null ? 1: 0 }>
            {#each filtered as f }
                <Card.Root class="shadow-xl dark:border-muted-foreground dark:bg-background">
                    <div class="flex justify-between items-center">
                        <div>
                            <Card.Header>
                                <Card.Title>{f.name}</Card.Title>
                            </Card.Header>
                            <Card.Content>
                                <Card.Description> {f.id}</Card.Description>
                            </Card.Content>
                        </div>
                        <div class="p-8">
                            <RevokeButton token={f} callback={() => invalidateAll()}/>
                        </div>
                    </div>

                </Card.Root>
            {/each}
        </Page>
    </div>
</div>

