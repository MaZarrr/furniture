<script>
    import { Router, Route } from "svelte-routing";
    import { Provider } from 'svelte-redux-connect';

    import store from './redux/store.js';
    // routes page -------------
    import Products from './components/Products/products'
    import Home from './routes/Home.svelte'
    import About from './routes/About.svelte'
    import Dialog from './components/UI/Modal/Modal.svelte'
    import localCategory from "../localCategory";
    // components -----------------
    import Navbar from "./components/Navbar/Navbar.svelte";

    let modal;
    let content
    function testModal(name){
        content = name
        modal.open()
    }
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

{#each localCategory as category, i (category.id)}
    <button on:click={() => testModal(category.name)}>Открыть</button>
{/each}


<Dialog bind:this={modal}>
    <div slot="content">
        <p>
            {content}
        </p>
    </div>
</Dialog>


<!-- ============================================================================== -->

<!--<script>-->
<!--    import { Router, Route } from "svelte-routing";-->
<!--    import { Provider } from 'svelte-redux-connect';-->

<!--    import store from './redux/store.js';-->
<!--    // routes page -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--    import Products from './components/Products/products'-->
<!--    import Home from './routes/Home.svelte'-->
<!--    import About from './routes/About.svelte'-->
<!--    import Dialog from './components/UI/Modal/Modal.svelte'-->
<!--    import localCategory from "../localCategory";-->
<!--    // components -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--    import Navbar from "./components/Navbar/Navbar.svelte";-->

<!--    import { booleanStore } from './components/UI/Modal/store-modal'-->

<!--    const { isOpen, open, close } = store-->

<!--    let modal;-->
<!--    let content-->
<!--    let open;-->
<!--    function testModal(name){-->
<!--        content = name-->
<!--        open()-->
<!--    }-->
<!--</script>-->
<!--<Provider {store}>-->
<!--    <Router>-->
<!--        <Navbar />-->
<!--        <Route path="/" component={Home}></Route>-->
<!--        <Route path="/products" component={Products}></Route>-->
<!--        <Route path="/about" component={About}></Route>-->
<!--        &lt;!&ndash;    <Route path="products/:name" component={ProductTemplate}></Route>&ndash;&gt;-->
<!--    </Router>-->
<!--</Provider>-->

<!--{#each localCategory as category, i (category.id)}-->
<!--    <button on:click={() => testModal(category.name)}>Открыть</button>-->
<!--{/each}-->


<!--<Dialog>-->
<!--    <div slot="trigger" let:open>-->
<!--        <button on:click={open}>Open Modal</button>-->
<!--    </div>-->
<!--    <div slot="header">-->
<!--        <h1>First Modal</h1>-->
<!--    </div>-->
<!--    <div slot="content">-->
<!--        &lt;!&ndash; Modal within a Modal &ndash;&gt;-->
<!--        <Dialog>-->
<!--            <div slot="trigger" let:open>-->
<!--                <button on:click={open}>Open Second Modal</button>-->
<!--            </div>-->
<!--            <div slot="header">-->
<!--                <h1>Second Modal</h1>-->
<!--            </div>-->
<!--            <div slot="content">-->
<!--                <p>-->
<!--                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex-->
<!--                    totam corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores,-->
<!--                    provident error vel veritatis itaque nemo commodi.-->
<!--                </p>-->
<!--            </div>-->
<!--        </Dialog>-->

<!--        <p>-->
<!--            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex-->
<!--            totam corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident-->
<!--            error vel veritatis itaque nemo commodi.-->
<!--        </p>-->
<!--    </div>-->

<!--    <div slot="footer" let:store={{close}}>-->
<!--        <button on:click={close}>Close First Modal</button>-->
<!--    </div>-->
<!--</Dialog>-->


<!--<Dialog bind:this={modal}>-->
<!--    <div slot="content">-->
<!--        <p>-->
<!--            {content}-->
<!--        </p>-->
<!--    </div>-->
<!--</Dialog>-->
