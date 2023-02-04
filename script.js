var map = new maplibregl.Map({
    container: "map",
    style: {
      version: 8,
      sources: {
        rtile: {
          type: "raster",
          tiles: ["https://tile.openstreetmap.jp/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution:
            '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      },
      layers: [
        {
          id: "raster-tiles",
          type: "raster",
          source: "rtile",
          minzoom: 0,
          maxzoom: 22
        }
      ]
    },
    center: [140.8830781, 38.2615922],
    zoom: 13
  });

map.on('load', function () {
// Add Mapillary sequence layer.
// https://www.mapillary.com/developer/tiles-documentation/#sequence-layer
map.addSource('map', {
'type': 'vector',
'tiles': [
'https://github.io/magn01ia/fudevectile/mito/{z}/{x}/{y}.pbf'
],
'minzoom': 1,
'maxzoom': 14
});
map.addLayer(
{
'id': 'mapillary',
'type': 'fill',
'source': 'mito',
'source-layer': 'sequence',
'layout': {
},
'paint': {
'line-opacity': 0.6,
'line-color': 'rgb(53, 175, 109)',
'line-width': 2
}
},
'water_name_line'
);
});