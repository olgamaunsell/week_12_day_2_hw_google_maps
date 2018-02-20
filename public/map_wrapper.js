const MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype.addMarker = function (coords, location, text) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    title: location
  });

  const infowindow = new google.maps.InfoWindow({
       content: text
  });

  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });

};



MapWrapper.prototype.addClickEvent = function () {
  // this is google's addListener not the usual dom addListener
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(event);
    const markerLat = event.latLng.lat();
    const markerLng = event.latLng.lng();
    const coords = {lat: markerLat, lng: markerLng};
    this.addMarker(coords);
  }.bind(this))

};
