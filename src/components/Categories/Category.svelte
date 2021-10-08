<script>
    export let category;
    const {id, name, image } = category;


</script>

<article class="category" >
    <div class="image-container">
        <img src={image} alt="{name}">
    </div>
    <div class="category-footer">
        <p class="category-title">{name}</p>
    </div>
</article>
