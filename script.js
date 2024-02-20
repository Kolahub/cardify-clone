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

var typed = new Typed(".auto-type",{
        strings : ["Save.", "Spend.", "Exchange."],
        typeSpeed : 150, 
        backSpeed : 150,
        loop : true
      })