const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations); // Add this line to debug

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGV2c2hha3lhODgiLCJhIjoiY2x5enpvdGh1MjU5NzJrcXNkbGl3emYzayJ9.DnsjxjineDSbB_9z9FqmEA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
  style: 'mapbox://styles/devshakya88/clz01qbwi00h801r0atrcgo5h',
});
