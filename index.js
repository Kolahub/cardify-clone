const listBtns = document.querySelectorAll(".navigation__lists");
listBtns.forEach((listBtn) => {
  listBtn.addEventListener("click", function () {
    listBtns.forEach(function (item) {
      if (item !== listBtn) {
        item.classList.remove("active");
        item.classList.remove("activeInfo");
      }
    });
    listBtn.classList.toggle("active");
    listBtn.classList.toggle("activeInfo");
  });
});