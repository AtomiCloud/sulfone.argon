<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type {TemplatePrincipalResp} from "$lib/api/core/data-contracts";
    import {Badge} from "$lib/components/ui/badge";
    import {Link, Code2} from "lucide-svelte";

    export let template: TemplatePrincipalResp;
</script>
<a href="/templates/{template.userId}/{template.id}" class="h-full">
<Card.Root class="hover:bg-muted  h-full flex-col justify-between">
    <Card.Header>
        <div class="flex justify-between items-start">
            <div>
                <Card.Title class="text-primary font-semibold">{template.name}</Card.Title>
                <Card.Description class="my-2 md:h-24">{template.description}</Card.Description>
            </div>
            <div class="flex space-x-1">

                {#each (template.tags ?? []) as tag}
                    <Badge>{tag}</Badge>
                {/each}
            </div>
        </div>
    </Card.Header>
    <Card.Footer>
        <div class="flex justify-between w-full items-center">
            <div>
                <p class="text-foreground text-sm font-semibold">{template.email}</p>
            </div>
            <div class="flex space-x-4">
                <a href="{template.project}"  class="hover:text-primary"><Link class="w-4 h-4"/></a>
                <a href="{template.source}" class="hover:text-primary"><Code2 class="w-4 h-4" /></a>
            </div>
        </div>
    </Card.Footer>
</Card.Root>
</a>
