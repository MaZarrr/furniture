<script>
    import Hero from '../components/Hero.svelte'
    import {Link} from 'svelte-routing'
    // import {Meta, Template, Story} from '@storybook/addon-svelte-csf';

    export let location;
    // components
    import Categories from '../components/Categories/Categories.svelte'
    import Button from "../components/UI/Button.svelte";

    console.log(location)
    // link component
    // function getProps(){
    //     return {class: "string"}
    // }
</script>

<Hero>
    <!--    <Link to="" {getProps}>Посмотреть</Link>-->
    <!--    <a href="/products" use:link class="" {getProps}>Посмотреть</Link>-->
</Hero>
<Categories  />