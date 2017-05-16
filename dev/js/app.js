import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import auth from './auth';

import Home from './components/Home.vue';
import Login from './components/Login.vue';

require('./bootstrap');

window.Vue = Vue;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

let routes = [
	{ 
		path: '/', 
		component: Home, 
		name: 'home', 
		meta: {
			title: 'Inicio', 
			is_protected: true
		} 
	},
	{ 
		path: '/login', 
		component: Login, 
		name: 'login',
		meta: {
			title: 'Acceder', 
			is_protected: false
		}
	}
];

export let router = new VueRouter({
	routes,
	saveScrollPosition: true,
  	history: true,
  	linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
	
	if (to.meta.is_protected) {
		if (auth.isAuth()) {
			document.title = to.meta.title;
			next();
		}
		else {
			router.push('login');
			document.title = to.meta.title;
		}
	}

	if (to.name === 'login' && auth.isAuth()) {
		document.title = to.meta.title;
	}
	else next();
});

const app = new Vue({
	router,
	data: {
		isAuth: auth.isAuth(),
		logout: () => {
			auth.logout();
			this.isAuth = false;
		}
	}
}).$mount('#app');