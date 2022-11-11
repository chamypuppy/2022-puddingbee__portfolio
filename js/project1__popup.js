const buttonImg = document.querySelector(".project1__category4--sentence");
const popUp = document.querySelector(".project1__popup");
const closeIcon = document.querySelector(".close__btn");
for (let i = 0; i <= 100; i++){
  buttonImg.addEventListener('click', function(){
    // popUp.removeAttribute('id');
    popUp.style.display = "block"
    // popUp.style.opacity = "1"
  });
}

for (let i = 0; i <= 100; i++){
  closeIcon.addEventListener('click', function(event){
    popUp.style.display = "none"
    // event.currentTarget.classList.toggle("active__close__btn")
    // popUp.classList.toggle("active");
  });
}


window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;

	if(key == 27) {
		("popUp").fadeOut(90);
		("body").css({overflow:'scroll'}).unbind('touchmove');
	}
}