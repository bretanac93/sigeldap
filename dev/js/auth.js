import {router} from './app';

export default {
	user: {
		authenticated: false,
	},

	login(ctx, credentials, redirect) {
		console.log(credentials.user);
		ctx.axios({
			method: 'post',
			url: '/api/auth', 
			data: credentials
		})
		.then(success => {
			let data = success.data;
			localStorage.setItem('token', data.token);
			this.user.authenticated = true;
			localStorage.setItem('username', data.username);
			localStorage.setItem('name', data.name);

			router.push(redirect);
			window.location.reload();
		})
		.catch(error => {
			console.log(error);
			ctx.error = error;
		})
	},

	logout() {
		localStorage.removeItem('token');
		this.user = {};
		this.user.authenticated = false;
		window.location.reload();
	},

	isAuth() {
		return localStorage.getItem('token') !== null;
	},

	getAuthHeader() {
		return {
			'Auth': localStorage.getItem('token')
		};
	}
}