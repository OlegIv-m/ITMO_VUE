

// 3*. Вот пример входного тестового задания на собеседования, 
// которые мы выдаём для начинающих фронтенд разработчиков:
// - Итогом разработки по заданию должен стать сайт SPA 
// интернет-магазина с урезанной функциональностью (mvp). 
// Сфера деятельности компьютерные комплектующие и 
// сопутствующие им товары.
// Дизайн элементов и стилистика должна быть близка к 
// выбранному понравившемуся порталу в интернете 
// (например Яндекс, Google, и т.п. – так как часто в 
// компаниях есть своя стилистическая книга, то это 
// позволит вам немного думать о вёрстке в определённых 
// стилистических рамках).
// Функционал для mvp:
// 1) Авторизация: E-mail, Пароль.
// 2) Каталог продукции. Многоуровневый универсальный 
// каталог состоящий из иерархии подразделов.
// Для каждой позиции должна быть возможность просмотра 
// краткой карточки товара и детальной карточки. 
// Атрибуты подразделов: Название подраздела; Карточки 
// товаров с кратким описанием (Название, маленькое фото, 
// краткий текст, цена).
// Атрибуты детальной карточки товаров: Название; Большое 
// фото; Слайдер-карусель с несколькими фото; Краткое 
// описание; Полное описание; Цена.  
// С каждого карточки, а также со страницы с полным описанием 
// ведет ссылка «Заказать», которая добавляет выбранную 
// товар в корзину.
// 3) Корзина (таблица с полями): Номер товара в корзине; 
// Название товара (с ссылкой на этот товар в БД каталога); 
// Цена; Количество (с возможностью поменять – по умолчанию 1); 
// Возможность поставить галочку напротив выбранного товара и 
// удалить его из корзины; Общая стоимость заказа.

const goods  = [
	{ name: 'HDD1', url: '', price: 100, text: '', category: 'HDD'},
	{ name: 'HDD2', url: '', price: 100, text: '', category: 'HDD'},
	{ name: 'HDD3', url: '', price: 100, text: '', category: 'HDD'},
	{ name: 'CPU1', url: '', price: 100, text: '', category: 'CPU'},
	{ name: 'CPU2', url: '', price: 100, text: '', category: 'CPU'},
	{ name: 'CPU3', url: '', price: 100, text: '', category: 'CPU'},
	{ name: 'Memory1', url: '', price: 100, text: '', category: 'Memory'},
	{ name: 'Memory2', url: '', price: 100, text: '', category: 'Memory'},
	{ name: 'Memory3', url: '', price: 100, text: '', category: 'Memory'},
	{ name: 'Memory4', url: '', price: 100, text: '', category: 'Memory'},
	{ name: 'MotherBoard1', url: '', price: 100, text: '', category: 'MotherBoard'},
	{ name: 'MotherBoard2', url: '', price: 100, text: '', category: 'MotherBoard'},
	{ name: 'MotherBoard3', url: '', price: 100, text: '', category: 'MotherBoard'},
];

const user = {name: '' , password: '', lastLogonDate: ''};
let users = [{ name: 'oleg', pass: 'password'}];

//components

const AUTHSTATECORRECT = 0;
const AUTHSTATEERROR = 1;
const AUTHSTATEUSERORPASSNOTFOUND = 1;
const AUTHSTATEUSERA = 2;

//auth
let auth = {
	data: function(){
		return {
			name: '',
			pass: '',
			state: '',
			states: ['Авторизация пройденна', 'Не введено имя пользователя или пароль!','Пользователь не существует или Ошибка ввода пароля!', 'Аноним'],
		};
	},
	props: [''],
	template: `<p>{{state}}</p>
			   <input type='text' v-model='name'/>
			   <input type='password' v-model='pass'/>
			   <button @click='checkUserInput'> Войти </button>`,
	methods: {
		checkUserInput: function(){
			if ( this.name == '' || this.pass == '') {
				this.state = this.states[AUTHSTATEERROR];
			}
			else {
				if (!this.checkUser()) {
					this.state = this.states[AUTHSTATEUSERORPASSNOTFOUND];
				} else {
					this.state = this.states[AUTHSTATECORRECT];
					//let tmpUser = { name, pass };
					console.log('name: ' + this.name);
					console.log('pass: ' + this.pass);
					console.log(this.state);
				}
			}
		},
		checkUser: function(){
			let testUser = { name: this.name, pass: this.pass };
			console.log('User is registered:' + users.includes(testUser));
			if(users.includes(testUser)){
				console.log('user found')
				return 0;
			} else {
				console.log('user not found')
				return -1;
			}
		},
	},
	components:{
		
	}
}



//catalog
let catalog = {
	data: function(){
		return {
			goods: goods,
			types: [],
			category: [],
			style: 'display: grid; grid: auto / 1fr 1fr 1fr',
			styleBorder: 'border: 2px black solid',
		};
	},
	template: `<div :style='style'>
					<span v-for='items in types'  :key='items' >
						<h2> {{ items[0].category }} </h2>
						<span v-for='item in items' :key='item' :style='styleBorder'> {{ item.name }} </span>
					</span>
			   </div>`,
	components: {
		'sale': {},
	},
	beforeMount: function(){
		let tmp = '';
		goods.forEach( 
			(elem) => { 
				if ( !this.category.find((cat) => cat==elem.category) ) {
					this.category.push(elem.category);
					return elem;
				}
			});
		console.log('category:' + this.category);
		for ( let i = 0; i < this.category.length; i++){
			let tmpTypes = goods.filter( (elem) => elem.category ==  this.category[i]);
			this.types.push(tmpTypes);
		}
		console.log(this.types);
	},
}
	

let app = Vue.createApp({});
app.component('auth', auth);
app.component('catalog', catalog);

let v_app = app.mount('#root');