// Javascript Module 3 Exercise 2

/*
2. Реализовать страничку с выводом информации 
о пользователя сайта (например, имя, фамилия, 
login, email, картинку аватара, и т.п.)
*/

let app = Vue.createApp({
    data(){
        return {
            name:   'user1Name',
            surname: 'user1Surname',
            login:  'user1Login',
            email:  'user1@email.com',
            img:    './image.user1.jpg'
        }
    },
});

app.component('userinfo',{
    template: `<div>
                    <span :textContent='name'>  </span>
                    <span :textContent='surname'> </span>
                    <span :textContent='login'> </span>
                    <span :textContent='email'> </span>
                    <img :src='img'>
               </div>`,
       data(){
        return {
            name:   'user1Name',
            surname: 'user1Surname',
            login:  'user1Login',
            email:  'user1@email.com',
            img:    '../image/user1.jpg'
        }
    },
});

app.mount('#userBoxInfo');
