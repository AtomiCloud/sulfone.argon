<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type {ResolverPrincipalResp} from "$lib/api/core/data-contracts";
    import {Badge} from "$lib/components/ui/badge";
    import {Link, Code2} from "lucide-svelte";
    import {toSafeHref} from "$lib/utility";

    export let resolver: ResolverPrincipalResp;
</script>
<a href="/resolvers/{resolver.userId}/{resolver.id}">
    <Card.Root class="transition-all hover:bg-muted h-full flex-col justify-between group
        bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-950/20
        hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-900/30
        border border-transparent hover:border-amber-200 dark:hover:border-amber-800">
        <Card.Header>
            <div class="flex justify-between items-start">
                <div>
                    <Card.Title class="text-primary font-semibold group-hover:text-amber-600 transition-colors">{resolver.name}</Card.Title>
                    <Card.Description class="my-2 md:h-24">{resolver.description}</Card.Description>
                </div>
                <div class="flex space-x-1">

                    {#each (resolver.tags ?? []) as tag}
                        <Badge>{tag}</Badge>
                    {/each}
                </div>
            </div>
        </Card.Header>
        <Card.Footer>
            <div class="flex justify-between w-full items-center">
                <div>
                    <p class="text-foreground text-sm font-semibold">{resolver.email}</p>
                </div>
                <div class="flex space-x-4">
                    <a href={toSafeHref(resolver.project)} class="hover:text-primary on:click|stopPropagation z-10" aria-label="Project link"><Link class="w-4 h-4"/></a>
                    <a href={toSafeHref(resolver.source)} class="hover:text-primary on:click|stopPropagation z-10" aria-label="Source link"><Code2 class="w-4 h-4" /></a>
                </div>
            </div>
        </Card.Footer>
    </Card.Root>
</a>
