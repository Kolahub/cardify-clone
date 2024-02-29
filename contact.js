var map = L.map('map').setView([0, 0], 13);
L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);

  // Use geolocation to get the user's current position
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Create a marker at the user's current position
    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("You are here!").openPopup();

    // Center the map on the user's location
    map.setView([latitude, longitude], 16);
  }, function(error) {
    console.error("Error getting user location:", error);
    alert("Error getting user location. Please allow location access.");
  });