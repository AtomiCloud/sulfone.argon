<script lang="ts">
    import type {TemplateResp} from "$lib/api/core/data-contracts";
    import type {ResolvedDependencies} from './+page';
    import {Res} from "$lib/core/result";
    import type {PageData} from './$types';
    import type {ProblemDetails} from "../../../../errors/problem_details";
    import Page from "$lib/components/complex/page.svelte";
    import {Badge} from "$lib/components/ui/badge";
    import {Code2, Download, Link, Star} from "lucide-svelte";
    import {Input} from "$lib/components/ui/input";
    import {Button} from "$lib/components/ui/button";
    import SvelteMarkdown from 'svelte-markdown'
    import * as Card from "$lib/components/ui/card";
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Table from "$lib/components/ui/table";
    import {toSafeHref} from "$lib/utility";

    export let data: PageData;

    let problem: ProblemDetails | null = null;


    $: overview = Res.fromSerial<TemplateResp, ProblemDetails>(data.result)
        .match({
            ok: (a: TemplateResp): TemplateResp | null => {
                problem = null;
                return a;
            },
            err: (e) => {
                problem = e;
                return null;
            }
        }) satisfies Promise<TemplateResp | null>;

    let ov: TemplateResp | null = null;
    let rd: ResolvedDependencies = { resolvers: [], plugins: [], processors: [] };

    let searchTerm = "";

    function update(over: TemplateResp | null): string {
        ov = over;
        return "";
    }

    function updateResolvedDeps(r: ResolvedDependencies): string {
        rd = r;
        return "";
    }

</script>

