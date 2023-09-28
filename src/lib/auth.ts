import { writable } from "svelte/store";

const AUTH_SERVER = "auth.wolfeycode.com"

function createAuth() {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        login: async (username: String, password: String) => {

        },
        logout: () => set(null)
    };
}

export const auth = createAuth()
