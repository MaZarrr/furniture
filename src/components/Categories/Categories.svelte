<script>
    import Loading from "../UI/Loading.svelte";

    export let title = "";
    import Category from './Category.svelte';
    import categories, {categoryStore, categoryItems, selectCategory} from "../../stores/category"

    let selected;

    console.log("categoryStore", $categoryStore)
</script>

<section class="section">
    <h1 class="section-title">{title}
    <p>Выберите категорию:</p>
    <form on:submit|preventDefault={() => {}}>
        <div class="select">
        <select bind:value={selected} on:change={() => selectCategory(selected.name)}>
            {#each categoryItems as item (item.name)}
                <option value={item}>
                      {item.name}
                </option>
            {/each}
        </select>
        </div>

    </form>
    <div class="category-center">

    {#each $categoryStore as category (category.id)}
        {#if !!category.select}
            <Category {category} />
        {/if}
        {:else}
        <Loading />
    {/each}

    </div>
    <h4>Выбрана категория: {selected ? selected.name : "<Loading/>"}</h4>

</section>

<style>
    select {
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0!important;
        margin: 0 auto;
        background: #402c2c none;
        flex: 1;
        padding: 0 .5em;
        color: #fff;
        width: 70%;
        font-size: 0.7em;
        cursor: pointer;
    }
    select::-ms-expand {
        display: none;
    }

    .select {
        position: relative;
        display: flex;
        max-width: 1200px;
        margin: 0 auto 40px auto;
        height: 1.1em;
        line-height: 1.1;
        background: #402c2c;
        overflow: hidden;
        border-radius: .25em;
    }
    .select::after {
        content: '\25BC';
        position: absolute;
        top: 0;
        color: white;
        right: 0;
        padding: 0 1em;
        background: #457E94;
        cursor: pointer;
        pointer-events: none;
        transition: .25s all ease;
    }

    .select:hover::after {
        color: #1b1662;
    }
</style>