{#await overview then o}
    {update(o)}
{/await}

{#await Promise.resolve(data.resolvedDeps) then r}
    {updateResolvedDeps(r)}
{/await}

<Page notFoundMessage="Template not found" empty={false} {problem} queue={ov == null ? 1: 0 }>
    <div class="w-full min-h-screen bg-muted dark:bg-background">
        <div class="max-w-[1200px] w-11/12 mx-auto py-8 flex-col space-y-8">
            <Card.Root class="shadow-xl dark:border-muted-foreground dark:bg-background">
                <div class="flex justify-between items-start">
                    <div>
                        <Card.Header>
                            <Card.Title class="text-3xl">{ov?.user?.username}/{ov?.principal?.name}</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <Card.Description>
                                {ov?.principal?.description}
                            </Card.Description>
                        </Card.Content>
                    </div>
                    <div class="flex space-x-2 p-12">
                        {#each (ov?.principal?.tags ?? []) as tag}
                            <Badge>{tag}</Badge>
                        {/each}
                    </div>
                </div>
                <Card.Footer class="bg-muted rounded-b-lg p-4">
                    <div class="flex justify-between w-full">
                        <div class="flex space-x-4">

                            <a href={toSafeHref(ov?.principal?.project)}
                               class="flex space-x-1 items-center text-sm font-medium text-primary underline underline-offset-4">
                                <Link class="w-4 h-4"/>
                                <div> Project</div>
                            </a>
                            <a href={toSafeHref(ov?.principal?.source)}
                               class="flex space-x-1 items-center text-sm font-medium text-primary underline underline-offset-4">
                                <Code2 class="w-4 h-4"/>
                                <div> Source</div>
                            </a>
                        </div>
                        <div class="flex space-x-4">
                            <Button class="flex space-x-2 items-center">
                                <Star class="w-4 h-4 text-background"/>
                                <div>{ov?.info?.stars}</div>
                            </Button>
                            <Button class="flex space-x-2 items-center">
                                <Download class="w-4 h-4"/>
                                <div>{ov?.info?.downloads}</div>
                            </Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card.Root>

            <Tabs.Root value="docs">
                <Tabs.List class="grid w-full grid-cols-3 shadow-xl">
                    <Tabs.Trigger value="docs">Documentation</Tabs.Trigger>
                    <Tabs.Trigger value="version">Versions</Tabs.Trigger>
                    <Tabs.Trigger value="dependencies">Dependencies</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="docs">
                    <Card.Root class="shadow-xl dark:border-muted-foreground dark:bg-background">
                        <Card.Header>
                            <Card.Title>ReadMe</Card.Title>
                        </Card.Header>
                        <Card.Content class="space-y-2">
                            <SvelteMarkdown source={ov?.principal?.readme} />
                        </Card.Content>
                        <Card.Footer>
                        </Card.Footer>
                    </Card.Root>
                </Tabs.Content>
                <Tabs.Content value="version">
                    <Card.Root class="shadow-xl dark:border-muted-foreground dark:bg-background">
                        <Card.Header>
                            <Card.Title>Versions</Card.Title>
                            <Card.Description>
                                Current and past versions of the template.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content class="space-y-2">
                            <Input id="search" class="bg-background text-foreground dark:bg-slate-900"
                                   placeholder="Type here to filter versions" bind:value={searchTerm}/>
                            <Table.Root>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.Head class="w-[100px]">Version</Table.Head>
                                        <Table.Head>Description</Table.Head>
                                        <Table.Head>Created At</Table.Head>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {#each (ov?.versions ?? [])
                                        .filter((i) => i?.description?.includes(searchTerm) ?? true)
                                        .sort((a,b) => (b?.version ?? 0) - (a?.version ?? 0)) as version, i (i)}
                                        <Table.Row>
                                            <Table.Cell class="font-medium">{version.version}</Table.Cell>
                                            <Table.Cell>{version.description}</Table.Cell>
                                            <Table.Cell>{version.createdAt}</Table.Cell>
                                        </Table.Row>
                                    {/each}
                                </Table.Body>
                            </Table.Root>
                        </Card.Content>
                        <Card.Footer>
                        </Card.Footer>
                    </Card.Root>
                </Tabs.Content>
                <Tabs.Content value="dependencies">
                    <Card.Root class="shadow-xl dark:border-muted-foreground dark:bg-background">
                        <Card.Header>
                            <Card.Title>Dependencies</Card.Title>
                            <Card.Description>
                                Resolvers, plugins, and processors used by this template.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content class="space-y-4">
                            {#if !rd.resolvers.length && !rd.plugins.length && !rd.processors.length}
                                <p class="text-muted-foreground">No dependencies found for the latest version.</p>
                            {:else}
                                {#if rd.resolvers.length > 0}
                                    <div>
                                        <h4 class="font-semibold mb-2">Resolvers</h4>
                                        <ul class="list-disc list-inside space-y-1">
                                            {#each rd.resolvers as resolver}
                                                <li>
                                                    <a href="/resolvers/{resolver.userId}/{resolver.id}" class="text-primary underline">
                                                        {resolver.name ?? 'Unnamed Resolver'}
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                {/if}
                                {#if rd.plugins.length > 0}
                                    <div>
                                        <h4 class="font-semibold mb-2">Plugins</h4>
                                        <ul class="list-disc list-inside space-y-1">
                                            {#each rd.plugins as plugin}
                                                <li>
                                                    <a href="/plugins/{plugin.userId}/{plugin.id}" class="text-primary underline">
                                                        {plugin.name ?? 'Unnamed Plugin'}
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                {/if}
                                {#if rd.processors.length > 0}
                                    <div>
                                        <h4 class="font-semibold mb-2">Processors</h4>
                                        <ul class="list-disc list-inside space-y-1">
                                            {#each rd.processors as processor}
                                                <li>
                                                    <a href="/processors/{processor.userId}/{processor.id}" class="text-primary underline">
                                                        {processor.name ?? 'Unnamed Processor'}
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                {/if}
                            {/if}
                        </Card.Content>
                        <Card.Footer>
                        </Card.Footer>
                    </Card.Root>
                </Tabs.Content>
            </Tabs.Root>

        </div>
    </div>
</Page>

