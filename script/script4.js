// Javascript Module 3 Lesson 3 Exercise 1
/*
1. Реализовать поиск по названию статьи. В качестве данных 
дан массив объектов, описывающих статьи (атрибуты: название 
статьи, url местоположения статьи в интернете, путь к файлу 
маленькой картинке из статьи). На интерфейсе задано поля для 
поиска по названию. Ниже поля выводятся статьи (кликабельные 
название и картинка статьи) подходящие под запрос пользователя.
*/
Article.prototype.counter = 0;
function Article(name, url, img){
	this.name = name,
	this.url = url,
	this.img = img,
	this.id = ++(Article.prototype.counter);
}



let article1 = new Article('article1','http://google.com','../image/user1.jpg');
let article2 = new Article('article2','http://google.com','../image/user1.jpg');
let article3 = new Article('article3','http://google.com','../image/user1.jpg');
let article4 = new Article('article4','http://google.com','../image/user1.jpg');
let article5 = new Article('article5','http://google.com','../image/user1.jpg');

let Vuedata = {
}

let app = Vue.createApp({});

app.component('vue-article',{
	data() {
		return {
			articles: [ article1, article2, article3, article4, article5,],
		};
	},
	props: ['test'],
	template: `
		<div>
			<ul  type='none'>
				<li v-for='item in articles'> <a :href='item.url'> {{ item.name }} <img :src='item.img' height='100' width='100'></img> </a> {{ test }} </li>
			</ul>
		</div>
	`,
});

app.mount('#VueApp');