import type { Writable } from 'svelte/store';
import type { Keyboard } from "./controllers/keyboard.js";
import { getContext, setContext } from 'svelte';

const GAME = Symbol();

export type GameContext = { 
    width: Writable<number>, 
    height: Writable<number>, 
    background: Writable<string>,
    onKeyboardEvent: Keyboard["on"],
    isKeyboardPressed: Keyboard["isPressed"],
    getKeyboardStore: Keyboard["getStore"],
};

export const setupGame = function (context: GameContext) {
    if (getContext(GAME)) {
        throw new Error("Cannot Mount Game inside a Game");
    }

    setContext<GameContext>(GAME, context);
};

export const getGame = function() {
    return getContext<GameContext>(GAME);
};
