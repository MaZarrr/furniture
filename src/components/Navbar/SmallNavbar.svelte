<script>
    import {link} from "svelte-routing";
    import CartBasket from "../Cart/CartBasket.svelte";
    //cartButton
    //globalStore
</script>
<nav class="navbar">
    <div class="nav-center">
<!--        sidebar toggle-->
        <button class="btn-sidebar-toggle">
            <i class="fas fa-bars"/>
        </button>
    <a href="/" use:link class="nav-logo">
        <img class="logo" src="/assets/images/logo.png" alt="Логотим магазин мебели Любимый дом">
    </a>
    <CartBasket />
    </div>
</nav>

