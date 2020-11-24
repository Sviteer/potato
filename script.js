

(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){
      var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top' : (scrollPos/2)+'px',
          'opacity' : 1-(scrollPos/700)
        });
        $('.parallax-00').css({
          'top' : (scrollPos/-3.5)+'px'
        });
        $('.parallax-01').css({
          'top' : (scrollPos/-2.8)+'px'
        });
        $('.parallax-top-shadow').css({
          'top' : (scrollPos/-2)+'px'
        });
      });    
	  }
	scrollBanner();	              
           
//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
  
  });            
              
})(jQuery);


function showTime() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM";
	if (h == 0) {
		h = 12;
	}
	if (h > 12) {
		h = h - 12;
		session = "PM";
	}
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1000);
}
showTime();

function showData() {
	var block = document.getElementById('block');
	var timerFIG = 5;
	startTimer();

	function startTimer() {
		if (timerFIG > 0) {
			block.innerHTML = 'Данные появятся через ' + timerFIG + ' секунд...';
			timerFIG--;
			setTimeout(startTimer, 1000);
		} else {
			myWindowOpen();
		}
	}
}
let newWindow;

function myWindowOpen() {
	newWindow = window.open("img/gif1.gif", 'newWindow', "width=600, height=600");
}
//brouser
var code = navigator.appCodeName;
var name = navigator.appName;
var vers = navigator.appVersion;
var platform = navigator.platform;
console.log('Ваш браузер: ' + name +
	'\nВерсия браузера: ' + vers +
	'\nКодовое название браузера: ' + code +
	'\nПлатформа: ' + platform);
//array
function addName() {
	var arrContainer = document.getElementById('array'),
		n = 3, // число элементов массива
		max = 3, // макс. число перезапросов
		att, // счётчик попыток
		i, // индекс элемента массива
		greet = ' ', // сообщение при запросе
		arr = [] // создаем массив
	;
	for (i = 0; i < n; i++) {
		for (att = 0; att < max;) {
			greet = 'Введите ваше любимое блюдо №' + (i + 1);
			if (att++ > 0) greet += ' (попытка ' + att + ' из ' + max + ')';
			arr[i] = prompt(greet); // Заполняем массив
			if (null !== arr[i] && arr[i].length) break;
			if (att === max) {
				alert("Ну чево вы отказываетесь");
				return false;
			}
		}
	}
	arrContainer.innerHTML = JSON.stringify(arr);
	return arr;
}
addName();
console.log('Minimum element: ' + min(numTwo, numOne));
console.log('Ваше число ' + x + ' в степени ' + n + ' = ' + poww(x, n));



