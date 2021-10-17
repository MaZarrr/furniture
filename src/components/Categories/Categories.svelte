<!--<script>-->

<!--</script>-->

<!--<div class="hq wrapper">-->
<!--    <header class="hq-header">-->
<!--&lt;!&ndash;        <div class="container"></div>&ndash;&gt;-->
<!--        Header-->
<!--    </header>-->
<!--&lt;!&ndash;    <nav class="hq-menu">&ndash;&gt;-->
<!--&lt;!&ndash;        Menu&ndash;&gt;-->
<!--&lt;!&ndash;    </nav>&ndash;&gt;-->
<!--    <main class="hq-main">-->
<!--&lt;!&ndash;        <div class="container"></div>&ndash;&gt;-->
<!--        Main-->
<!--    </main>-->

<!--    <aside class="hq-aside">-->
<!--        Aside-->
<!--    </aside>-->
<!--    <footer class="hq-footer">-->
<!--&lt;!&ndash;        <div class="container"></div>&ndash;&gt;-->
<!--        Footer-->
<!--    </footer>-->
<!--</div>-->

<article class="card card-table">
    <img src="card-image" alt="card-image" class="card-image" width="350px" height="350px">

<div class="card-info">
    <h3>Черника свежая</h3>
    <p class="card-info-extra">Отличный товар по привлекательной цене!</p>
</div>
<dl class="card-stats">
    <dt class="g1">Категория</dt>
    <dd class="g2">Ягоды</dd>
    <dt class="g3">Вес нетто</dt>
    <dd class="g4">1 кг</dd>
    <dt class="g5">Стоимость</dt>
    <dd class="g4">1000 руб</dd>
</dl>

    <div class="card-button">
        <a href="#" class="button"> В корзину</a>
    </div>

</article>


