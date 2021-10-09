<script>
    import Map from 'ol/Map';
    import View from 'ol/View';
    import OSM from 'ol/source/OSM';
    // import TileLayer from 'ol/layer/Tile';
    import Feature from 'ol/Feature';
    import { onMount } from "svelte";
    import Vector from 'ol/source/Vector';
    import Point from 'ol/geom/Point';
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
    import Style from 'ol/style/Style';
    import Icon from 'ol/style/Icon';


    const style = new Style({
        image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'assets/images/location.png'
        })

    })
    const layer = new VectorLayer({
        source: new Vector({
            features: [
                new Feature({
                    geometry: new Point([0, 0]),
                    name: 'Null Island',
                    population: 4000,
                    rainfall: 500,
                })
            ]
        }),
        style
    });

    onMount(() => {
       const map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 3,
            }),
        });
        map.addLayer(layer);
    })

</script>


<div id="map" class="map"></div>
