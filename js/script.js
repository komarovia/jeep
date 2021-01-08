//Слайдер Swiper
const mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	slidesPerView: 1,
	direction: 'horizontal',
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  dynamicBullets: true,
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 
	// And if we need scrollbar
	//scrollbar: {
	  //el: '.swiper-scrollbar',
	//},
	keyboard: {
enabled: true,
onlyInViewport: true,
pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	//simulateTouch: false,
 })
   //---------------------------

 //Скрипт для Popup
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0){
	for (let index = 0; index < popupLinks.length; index++){
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup){
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive){
			popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener('click', function (e){
				if (!e.target.closest('.popup-content')){
					popupClose(e.target.closest('.popup'));
				}
			});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

//Добавляет padding на ширину скрываемого скролла
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px'; //расчитывает ширину скролла

	if (lockPadding.length > 0) { //проверка на необходимость запуска
	for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight = lockPaddingValue;
	}
}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout);
}

//Убирает padding при плавном закрытии попапа
function bodyUnlock(){
	setTimeout(function() {
		if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
	}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

//Закрывает попап по ESC
document.addEventListener('keydown', function(e){
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

//polyfeel
(function (){
	//проверка поддержки
	if (!Element.prototype.closest) {
		//запускаем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function() {
	//проверка поддержки
	if (!Element.prototype.matches) {
		//определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
  //---------------------------

  //Валидация формы обратной связи на заполняемость
const form = document.querySelector('.feedback_form') //переменная самой формы (чтобы не ходить по всем формам на сайте)
const sendBtn = form.querySelector('.feedback_sendbtn')//кнопка submit
let name = form.querySelector('.feedback_name')//имя
let email = form.querySelector('.feedback_email')//email
let text = form.querySelector('.feedback_text')//текст
let fields = form.querySelectorAll('.field')//все поля формы (для проверки на заполняемость)

//вешает событие на submit и останавливает стандартную отправку формы
form.addEventListener('submit', function(event){
	event.preventDefault()

	let errors = form.querySelectorAll('.error')//переменная собирающая все ошибки

	//Цикл для удаления ошибок при нажатии на submit
	for (let i = 0; i < errors.length; i ++ ){
		errors[i].remove()
	}

	//Цикл для вывода ошибки перед незаполненным полем
	for (let i = 0; i < fields.length; i ++){
		if (!fields[i].value){
			let	error = document.createElement('div')//переменная создающая div
			error.className = 'error' //присваивает класс error
			error.style.color = 'red' //присваивает цвет шрифта красный
			error.innerHTML = 'Поле не заполненно' //присваивает текстовое значение
			form[i].parentElement.insertBefore(error, fields[i]) //добавляет элемент перед input
		}
	 }
  })
  //---------------------------