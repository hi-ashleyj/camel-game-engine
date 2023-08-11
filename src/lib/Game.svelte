<script lang="ts">
    
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import { setupGame, type GameContext } from "./core-contexts.js";
    import { Keyboard } from "./controllers/keyboard.js";
    import type { Writable } from "svelte/store";
    import { Canvas } from "@threlte/core";

    export let width = 1920;
    export let height = 1080;
    export let background = "#000000";

    const widthStore: Writable<number> = writable(1920);
    const heightStore: Writable<number> = writable(1080);
    const backgroundStore: Writable<string> = writable("#000000");

    $: { $widthStore = width }
    $: { $heightStore = height }
    $: { $backgroundStore = background }

    const keyboard = new Keyboard();

    export const context: GameContext = {
        width: widthStore,
        height: heightStore,
        background: backgroundStore,
        onKeyboardEvent: keyboard.on.bind(keyboard),
        isKeyboardPressed: keyboard.isPressed.bind(keyboard),
        getKeyboardStore: keyboard.getStore.bind(keyboard),
    }

    setupGame(context);
    onMount(() => {
        keyboard.start();
    });

    let wiw = 0;
    let wih = 0;

    let threlteCtx;

</script>

<div class="game" style:background-color={background}>
    <Canvas size={{ width: width, height: height }} frameloop="always" bind:ctx={threlteCtx}>
        <slot />
    </Canvas>
</div>

<svelte:window bind:innerHeight={wih} bind:innerWidth={wiw}></svelte:window>

<style>
    .game {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .game :global(canvas) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
        object-fit: contain;
    }
</style>