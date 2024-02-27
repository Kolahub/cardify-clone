const listBtns = document.querySelectorAll(".navigation__lists");
const infotipsOverlay = document.querySelectorAll('.infotips__overlay')
listBtns.forEach((infotips) =>
  infotips.addEventListener("click", function () {
    infotips.classList.toggle("activeInfo");
    infotipsOverlay.addEventListener('click', function() {
      infotips.classList.remove("activeInfo");
  })
  })
);

listBtns.forEach((listBtn) => {
  listBtn.addEventListener("click", function () {
    listBtns.forEach(function (item) {
      if (item !== listBtn) {
        item.classList.remove("active");
      }
    });
    console.log("hello world");
    listBtn.classList.toggle("active");
  });
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var map = L.map('map').setView([7.3870801,3.822658], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([51.5, -0.09]).addTo(map);
