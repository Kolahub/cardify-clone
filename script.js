const listBtns = document.querySelectorAll('.navigation__lists')

listBtns.forEach(listBtn => {
    listBtn.addEventListener('click', function () {
        listBtns.forEach(function(item) {
            if (item !==  listBtn) {
                item.classList.remove('active')
            }
        })
        console.log('hello world')
        listBtn.classList.toggle('active');
    });
    })

    var map = L.map('map').setView([7.3870801,3.822658], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([51.5, -0.09]).addTo(map)