<style>
    .card {
        margin-bottom: 150px;
        display: grid;
        grid-template-rows: 340px repeat(3, auto);
        gap: 10px;
        max-width: 350px;
    }
    .card-table{
        grid-template-columns: 350px 1fr auto;
        grid-template-rows: repeat(2, auto);
        max-width: 900px;
    }

    .card-table .card-image {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        width: 350px;
        height: 250px;
    }

    .card-table .card-info {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .card-table .card-stats {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
    .card-table .card-button {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }
    .card-image {
        background-color: #9e3aa3;
        width: 350px;
        height: 340px;
    }
    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .card-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto 1fr;
    }
    .card-info{
        margin-left: 20px;
        margin-right: 20px;
    }
    .card-stats dt {
        grid-row: 1 / 2;
    }
    .card-stats dd {
        margin: 0;
    }
    .button {
        display: block;
        padding: 10px 20px;
        margin: 20px;
        background: #222222;
        color: white;
    }
</style>


<!--<style>-->
<!--    .grid{-->
<!--        display: grid;-->
<!--        grid-template-columns: auto 1fr 1fr;-->
<!--        /*grid-template-columns: repeat(4, 100px 250px); 4 раза повторить комбинацию из 2 колонок*/-->
<!--        /*grid-template-columns: repeat(12, 1fr); 12 колонок 1fr*/-->
<!--    }-->


<!--    .wrapper{-->
<!--        margin: 0 auto;-->
<!--        /*padding: 0;*/-->
<!--    }-->
<!--    .hq {-->
<!--        display: grid;-->
<!--        background-color: #d2c0c0;-->
<!--        grid-template-columns: 100px 600px;-->
<!--        /*grid-template-columns: 100px 600px;  именованные линии [content-teamplate-start] */-->
<!--        grid-template-rows: 40px 200px 400px;-->
<!--        /*row-gap: 10px;*/-->
<!--        /*column-gap: 20px;*/-->
<!--        padding: 10px;-->
<!--        gap: 10px 20px;-->
<!--    }-->
<!--    .hq-header {-->
<!--        grid-column: 1 / 5;-->
<!--        background-color: #9e3aa3;-->
<!--    }-->

<!--    .hq-main {-->
<!--        grid-column: 1 / 4;-->
<!--        grid-row: 2 / -2;-->
<!--        background-color: #bcff6d;-->
<!--    }-->

<!--    .hq-aside {-->
<!--        grid-row: 2 / -2;-->
<!--        background-color: #748eef;-->
<!--    }-->

<!--    .hq-footer {-->
<!--        grid-column: 1 / 5;-->
<!--        background-color: #20a069;-->
<!--    }-->

<!--    /*.hq-menu {*/-->
<!--    /*    background-color: #9e3aa3;*/-->

<!--    /*}*/-->
<!--    /*.container {*/-->
<!--    /*    width: 1440px;*/-->
<!--    /*    margin: 0 auto;*/-->
<!--    /*}*/-->
<!--</style>-->














<!--<style>-->
<!--    .wrapper{-->
<!--        margin: 0 auto;-->
<!--        padding: 0;-->
<!--    }-->
<!--    .hq {-->
<!--        display: grid;-->
<!--        background-color: #d2c0c0;-->
<!--        grid-template-columns: 100px 600px;-->
<!--        grid-template-rows: 40px 200px 400px;-->

<!--        grid-template-areas:-->
<!--        "menu header header"-->
<!--        "menu content content"-->
<!--        "footer footer footer"-->
<!--        ;-->
<!--        /*grid-column-start: 1;*/-->
<!--        /*grid-column-end: 3;*/-->

<!--    }-->
<!--    .hq-header {-->
<!--        grid-area: header;-->
<!--        background-color: #9e3aa3;-->
<!--    }-->

<!--    .hq-main {-->
<!--        grid-area: menu;-->
<!--        background-color: #bcff6d;-->
<!--    }-->

<!--    .hq-aside {-->
<!--        grid-area: content;-->
<!--        background-color: #748eef;-->
<!--    }-->

<!--    .hq-footer {-->
<!--        grid-area: footer;-->
<!--        background-color: #20a069;-->
<!--    }-->

<!--    /*.hq-menu {*/-->
<!--    /*    background-color: #9e3aa3;*/-->

<!--    /*}*/-->
<!--    /*.container {*/-->
<!--    /*    width: 1440px;*/-->
<!--    /*    margin: 0 auto;*/-->
<!--    /*}*/-->
<!--</style>-->
















<!--<style>-->
<!--    .wrapper{-->
<!--        max-width: 400px;-->
<!--        margin: 0 auto;-->
<!--        height: 400px;-->
<!--        padding: 0;-->
<!--    }-->
<!--    .hq {-->
<!--        display: grid;-->
<!--        background-color: #d2c0c0;-->
<!--        grid-template-columns: 100px 100px 100px 100px;-->
<!--        grid-template-rows: 100px 100px 100px 100px;-->
<!--        /*grid-column-start: 1;*/-->
<!--        /*grid-column-end: 3;*/-->

<!--    }-->
<!--    .hq-header {-->
<!--        background-color: #2c99ab;-->
<!--        grid-column: 1 / -1;-->
<!--        /*grid-column: span 2;*/-->
<!--    }-->

<!--    .hq-aside {-->
<!--        background-color: #ff4583;-->
<!--        grid-row: 2  / -2;-->
<!--    }-->

<!--    .hq-main {-->
<!--        background-color: #94ff80;-->
<!--        grid-row: 2  / -2;-->
<!--        grid-column: 1 / 4;-->
<!--    }-->

<!--    .hq-menu {-->
<!--        background-color: #9e3aa3;-->

<!--    }-->

<!--    .hq-footer {-->
<!--        background-color: #d9ce28;-->
<!--        grid-column: 1 / 5;-->
<!--    }-->

<!--    .container {-->
<!--        width: 1440px;-->
<!--        margin: 0 auto;-->
<!--    }-->
<!--</style>-->
















<!--<style>-->
<!--    .wrapper{-->
<!--        max-width: 400px;-->
<!--        margin: 0 auto;-->
<!--        height: 400px;-->
<!--        padding: 0;-->
<!--    }-->
<!--    .hq {-->
<!--        display: grid;-->
<!--        background-color: #d2c0c0;-->
<!--        grid-template-columns: 100px 100px 100px 100px;-->
<!--        grid-template-rows: 50px;-->
<!--        /*grid-column-start: 1;*/-->
<!--        /*grid-column-end: 3;*/-->

<!--    }-->
<!--    .hq-header {-->
<!--        background-color: #2c99ab;-->
<!--        grid-column: 1 / span 4;-->
<!--        /*grid-column: span 2;*/-->
<!--    }-->

<!--    .hq-aside {-->
<!--        background-color: #ff4583;-->
<!--    }-->

<!--    .hq-main {-->
<!--        background-color: #94ff80;-->
<!--    }-->

<!--    .hq-menu {-->
<!--        background-color: #9e3aa3;-->
<!--        grid-column: 1 / 4;-->
<!--        grid-row: 2 / -2;-->
<!--    }-->

<!--    .hq-footer {-->
<!--        background-color: #d9ce28;-->
<!--    }-->

<!--    .container {-->
<!--        width: 1440px;-->
<!--        margin: 0 auto;-->
<!--    }-->
<!--</style>-->











<!-- -------------------------------------------------------------- -->
<!--<style>-->
<!--    .wrapper{-->
<!--        max-width: 1200px;-->
<!--        margin: 0 auto;-->
<!--        /*height: 1000px;*/-->
<!--        padding: 0;-->
<!--        background-color: #d2c0c0;-->
<!--    }-->
<!--    .hq {-->
<!--        display: grid;-->
<!--        grid-template-areas:-->
<!--        "header header"-->
<!--        "navigation navigation"-->
<!--        "main ads"-->
<!--        "footer footer";-->
<!--        grid-template-columns: 1fr 150px;-->
<!--        grid-template-rows: 100px auto 1fr 30px;-->
<!--        grid-gap: 10px;-->
<!--        min-height: 100vh;-->
<!--    }-->
<!--    .hq-header {-->
<!--        grid-area: header;-->
<!--        background-color: #2c99ab;-->
<!--    }-->

<!--    .hq-aside {-->
<!--        background-color: #ff4583;-->
<!--        grid-area: ads;-->
<!--    }-->

<!--    .hq-main {-->
<!--        grid-area: main;-->
<!--        background-color: #94ff80;-->
<!--    }-->

<!--    .hq-menu {-->
<!--        grid-area: navigation;-->
<!--        background-color: #9e3aa3;-->
<!--    }-->

<!--    .hq-footer {-->
<!--        grid-area: footer;-->
<!--        background-color: #d9ce28;-->
<!--    }-->

<!--    .container {-->
<!--        width: 1440px;-->
<!--        margin: 0 auto;-->
<!--    }-->
<!--</style>-->



<!--<style>-->
<!--    .wrapper{-->
<!--        max-width: 1200px;-->
<!--        margin: 0 auto;-->
<!--        /*height: 1000px;*/-->
<!--        padding: 0;-->
<!--        background-color: #d2c0c0;-->
<!--    }-->
<!--    .hq {-->
<!--        display: grid;-->
<!--        grid-template-columns: 150px 1fr 150px;-->
<!--        grid-template-rows: 100px 1fr 50px;-->
<!--        grid-gap: 10px;-->
<!--        min-height: 100vh;-->
<!--    }-->
<!--    .hq-header {-->
<!--        grid-column: 1 / 4;-->
<!--        background-color: #9e3aa3;-->
<!--    }-->

<!--    .hq-aside {-->
<!--        background-color: #ff4583;-->
<!--    }-->

<!--    .hq-main {-->
<!--        background-color: #59ab63;-->
<!--    }-->

<!--    .hq-menu {-->
<!--        background-color: #fff5cf;-->
<!--    }-->

<!--    .hq-footer {-->
<!--        grid-column: 1 / 4;-->
<!--        background-color: #67e978;-->
<!--    }-->

<!--    .container {-->
<!--        width: 1440px;-->
<!--        margin: 0 auto;-->
<!--    }-->
<!--</style>-->