<script lang="ts">
    import {Button, buttonVariants} from "$lib/components/ui/button";
    import {Loader2, Trash2} from "lucide-svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import {toResult} from "$lib/utility";
    import {page} from "$app/stores";
    import {api, problem} from "../../../store";
    import {get} from "svelte/store";
    import type {TokenPrincipalResp} from "$lib/api/core/data-contracts";



    let revokeQueue = 0;

    let revokeOpen = false;

    const a = get(api);

    async function revokeToken(id: string): Promise<void> {
        revokeQueue++;
        const token = toResult(() =>
            a.vUserTokensRevokeCreate($page.data?.user?.principal?.id ?? "", id, "1"), "Failed to revoke token");
        return await token.match({
            err: (e) => {
                problem.set(e);
                revokeQueue--;
                revokeOpen = false;
                return {};
            },
            ok: async (t) => {
                revokeQueue--;
                await callback();
                revokeOpen = false;
                return t
            }
        })
    }

    export let token: TokenPrincipalResp;

    export let callback: () => Promise<void>;
</script>
<Dialog.Root bind:open={revokeOpen}>
    <Dialog.Trigger class={buttonVariants({ variant: "destructive" })}>
        Revoke
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px] text-foreground">
        <Dialog.Header>
            <Dialog.Title class="text-foreground">Revoke Token</Dialog.Title>
            <Dialog.Description class="text-muted-foreground py-4">
                Revoke Token <span class="font-mono bg-muted py-1 px-2">{token.name}</span>,
                this cannot be undone.
            </Dialog.Description>
        </Dialog.Header>

        <Dialog.Footer>
            <Button variant="destructive" on:click={()=> revokeToken(token?.id ?? "")} >
                {#if revokeQueue === 0 }
                    <Trash2 class="mr-2 h-4 w-4"/>
                {:else}
                    <Loader2 class="mr-2 h-4 w-4 animate-spin"/>
                {/if}
                Revoke
            </Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
