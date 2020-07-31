// Initialize and add the map
function initMap() {
    var myLatlng = new google.maps.LatLng(26.575724, 88.825255); // <- Your latitude and longitude
      var styles = [
      {
          "featureType": "water",
          "stylers": [{
              "color": "#d8dee9"
          },
          {
              "visibility": "on"
          }]
      },
      {
          "featureType": "landscape",
          "stylers": [{
              "color": "#eeeeee"
          }]
      }]
  
      var mapOptions = {
          zoom: 8,
          center: myLatlng,
          mapTypeControl: false,
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: false,
          styles: styles
      }
      
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'We are here!'
      });
  }