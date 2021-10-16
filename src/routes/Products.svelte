<script>
    import Products from '../components/Products/Products.svelte'
    export let products;
    export let loadProducts;
</script>

<h1>
    welcome products page
</h1>
<Products {products} {loadProducts} />