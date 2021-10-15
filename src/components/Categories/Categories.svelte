<script>
    import Loading from "../UI/Loading.svelte";

    export let title = "";
    import Category from './Category.svelte';
    import Button from '../../stories/Button.svelte'
    import categories, {categoryStore, categoryItems, selectCategory} from "../../stores/category"
    import {onMount} from "svelte";
    import {link} from "svelte-routing";

    let selected = {name: "Все"}

    onMount(() => {
        selectCategory("Все")
    })

</script>

<section class="section">
    <h2 class="section-title">Выберите категорию:</h2>
    <form on:submit|preventDefault={() => {}}>
        <div class="select">
            <select bind:value={selected} on:change={() => selectCategory(selected.name)}>
                {#each categoryItems as item (item.name)}
                    <option value={item} class:name={item.name === selected.name}>
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
    <div style="display: flex; justify-content: space-between">
        <h4>Выбрана категория: {selected ? selected.name : "<Loading/>"}</h4>
        <a href="/about" use:link>
        <Button label="Подробнее" onClick={undefined} backgroundColor="#e9fa1e" size="large"/>
        </a>
    </div>
</section>

<style>
    .name {
        background-color: red;
    }

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
        width: 70%;
        margin: 0 auto 40px auto;
        height: 2em;
        line-height: 2;
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

