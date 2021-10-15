<script lang="ts">
    import { Provider } from "svelte-redux-connect";


    import { Router, Route } from "svelte-routing";

    import { onMount } from 'svelte';

    //pages
    import Products from './pages/Products.svelte'
    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'

    // components
    import Navbar from "./components/Navbar/Navbar.svelte";
    import store from './store.js';



    // import globalStore from './stores/globalStore'

    // export let url="{url}"
    // console.log($globalStore)
</script>
    <Provider {store}>
    <Router>
        <Navbar />
        <Route path="/" component={Home}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/about" component={About}></Route>
<!--    <Route path="products/:name" component={ProductTemplate}></Route>-->
    </Router>
    </Provider>

