import { writable } from "svelte/store";

const globalStore = writable({
    sidebar: false,
    cart: false,
    alert: false
});

const store = {
    subscribe: globalStore.subscribe,
    // toggleCart: value => {
    //     globalStore.update(storeValue => {
    //         return { ...storeValue, cart: value }
    //     })
    // }
    toggleItem: (item, value) => {
        globalStore.update(storeValue => {
            return { ...storeValue, [item]: value }
        })
    }
}

export default store