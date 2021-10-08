import { derived, writable } from "svelte/store";
import localCategory from "../../localCategory";

export const categoryItems = [
    {
        id: 0,
        name: "Все"
    },
    {
        id: 1,
        name: "Комоды и тумбы",
    },
    {
        id: 2,
        name: "Мебель для кухни",
    },
    {
        id: 3,
        name: "Мебель для офиса",
    },
    {
        id: 4,
        name: "Стенки для гостинной",
    },
]

const store = writable([...localCategory])

// global functions
export const selectCategory = name => {
    if(name === "Все") {
        return store.set(localCategory)
    } else {
        store.update(storeValue => {
            return localCategory.filter((item) => {
                return item.name === name
            })
        })
    }
}

// localStorage

// local functions
// function flattenCategory(data) {
//     return data.map(item => {
//         let image = item.image.url;
//         return {...item, image}
//     })
// }
// export const addFavorite = (id) => {
//
// }

export const categoryStore = derived(store, $categories => {
    console.log($categories)
    return $categories
})

export default store;


// store.update(storeValue => {
//     const category = storeValue.find((item) => item.id === id);
//     const categoryIndex = storeValue.findIndex((item) => item.id === id);
//     const updateCategory = {
//         ...category,
//         select: true
//     }
//     console.log(updateCategory)
//     return {
//         storeValue: [
//             ...storeValue.slice(0, categoryIndex),
//             updateCategory,
//             ...storeValue.slice(categoryIndex + 1)
//         ]
//     }
// })
