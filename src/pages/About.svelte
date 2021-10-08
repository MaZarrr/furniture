<script>
    import Map from 'ol/Map';
    import View from 'ol/View';
    import OSM from 'ol/source/OSM';
    import TileLayer from 'ol/layer/Tile';
    import { onMount } from "svelte";

    onMount(() => {
       new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
    })

</script>


<div id="map" class="map"></div>
