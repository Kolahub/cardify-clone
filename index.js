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