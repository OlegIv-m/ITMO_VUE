// Javascript Module 3 Lesson 2 Exercise 1

/*
1. На странице есть некоторое краткое описание. 
В конце некоторый элемент (например, кнопка: 
«Подробнее») по нажатию на которое открывается 
скрытый текст, который делает данное описание полным.
*/

let app1 = Vue.createApp({
    data(){
            return {
                active: false,
            };
        },
    computed: {
            activate(){
                return this.active;
        },
    },
    methods: {
        activatemore(){
            this.active = true;
        }
    }
});

let vm = app1.mount('#morebutton');

// Javascript Module 3 Lesson 2 Exercise 2

/*
2. Реализовать «Меню навигации». Меню представляет 
собой набор вкладок, например: главная, проекты, 
услуги, контакты. По нажатию на вкладку менять 
основной контент страницы в соответствие с 
выбранной вкладкой.
*/

let app2 = Vue.createApp({
    data(){
            return {
                active1: true,
                active2: false,
                active3: false,
                active4: false,
            };
        },
    methods: {
        activate1(){
            this.active1 = true;
            this.active2 = false;
            this.active3 = false;
            this.active4 = false;
            return this.active1;
        },
        activate2(){
            this.active1 = false;
            this.active2 = true;
            this.active3 = false;
            this.active4 = false;
            return this.active2;
        },
        activate3(){
            this.active1 = false;
            this.active2 = false;
            this.active3 = true;
            this.active4 = false;
            return this.active3;
        },
        activate4(){
            this.active1 = false;
            this.active2 = false;
            this.active3 = false;
            this.active4 = true;
            return this.active4;
        },
    }
});

vm1 = app2.mount('#main');
