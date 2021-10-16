<script>
    import {onMount, onDestroy} from "svelte"
    export let products;
    export let loadProducts;

    // onMount(() => {

    // })
</script>

<h1>
    Products component
</h1>
<button on:click={() => loadProducts({
            id: 9,
            description: "",
            image: "assets/images-category/komod.jpg",
            name: "Мониторы",
            select: false,
        })}>ddddddddddddddddd</button>
{#each products as cat}
    <li>
        {cat.name}
    </li>
{/each}
