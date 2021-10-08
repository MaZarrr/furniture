<script lang="ts">
    // import {onMount, onDestroy} from "svelte"
    import products from "../../stores/product";
    import Product from "./Product.svelte";

    let product = [];
    // let unsubscribe;
    console.log($products)
    // onMount(() => {
    //   unsubscribe = products.subscribe(value => {
    //         product = value
    //     })
    // })
    // onDestroy(() => {
    //     unsubscribe()
    // })
</script>

<h1>
    Products component
</h1>

{#each $products as product (product.id)}
    <Product {product} />
{/each}