import { writable } from 'svelte/store';

function createCount() {
    const {subscribe,set,update} = writable(0);

    return {
        subscribe,
        increment: () => update(n => n+2),
        decrement: () => update(n => n-2),
        reset: () =>  set(0)
    }
}

export const count = writable(0);
export const count2= createCount();