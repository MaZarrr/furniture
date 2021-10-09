import { derived, writable } from "svelte/store";
import localCategory from "../../localCategory";

export const categoryItems = [
    {
        id: 0,
        name: "Все",
        select: true,
    },
    {
        id: 1,
        name: "Комоды и тумбы",
        select: false,
    },
    {
        id: 2,
        name: "Мебель для кухни",
        select: false,
    },
    {
        id: 3,
        name: "Мебель для офиса",
        select: false,
    },
    {
        id: 4,
        name: "Стенки для гостинной",
        select: false,
    },
]

const categoryData = writable([...localCategory])

// localFunctions -----------------------------
const toggleCategory = (name, items, action) => {
        return items.map(item => {
            return item.name === name ? {...item, select: true} : {...item, select: false}
        })
}

// global functions -------------------------
export const selectCategory = name => {
        name === "Все" ?
            categoryData.set(localCategory)
            :
            categoryData.update(storeValue => {
                return toggleCategory(name, storeValue);
            })

}

export const categoryStore = derived(categoryData, $categories => {
    return $categories
})

export default categoryData;
