import { writable, derived } from "svelte/store";

const cart = writable([
    {
        id: 1,
        name: "1123",
        image: "",
        select: {},
        amount: 1,
        price: 12
    },
    {
        id: 2,
        name: "12",
        image: "",
        select: {},
        amount: 1,
        price: 12
    },
    {
        id: 3,
        name: "120",
        image: "",
        select: {},
        amount: 1,
        price: 12
    },
    {
        id: 4,
        name: "1123",
        image: "",
        select: {},
        amount: 1,
        price: 12
    },
    {
        id: 5,
        name: "12",
        image: "",
        select: {},
        amount: 1,
        price: 12
    },
    {
        id: 6,
        name: "120",
        image: "",
        select: {},
        amount: 1,
        price: 12
    },
    {
        id: 7,
        name: "120",
        image: "",
        select: {},
        amount: 1,
        price: 12
    }
])

// cart total
export const cartTotal = derived(cart, ($cart) => {
    let total = $cart.reduce((acc, curr) => {
        return (acc += curr.amount * curr.price);
    }, 0)
    return total
})

// local func
const remove = (id, items) => {
    return items.filter(item => item.id !== id)
}
// global func
export const removeItem = id => {
    cart.update(storeValue => {
        return remove(id, storeValue)
    })
}

export default cart