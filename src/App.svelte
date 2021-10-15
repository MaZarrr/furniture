<script>
    import { Provider } from "svelte-redux-connect";


    import { Router, Route } from "svelte-routing";

    import { onMount } from 'svelte';

    //pages
    // import Products from './pages/Products.svelte'
    import Products from './components/Products/products'
    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'

    // components
    import Navbar from "./components/Navbar/Navbar.svelte";
    import store from './store.js';
    // export let store;
    // console.log(props)

    // console.log(store.getState())
    // import globalStore from './stores/globalStore'
    console.log(store.getState())
    // export let url="{url}"
    // console.log($globalStore)
</script>
    <Provider {store}>
        <Products />
<!--    <Router>-->
<!--        <Navbar />-->
<!--        <Route path="/" component={Home}></Route>-->
<!--        <Route path="/products" component={Products}></Route>-->
<!--        <Route path="/about" component={About}></Route>-->
<!--&lt;!&ndash;    <Route path="products/:name" component={ProductTemplate}></Route>&ndash;&gt;-->
<!--    </Router>-->
    </Provider>

