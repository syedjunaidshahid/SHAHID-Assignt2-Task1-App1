require([
    "esri/WebMap",
    "esri/views/MapView"
], function(WebMap, MapView) {

    var webmap = new WebMap({
        portalItem: {
            id: "5a9efb97397148fa976307ef2595760e" // Replace with your actual web map ID
        }
    });

    var view = new MapView({
        map: webmap,
        container: "viewDiv"
    });

});
