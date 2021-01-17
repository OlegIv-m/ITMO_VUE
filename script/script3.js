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



let article1 = new Article('one','http://google.com','../image/user1.jpg');
let article2 = new Article('two','http://google.com','../image/user1.jpg');
let article3 = new Article('three','http://google.com','../image/user1.jpg');
let article4 = new Article('four','http://google.com','../image/user1.jpg');
let article5 = new Article('five','http://google.com','../image/user1.jpg');
let article6 = new Article('six','http://google.com','../image/user1.jpg');
let article7 = new Article('seven','http://google.com','../image/user1.jpg');
let article8 = new Article('eight','http://google.com','../image/user1.jpg');
let article9 = new Article('nine','http://google.com','../image/user1.jpg');


let app1 = Vue.createApp({
	data(){
		return {
			articles: [ article1, article2, article3, article4, article5, article6, article7, article8, article9],
			searchStr: '',
		};
	},
	methods:{
		searchArticle(){
			return this.articles.filter( article => { return article.name.startsWith(this.searchStr)} );
		},
	}
});
app1.mount('#vueApp');

// Javascript Module 3 Lesson 3 Exercise 2

/* 2. Реализовать редактируемые текстовой тег. Например: дан тег 
 <p> c текстом «Измени моё содержимое». По нажатию на него 
открывается всплывающее окошко с элементов input по средству 
которого можно изменить содержимое тега <p>. Ещё пример как 
можно реализовать можно увидеть на этом сайте: 
https://ruseller.com/lessons/les446/example/code.html# 
Здесь представлен пример организации редактирования 
текста в <li> элементах. */

let app2 = Vue.createApp({
	data(){
		return {
			text: 'Измени моё содержание!!!',
			showInputTag:	false,
		};
	},
	methods: {
		showInput(){
			this.showInputTag = true;
		},
		inputtext(value){
			console.log(value);
			this.text = value;
			this.showInputTag = false;
		}
	}
	
	
}).mount('#customTag');;




