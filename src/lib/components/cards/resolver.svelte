<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type {ResolverPrincipalResp} from "$lib/api/core/data-contracts";
    import {Badge} from "$lib/components/ui/badge";
    import {Link, Code2} from "lucide-svelte";

    export let resolver: ResolverPrincipalResp;
</script>
<a href="/resolvers/{resolver.userId}/{resolver.id}">
    <Card.Root class="transition-all hover:bg-muted h-full flex-col justify-between">
        <Card.Header>
            <div class="flex justify-between items-start">
                <div>
                    <Card.Title class="text-primary font-semibold">{resolver.name}</Card.Title>
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
                    <a href="{resolver.project}" class="hover:text-primary" on:click|stopPropagation><Link class="w-4 h-4"/></a>
                    <a href="{resolver.source}" class="hover:text-primary" on:click|stopPropagation><Code2 class="w-4 h-4" /></a>
                </div>
            </div>
        </Card.Footer>
    </Card.Root>
</a>
