<script lang="ts">
    import Page from "$lib/components/complex/page.svelte";
    import {Input} from "$lib/components/ui/input";
    import Template from "$lib/components/cards/template.svelte";
    import Plugin from "$lib/components/cards/plugin.svelte";
    import Processor from "$lib/components/cards/processor.svelte";
    import * as Select from "$lib/components/ui/select";
    import type {
        PluginPrincipalResp,
        ProcessorPrincipalResp,
        TemplatePrincipalResp
    } from "$lib/api/core/data-contracts";
    import {toResult} from "$lib/utility";
    import type {ProblemDetails} from "../../errors/problem_details";
    import {api} from "../../store";
    import {get} from "svelte/store";

    let resource = {
        value: "template",
        label: "Template",
        disabled: false,
    };

    const options = [{
        value: "template",
        label: "Template",
    },
        //  {
        //     value: "extension",
        //     label: "Extension",
        // },
        {
            value: "plugin",
            label: "Plugin",
        },
        {
            value: "processor",
            label: "Processor",
        },
    ]

    let searchTerm = "";

    $: notFoundMessage = `There are no ${resource.value}s found.`

    let queue = 0;
    let problem: ProblemDetails | null = null;

    const a = get(api);

    async function searchTemplate(searchTerm: string): Promise<TemplatePrincipalResp[]> {
        queue++;
        const resp = toResult(() => a.vTemplateDetail("1", {
            Search: searchTerm,
            Limit: 50,
        }), "Failed to search template");
        const ret = await resp.match({
            ok: (v) => v,
            err: (e) => {
                problem = e;
                return [];
            }
        });
        queue--;
        return ret;
    }

    async function searchPlugin(searchTerm: string): Promise<PluginPrincipalResp[]> {
        queue++;
        const resp = toResult(() => a.vPluginDetail("1", {
            Search: searchTerm,
            Limit: 50,
        }), "Failed to search plugin");
        const ret = await resp.match({
            ok: (v) => v,
            err: (e) => {
                problem = e;
                return [];
            }
        });
        queue--;
        return ret;
    }

    async function searchProcessor(searchTerm: string): Promise<ProcessorPrincipalResp[]> {
        queue++;
        const resp = toResult(() => a.vProcessorDetail("1", {
            Search: searchTerm,
            Limit: 50,
        }), "Failed to search processor");
        const ret = await resp.match({
            ok: (v) => v,
            err: (e) => {
                problem = e;
                return [];
            }
        });
        queue--;
        return ret;
    }

    async function find(searchTerm: string, resource: string): Promise<TemplatePrincipalResp[] | PluginPrincipalResp[] | ProcessorPrincipalResp[]> {
        switch (resource) {
            case "template":
                return await searchTemplate(searchTerm);
            case "plugin":
                return await searchPlugin(searchTerm);
            case "processor":
                return await searchProcessor(searchTerm);
            default:
                return [];
        }
    }

    $: results = find(searchTerm, resource.value);



    let r: TemplatePrincipalResp[] | PluginPrincipalResp[] | ProcessorPrincipalResp[] = [];
    function update(rr: TemplatePrincipalResp[] | PluginPrincipalResp[] | ProcessorPrincipalResp[]): string {
        r = rr;
        return "";
    }
</script>
<div class="w-full h-full bg-muted dark:bg-background min-h-screen ">
    <div class="w-11/12 max-w-[1200px] mx-auto">
        <div class="py-8 flex justify-between space-x-4">
            <Input id="search" class="bg-background text-foreground dark:bg-slate-900"
                   placeholder="Type here to search for {resource.value}s" bind:value={searchTerm}/>
            <Select.Root bind:selected={resource}>
                <Select.Trigger class="w-[180px] text-foreground bg-background  dark:bg-slate-900">
                    <Select.Value placeholder="Template"/>
                </Select.Trigger>
                <Select.Content>
                    {#each options as option}
                        <Select.Item class="hover:bg-muted" value={option.value}>{option.label}</Select.Item>
                    {/each}
                </Select.Content>
            </Select.Root>

        </div>
    </div>
    {#await results then rs}
        {update(rs)}
    {/await}
    <Page {notFoundMessage} {queue} {problem} empty={r.length === 0}>
        <div class="w-11/12 max-w-[1200px] mx-auto grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-stretch justify-stretch ">
            {#if resource.value === "template"}
                {#each r as template}
                  <Template {template}/>
                {/each}
            {:else if resource.value === "plugin"}
                {#each r as plugin}
                    <Plugin {plugin}/>
                {/each}
            {:else if resource.value === "processor"}
                {#each r as processor}
                    <Processor {processor}/>

                {/each}
            {/if}
        </div>
    </Page>
</div>

