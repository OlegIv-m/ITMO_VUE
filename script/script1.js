// Javascript Module 3 Exercise 1
/*
1. Реализовать красивую страничку с выводом 
информации о товаре (например, страничка 
о выводе информации о ноутбуке в интернет 
магазине компьютерной техники);
*/

let app = Vue.createApp({});

app.component('vueh1', {
	template: `<h1 v-bind:style="{ color: h1Color}" >
			{{ itemName }}
		</h1>`,
	data(){
		return {
			h1Color: 'black',
			h1Attr1: 'style',
			itemName: 'notebook'
			}
		}
	});
app.component('vuediv', {
	template: `<div v-bind:style="{ color: h1Color, backgroundColor: 'lightgreen'}" >
			<p> {{ model }}</p>
			<p> {{ price }}</p>
			<p> {{ cpu }}</p>
			<p> {{ screen }}</p>
			<p> {{ memory }}</p>
			<p> {{ hdd }}</p>
		</div>`,
	data(){
		return {
			h1Color: 'black',
			h1Attr1: 'style',
			h1ClassColor1: 'black',
			model:	'hp',
			price: '100.000p',
			cpu:	'i54700',
			screen:	'17inch',
			memory:	'8GB RAM',
			hdd:	'1TB',
			}
		}
	});
app.mount('#vueApp');
