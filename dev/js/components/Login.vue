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
		                	<input type="text" class="form-control" placeholder="Nombre de usuario" required autofocus v-model="user">
		                </div>
		                <div class="form-group">
		                	<input type="password" class="form-control" placeholder="Contraseña" required v-model="pass">
		                </div>
		                <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login">Acceder</button>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		
		data() {
			return {
				user: '',
				pass: '',
				login: () => {
					this.axios.post('/api/auth', {
						user: this.user,
						pass: this.pass
					})
					.then(success => {
						console.log(success.data);
						localStorage.setItem('token', success.data);

						this.axios.get('/api/uinf', {
							headers: { 'Auth': localStorage.getItem('token') }
						})
						.then(success => {
							console.log(success);
						})
						.catch(error => {
							console.log(error);
						});


					})
					.catch(error => {
						console.log(error);
						alert('Error');
					})
				}
			}
		}
	}
</script>