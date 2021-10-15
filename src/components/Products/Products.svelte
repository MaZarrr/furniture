<script>
    import {onMount, onDestroy} from "svelte"
    // import products from "../../stores/product";
    import Product from "./Product.svelte";
    // import categories, { categoryStore } from "../../stores/category"
    // let product = [];
    // let unsubscribe;
    // console.log($products)
    // Function to add a cat (catName: string) => void;
    export let addCat;
    export let catList;

    onMount(() => {
        if ('function' === typeof addCat) {
            addCat('Mr. Whiskers');
        }
        console.log(addCat)

    });
    console.log(catList)

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

<!--{#each $products as product (product.id)}-->
<!--    <Product {product} />-->
<!--{/each}-->