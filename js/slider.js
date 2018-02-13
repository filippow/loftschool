

//Аккордеон для секции МЕНЮ

 var acco2 = document.querySelectorAll(".menu__list"); 
 for (var i=0; i<acco2.length; i++) {
 	acco2[i].addEventListener('click',function(el) {
 		for (var j=0; j<acco2.length; j++) {
 			
 			acco2[j].classList.remove('menu__list--active');
 		}

 		el.currentTarget.classList.toggle('menu__list--active');
 	
 	});
 }

//Аккордеон для секции КОМАНДА

var acco = document.querySelectorAll(".team-acco__item");
 for (var i=0; i<acco.length; i++) {
 	acco[i].addEventListener('click',function(e) {
 		for (var j=0; j<acco.length; j++) {
 		
 			acco[j].classList.remove('team-acco__item--active');
 		}
 		e.currentTarget.classList.toggle('team-acco__item--active');
 	
 	});
 }


//При клике на гамбургер, для появления меню на планшете и телефоне

var gamburger = document.querySelector('.gamburger');
gamburger.addEventListener('click',function() {
	var underMenu = document.querySelector('.under-menu');
	underMenu.classList.remove('not-visible');
});


// При клике на меню на главном экране 

var exit = document.querySelector('.exit');
exit.addEventListener('click',function() {
	var underMenu = document.querySelector('.under-menu');
	underMenu.classList.add('not-visible');
});


var link = document.querySelectorAll('.under-menu__item');

for (var i=0; i<link.length; i++) {
	link[i].addEventListener('click', function() {
		var underMenu = document.querySelector('.under-menu');
		underMenu.classList.add('not-visible');
	});
}


// Появление состава при нажатии на кнопку состав







 



//		Навигационная панель

var navigat = document.querySelectorAll('.navigat__item');
for (var i=0; i<navigat.length; i++) {
		navigat[i].addEventListener('click', function(e) {
			for (var j=0; j<navigat.length; j++) {
				navigat[j].classList.remove('navigat__item--active');
			}
		e.currentTarget.classList.toggle('navigat__item--active');

		});
}






// ***********************		testing



var prev = document.querySelector('.slider__button--left');
var next = document.querySelector('.slider__button--right');
var sliders = document.querySelectorAll('.slider__item');
var sliderList = document.querySelector('.slider__list');
var sliderContainer = document.querySelector('.slider__container');
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;



next.addEventListener('click',function(e) {
	e.preventDefault();
	 var currentLeft = (parseInt(getComputedStyle(sliderList).left));
 	console.log(sliders.length);
    if (start < sliders.length && currentLeft % size == 0) {        
      sliderList.style.left = currentLeft - size + 'px';
      start++;      
      
    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft + (sliders.length-1) * size + 'px';
      start = 1;      
    }
  
});
	
prev.addEventListener('click',function(e) {
	e.preventDefault();
	var currentLeft = (parseInt(getComputedStyle(sliderList).left));

    if (start >1 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft + size + 'px';
        start--;
    
    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft- (sliders.length-1)*size + 'px';
      start = sliders.length;     
    }
});

var consist = document.querySelectorAll('.slider__consist');
var show = document.querySelectorAll('.consist-info');


		consist[0].addEventListener('click',function() {
				show[0].classList.toggle('consist-info--visible');
	});
		consist[1].addEventListener('click',function() {
				show[1].classList.toggle('consist-info--visible');
	});
		consist[2].addEventListener('click',function() {
				show[2].classList.toggle('consist-info--visible');
	});
		consist[3].addEventListener('click',function() {
				show[3].classList.toggle('consist-info--visible');
	});
		

window.addEventListener('resize', function() {  
  size = parseInt(getComputedStyle(sliderContainer).width); 
  // console.log("size: " + size);
  // console.log("start: " + start);
  // console.log(-size * start);
  sliderList.style.left = -size * (start-1) + 'px';
});







//			Модальное окно отключение скролла
/*

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});*/