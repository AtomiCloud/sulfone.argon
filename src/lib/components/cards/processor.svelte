<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type {ProcessorPrincipalResp} from "$lib/api/core/data-contracts";
    import {Badge} from "$lib/components/ui/badge";
    import {Link, Code2} from "lucide-svelte";

    export let processor: ProcessorPrincipalResp;
</script>
<a href="/processors/{processor.userId}/{processor.id}" >
    <Card.Root class="hover:bg-muted h-full flex-col justify-between" >
        <Card.Header>
            <div class="flex justify-between items-start">
                <div>
                    <Card.Title class="text-primary font-semibold">{processor.name}</Card.Title>
                    <Card.Description class="my-2 md:h-24">{processor.description}</Card.Description>
                </div>
                <div class="flex space-x-1">

                    {#each (processor.tags ?? []) as tag}
                        <Badge>{tag}</Badge>
                    {/each}
                </div>
            </div>
        </Card.Header>
        <Card.Footer>
            <div class="flex justify-between w-full items-center">
                <div>
                    <p class="text-foreground text-sm font-semibold">{processor.email}</p>
                </div>
                <div class="flex space-x-4">
                    <a href="{processor.project}" class="hover:text-primary"><Link class="w-4 h-4"/></a>
                    <a href="{processor.source}" class="hover:text-primary"><Code2 class="w-4 h-4" /></a>
                </div>
            </div>
        </Card.Footer>
    </Card.Root>
</a>
