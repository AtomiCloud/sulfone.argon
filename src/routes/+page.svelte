<script lang="ts">
    import {config} from "../config/shared";
    import Page from "$lib/components/complex/page.svelte";
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
        }
    }

    $: backg = bg(hover);

    $: textg = text(hover);


</script>
<Page notFoundMessage="Main page cannot be found">
    <div class="max-w-[1200px] w-5/6 mx-auto">
        <div class="relative text-center text-6xl md:text-9xl  flex flex-col justify-center ">
            <div class="w-full h-full absolute font-semibold
            transition-all duration-500
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        bg-opacity-[50%]
        {backg} from-0% via-background via-60% to-background to-90% blur opacity-[20%] dark:opacity-[15%]">

            </div>
            <div class="flex items-center mt-8 md:mt-28 mb-8 w-full font-semibold">
                <div class="mx-auto relative p-2 md:p-4  dark:bg-gradient-to-br bg-gradient-to-tr {textg} inline-block text-transparent bg-clip-text">
                    Next Generation Templating Engine
                </div>
            </div>
            <div class="relative space-y-2 space-x-0 md:space-y-0 md:space-x-4 my-8 flex flex-col md:flex-row w-full max-w-[1200px] justify-between text-foreground">
                <button class="flex flex-col gap-y-4 items-center justify-center rounded-t-lg md:rounded-lg p-12 cursor-pointer bg-black/5 dark:bg-white/5 backdrop-blur transition hover:scale-[1.02]" on:mouseenter={() => hover="a"} on:mouseleave={() => hover="main"}>
                    <div class="text-6xl">
                        Templates
                    </div>
                    <a href="https://docs.cyanprint.dev" class="text-3xl  font-light p-4">
                        CREATE
                    </a>
                </button>
                <button class="flex flex-col gap-y-4 items-center justify-center md:rounded-lg p-12 cursor-pointer bg-black/5 dark:bg-white/5 backdrop-blur transition hover:scale-[1.02]" on:mouseenter={() => hover="b"} on:mouseleave={() => hover="main"}>
                    <div class="text-6xl">
                        Processors
                    </div>
                    <a href="https://docs.cyanprint.dev" class="text-3xl font-light p-4">
                        CREATE
                    </a>
                </button>
                <button class="flex flex-col gap-y-4 items-center justify-center  rounded-b-lg md:rounded-lg p-12 cursor-pointer bg-black/5 dark:bg-white/5 backdrop-blur transition rounded-lg hover:scale-[1.02]" on:mouseenter={() => hover="c"} on:mouseleave={() => hover="main"}>
                    <div class="text-6xl">
                        Plugins
                    </div>
                    <a href="https://docs.cyanprint.dev" class="text-3xl  font-light p-4">
                        CREATE
                    </a>
                </button>
            </div>
        </div>
    </div>

</Page>
