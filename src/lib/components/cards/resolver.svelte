<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type {ResolverPrincipalResp} from "$lib/api/core/data-contracts";
    import {Badge} from "$lib/components/ui/badge";
    import {Link, Code2} from "lucide-svelte";
    import {goto} from "$app/navigation";
    import {toSafeHref} from "$lib/utility";

    export let resolver: ResolverPrincipalResp;

    function handleCardClick(event: Event) {
        // Don't navigate if clicking on inner links
        if ((event.target as HTMLElement).closest('a')) {
            return;
        }
        goto(`/resolvers/${resolver.userId}/${resolver.id}`);
    }

    function handleKeydown(event: CustomEvent<KeyboardEvent>) {
        if (event.detail.key === 'Enter' || event.detail.key === ' ') {
            event.detail.preventDefault();
            goto(`/resolvers/${resolver.userId}/${resolver.id}`);
        }
    }
</script>
<Card.Root
    class="transition-all hover:bg-muted h-full flex-col justify-between cursor-pointer"
    role="link"
    tabindex={0}
    on:click={handleCardClick}
    on:keydown={handleKeydown}
>
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
                <a href={toSafeHref(resolver.project)} class="hover:text-primary" on:click|stopPropagation aria-label="Project link"><Link class="w-4 h-4"/></a>
                <a href={toSafeHref(resolver.source)} class="hover:text-primary" on:click|stopPropagation aria-label="Source link"><Code2 class="w-4 h-4" /></a>
            </div>
        </div>
    </Card.Footer>
</Card.Root>
