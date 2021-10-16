<script>
    import { Router, Route } from "svelte-routing";
    import { Provider } from 'svelte-redux-connect';

    import store from './redux/store.js';
    // routes page -------------
    import Products from './components/Products/products'
    import Home from './routes/Home.svelte'
    import About from './routes/About.svelte'

    // components -----------------
    import Navbar from "./components/Navbar/Navbar.svelte";

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

