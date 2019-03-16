

var map = AmCharts.makeChart("chartdiv", {
  type: "map",
  "theme": "none",
  pathToImages: "https://www.amcharts.com/lib/3/images/",

  colorSteps: 10,

  dataProvider: {
    map: "worldLow",
    zoomLatitude: 46.214708,
    zoomLevel: 1,
    zoomLongitude: 10.347274,
    areas: areas
  },

  areasSettings: {
    autoZoom: false,
    selectable: true
  }

});

map.addListener("clickMapObject",//rollOverMapObject", 
function(event) {
  document.getElementById("info").innerHTML = '<h2>' + event.mapObject.title + '</h2><p>' + event.mapObject.info + '</p>';
});
