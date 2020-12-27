/* let vm = new Vue({
	data: {
		message: 'Vue starts here!',
		
	},
	methods: {
		changeMessage(){
			return Vue.el + this.message;
		}
	}
});
vm.mount('#VueApp'); */

let vm1 = Vue.createApp({
	data: function(){
		return {
			name: 'Tom',
			age: 25,
			htmlH1: '<h1>H1 tag!</h1>',
			text: 'some text!!!',
			textContent: 'some text-content!!!',
			attr: 'title',
			attrContent: 'Link enabled!'
		}
	},
	/* filters: {
		
	} */
});

vm1.config.globalProperties.$filters = {
	capitalise (value){
			return value.toUpperCase();
	}
}

vm1.mount('#VueApp')