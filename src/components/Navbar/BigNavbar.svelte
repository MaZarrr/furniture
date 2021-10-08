<script>
    import { link } from "svelte-routing";
    import CartBasket from "../Cart/CartBasket.svelte";
    import links from "../../constants/links";
    //cartButton
    //globalStore
</script>
<nav class="navbar">
    <div class="nav-center">
<!--        nav-links-->
        <ul class="nav-links">
        {#each links as navLink}
           <li>
               <a href={navLink.url} use:link>{navLink.text}</a>
           </li>
        {/each}
        </ul>

        <a href="/" use:link class="nav-logo big-logo">
            <img  src="/assets/images/logo.png" alt="Логотим магазин мебели Любимый дом">
        </a>
        <div class="nav-aside">
            <CartBasket />
        </div>
    </div>
</nav>
