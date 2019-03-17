

var map = AmCharts.makeChart("chartdiv", {
  type: "map",
  "theme": "none",
  pathToImages: "https://www.amcharts.com/lib/3/images/",

  colorSteps: 10,

  dataProvider: {
    map: "worldLow",
    zoomLatitude: 40,
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
  document.getElementById("infotitle").innerHTML = event.mapObject.title ;
  document.getElementById("infolang").innerHTML = event.mapObject.info;
  //document.getElementById("info").innerHTML = '<h1 class="fancytext">' + event.mapObject.title + '</h1><br><h4>' + event.mapObject.info + '</h4>';
});
