// 1. Усовершенствовать «Меню навигации». Меню представляет 
// собой набор вкладок, например: главная, проекты, 
// услуги, контакты. По нажатию на вкладку менять 
// основной контент страницы в соответствие с 
// выбранной вкладкой. Данную механику реализовать 
// через динамические компоненты.

const main = {
	template: `<div> {{ text }} </div>`,
	data: function(){
		return {
			text: 'Main page!',
		};
	}
}

const projects = {
	template: `<div> {{ text }} </div>`,
	data: function(){
		return {
			text: 'Projects page!',
		};
	}
}

const services = {
	template: `<div> {{ text }} </div>`,
	data: function(){
		return {
			text: 'Services page!',
		};
	}
}

const contacts = {
	template: `<div> {{ text }} </div>`,
	data: function(){
		return {
			text: 'Contacts page!',
		};
	}
}

const comps = {
	data: function(){
		return {
			currentTab: 'main',
			menutabs: ['main','projects','services','contacts',],
		};
	},
	// components: {
		// 'mainmenu': main,
		// 'projectsmenu': projects,
		// 'servicesmenu': services,
		// 'contactsmenu': contacts,
	// },
	computed: {
		currentTabComp: function(){
			return 'tab-' + this.currentTab;
		}
	},
}

const root1 = Vue.createApp(comps).
	component('tab-main', main).
	component('tab-projects', projects).
	component('tab-services', services).
	component('tab-contacts', contacts).
	mount('#menu');


// 2. Реализовать Vue компонент «текстовая карусель» 
// для анекдотов или крылатых выражений. Данный 
// компонент может получать в качестве свойств массив 
// строк (каждая строка отдельный слайд для карусели) и 
// задержку в секундах между сменой слайдов. Смену 
// текстовых слайдов реализовать с какой-нибудь 
// анимацией.

const slide = {
	data: function(){
		return {
			texts: ['Я сразу смазал карту будня',
					'Плеснувши краски из стакана',
					'Я показал на блюде студня',
					'Косые скулы океана',
					'На чешуе жестяной рыбы',
					'Прочел я зовы новых губ',
					'А вы ноктюрн сыграть смогли бы',
					'На флейте водосточных труб?!',],
			period: 3000	,
			index: 0,
		};
	},
	computed: {
		text: function(){
			return	this.texts[this.index];
		},
	},
	methods:{
		next: function(){
			if( this.texts.length == this.index++) 
				this.index = 0;
		},
	},
	mounted: function(){
		window.setInterval(this.next, this.period);
	}
}

const root2 = Vue.createApp(slide).mount('#slider')

// 3. Реализовать редактируемую галерею изображений. 
// Каждое изображение в галереи имеет название, картинку 
// и кнопку, позволяющую удалить соответствующее 
// изображение из галереи. У самой галереи есть 
// возможность добавить новое изображение, путём 
// добавления названия изображения и пути к файлу картинки.
// Данную задачу решить путём создания взаимосвязанных 
// компонентов (например: «галерея» родительский компонент, 
// а карточка одного изображения – это дочерний элемент).



// 4*. Реализовать свой аудиоплеер (без добавления тега 
// <audio> на вёрстку). У плеера есть список треков для 
// воспроизведения. Можно переключаться между треками. 
// Есть кнопки по нажатию на которые будет начинаться 
// воспроизведение звука, приостанавливаться (пауза) 
// воспроизведение звука, остановка воспроизведения. 
// Приветствуется если аудиоплеер будет оформлен 
// в виде компонента.
// Ссылки, которые помогут в решении задачи:
// https://mblogm.ru/blog/ispolzovanie-html5-elementa-audio-v-javascript/
// https://html5css.ru/jsref/dom_obj_audio.php
// 5*. Осуществите сборку c помощью Vue-cli какого-нибудь 
// vue.js приложения, например, одного из домашних работ
// по модулю Vue.js.   
