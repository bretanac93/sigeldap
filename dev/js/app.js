import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';

require('./bootstrap');

window.Vue = Vue;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

let routes = [
	{ path: '/home', component: Home, title: 'Inicio' },
	{ path: '/login', component: Login, title: 'Acceder' }
];

export let router = new VueRouter({
	routes,
	saveScrollPosition: true,
  	history: true
});

const app = new Vue({
	router
}).$mount('#app');
