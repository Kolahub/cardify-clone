var map = L.map('map').setView([7.3870801,3.822658], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([51.5, -0.09]).addTo(map);