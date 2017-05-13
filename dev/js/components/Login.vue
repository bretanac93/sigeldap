<template>
	<div class="container" id="login">
	    <div class="row">
	        <div class="col-sm-6 col-md-4 col-md-offset-4">
	            <h1 class="text-center login-title">Acceder</h1>
	            <div class="account-wall">
	                <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
	                    alt="">
	                <div class="form-signin">
		                <div class="form-group">
		                	<input type="text" class="form-control" placeholder="Nombre de usuario" required autofocus v-model="credentials.user">
		                </div>
		                <div class="form-group">
		                	<input type="password" class="form-control" placeholder="Contraseña" required v-model="credentials.pass">
		                </div>
		                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit()">Acceder</button>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	import auth from '../auth';

	export default {
		
		data() {
			return {
				credentials: {
					user: '',
					pass: ''
				},
				error: ''
			}
		},
		methods: {
			submit() {
				let credentials = {
					user: this.credentials.user,
					pass: this.credentials.pass
				}
				auth.login(this, credentials, '/#/');
			}
		}
	}
</script>