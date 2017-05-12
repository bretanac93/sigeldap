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
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	// Redirections
	{ path: '*', redirect: '/home' }
];

let router = new VueRouter({
	routes
});


// Vue.component('app-login', require('./components/Login.vue'));

const app = new Vue({
	router
}).$mount('#app');
