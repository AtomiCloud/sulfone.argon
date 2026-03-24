<script lang="ts">
    import {config} from "../config/shared";
    import Page from "$lib/components/complex/page.svelte";
    import {Button} from "$lib/components/ui/button";
    console.log("Configuration", config.app);

    let hover = "main";

    function bg(type: string): string {
        switch (type) {
            default:
                return "from-green-300 ";
            case "a":
                return "from-blue-300 ";
            case "b":
                return "from-red-300 ";
            case "c":
                return "from-purple-300 ";
            case "d":
                return "from-amber-300 ";
        }
    }

    function text(type: string): string {
        switch (type) {
            default:
                return "from-blue-700 via-green-400 to-yellow-100";
            case "a":
                return "from-indigo-700 via-blue-400 to-sky-200";
            case "b":
                return "from-red-700 via-pink-400 to-rose-100";
            case "c":
                return "from-purple-700 via-violet-400 to-fuchsia-100";
            case "d":
                return "from-amber-700 via-orange-400 to-yellow-100";
        }
    }

    $: backg = bg(hover);

    $: textg = text(hover);


</script>
<Page notFoundMessage="Main page cannot be found">
    <div class="max-w-[900px] w-full mx-auto">
        <div class="relative text-center text-4xl md:text-9xl flex flex-col items-center justify-center ">
            <div class="w-full h-full absolute font-semibold
            transition-all duration-500
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        bg-opacity-[50%]
        {backg} from-0% via-background via-60% to-background to-90% blur opacity-[20%] dark:opacity-[15%]">

            </div>
            <div class="flex items-center mt-8 md:mt-28 mb-8 w-full font-semibold">
                <div class="mx-auto relative p-2 md:p-4 dark:bg-gradient-to-br bg-gradient-to-tr {textg} inline-block text-transparent bg-clip-text">
                    Next Generation Templating Engine
                </div>
            </div>
            <!-- 2x2 Grid Layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px] mx-auto my-8 text-foreground">
                <!-- Row 1: Templates | Processors -->
                <button class="flex flex-col gap-y-4 items-center justify-center rounded-xl p-8 cursor-pointer
                    bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950 dark:to-sky-900
                    border border-sky-200 dark:border-sky-800
                    shadow-lg hover:shadow-xl backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-sky-400"
                    on:mouseenter={() => hover="a"} on:mouseleave={() => hover="main"}>
                    <div class="text-2xl font-light">Templates</div>
                    <div class="text-lg text-muted-foreground text-center">Quickly scaffold production-ready projects by answer a few questions</div>
                    <Button href="https://docs.cyanprint.dev" class="bg-sky-500 hover:bg-green-500">
                        CREATE
                    </Button>
                </button>
                <button class="flex flex-col gap-y-4 items-center justify-center rounded-xl p-8 cursor-pointer
                    bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900
                    border border-pink-200 dark:border-pink-800
                    shadow-lg hover:shadow-xl backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-pink-400"
                    on:mouseenter={() => hover="b"} on:mouseleave={() => hover="main"}>
                    <div class="text-2xl font-light">Processors</div>
                    <div class="text-lg text-muted-foreground text-center">
                        Create language agnostic rules to generate more powerful templates
                    </div>
                    <Button href="https://docs.cyanprint.dev" class="bg-pink-500 hover:bg-green-500">
                        CREATE
                    </Button>
                </button>
                <!-- Row 2: Plugins | Resolvers -->
                <button class="flex flex-col gap-y-4 items-center justify-center rounded-xl p-8 cursor-pointer
                    bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900
                    border border-purple-200 dark:border-purple-800
                    shadow-lg hover:shadow-xl backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-purple-400"
                    on:mouseenter={() => hover="c"} on:mouseleave={() => hover="main"}>
                    <div class="text-2xl font-light">Plugins</div>
                    <div class="text-lg text-muted-foreground text-center">
                        Extend capabilities of templates in any language
                    </div>
                    <Button href="https://docs.cyanprint.dev" class="bg-purple-500 hover:bg-green-500">
                        CREATE
                    </Button>
                </button>
                <button class="flex flex-col gap-y-4 items-center justify-center rounded-xl p-8 cursor-pointer
                    bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900
                    border border-amber-200 dark:border-amber-800
                    shadow-lg hover:shadow-xl backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-amber-400"
                    on:mouseenter={() => hover="d"} on:mouseleave={() => hover="main"}>
                    <div class="text-2xl font-light">Resolvers</div>
                    <div class="text-lg text-muted-foreground text-center">
                        Resolve and manage dependencies across templates and plugins
                    </div>
                    <Button href="https://docs.cyanprint.dev" class="bg-amber-500 hover:bg-green-500">
                        CREATE
                    </Button>
                </button>
            </div>
        </div>
    </div>

</Page>
