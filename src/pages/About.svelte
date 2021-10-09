<script>
    import Map from 'ol/Map';
    import View from 'ol/View';
    import Feature from 'ol/Feature';
    import { onMount } from "svelte";
    import Vector from 'ol/source/Vector';
    import Point from 'ol/geom/Point';
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
    import Style from 'ol/style/Style';
    import Icon from 'ol/style/Icon';
    import {fromLonLat} from 'ol/proj';
    import OSM, {ATTRIBUTION} from 'ol/source/OSM';
    // import TileJSON from 'ol/source/TileJSON';


    const moscow = new Feature({
        geometry: new Point(fromLonLat([37.61556, 55.75222])),
    });

    moscow.setStyle(
        new Style({
            image: new Icon({
                color: '#BADA55',
                crossOrigin: 'anonymous',
                // For Internet Explorer 11
                src: 'assets/images/location.png'
            }),
        })
    );

    const vectorSource = new Vector({
        features: [moscow],
    });

    const vectorLayer = new VectorLayer({
        source: vectorSource,
    });

    const rasterLayer = new TileLayer({
        source: new OSM({
            attributions: [
                'All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',
                ATTRIBUTION,
            ],
            url:'https://a.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=8f3eb97aebe14c6c9fa9f9bc56969bc1',
        }),
    });

    onMount(() => {
       const map = new Map({
           layers: [rasterLayer, vectorLayer],
            target: 'map',
            view: new View({
                center: fromLonLat([37.61556, 55.75222]),
                zoom: 17,
            }),
        });
    })

</script>


<div id="map" class="map"></div>
