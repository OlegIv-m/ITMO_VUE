/* 1. На вёрстке задан перечень услуг в виде списка. Внутри 
Vue приложения - это массив объектов со свойствами (название 
услуги, стоимость услуги). У пользователя есть возможность 
выбрать интересующие услуги, а ниже списка сразу же будет 
отображаться итоговая стоимость выбранных услуг пользователем. */

//root Vue instance
const root = {
	data: function(){
		return {
			services: [
				{name: 'Уборка',
				 price: 100},
				{name: 'Чистка',
				price: 200},
				{name: 'Мытье',
				price: 300}
			],
			selected: [],
			sum: 0,
		};
	},
	components: {},
	methods: {
		select(service,target){
			console.log(target.checked);
			if(target.checked)
				this.sum += service.price;
			else
				this.sum -= service.price;
		}
	}
}

let vue = Vue.createApp(root).mount("#services");

/* 2. В качестве данных дан массив объектов, описывающих статьи 
(свойства: название статьи, url местоположения статьи в интернете, 
путь к файлу картинке из статьи). На интерфейсе реализовать 
два режима отображения списка статей. Нажав одну из кнопок 
в верхней панели, будет переключаться режим показа между 
сеткой, содержащей кликабельные изображения статей, и списком 
с меньшими изображениями и текстом. */

//list of articles
const articles = [
	{name: 'article1', url: 'http://htmlbook.ru/html/a', img: '../image/a.png', id: 1,},
	{name: 'article2', url: 'http://htmlbook.ru/html/button', img: '../image/button.png', id: 2,},
	{name: 'article3', url: 'http://htmlbook.ru/html/canvas', img: '../image/canvas.png', id: 3,},
	{name: 'article4', url: 'http://htmlbook.ru/html/div', img: '../image/div.png', id: 4,},
];

//view switcher
const views = [ {name: 'table', img: './image/thumbnails.png' }, {name: 'list', img: './image/list.png', }, ];
//css  properties array
const stylestemplate = ['display: grid; grid: auto; grid-template-columns: 1fr 1fr;','display: grid; grid: auto; grid-template-columns: 1fr;'];

//Vue root instance
const root1 = {
	data: function(){
		return {
			viewarticles: articles,
			viewarray: views,
			view: views[0],
			styles: stylestemplate,
			viewstyle: stylestemplate[0],
			fontsize: 26,
			size: 100,
		};
	},
	computed:{
		viewtext: function(){
			if( this.view == this.viewarray[0])
				return 'Сетка';
			else 
				return 'Список';
		},
		// view: function(){
			// return
		// }
		
	},
	methods: {
		changeview(){
			if ( this.view == this.viewarray[0] ) {
				this.viewstyle = this.styles[1];
				this.view = this.viewarray[1];
			}
			else {
				this.viewstyle = this.styles[0];
				this.view = this.viewarray[0];
			}
			if ( this.view.name == 'list' ) {
				this.viewstyle += `font-size: ${this.fontsize - 14}px`;
			}
			else {
				this.viewstyle += `font-size: ${this.fontsize}px`;
			}
		}
	},
	beforeMount(){
		this.viewstyle += `font-size: ${this.fontsize}px`;
	}
}

const vue2 = Vue.createApp(root1).mount('#vuearticles');