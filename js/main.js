
function myMap(){
//accessing area to display the map
var displayMap=document.getElementById("myMap");
//defining the center
var mapCenter=new google.maps.LatLng(34.010090,-118.496948);
var mapOptions={center:mapCenter, zoom:5, disableDefaultUI: true};
// creating the map
var map=new google.maps.Map(displayMap, mapOptions);
//marker
var marker=new google.maps.Marker({position:mapCenter});
marker.setMap(map);
//zoom in
google.maps.event.addListener(marker, "click", function(){
	map.setZoom(15);
map.setCenter(marker.getPosition());
});
}