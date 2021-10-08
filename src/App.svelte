<script lang="ts">
    // import { Provider } from 'svelte-redux-connect';
    // import store from './store.ts';
    import {Router, Route } from "svelte-routing";

    //pages
    import Products from './pages/Products.svelte'
    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'

    // components
    import Navbar from "./components/Navbar/Navbar.svelte";

    // import globalStore from './stores/globalStore'

    // export let url="{url}"
    // console.log($globalStore)
</script>

    <Router>
        <Navbar />
        <Route path="/" component={Home}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/about" component={About}></Route>
<!--    <Route path="products/:name" component={ProductTemplate}></Route>-->
    </Router>

