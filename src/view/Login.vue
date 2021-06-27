<template>
<b-container>
  <form class="border p-3" @submit.prevent="handleLogin">
    <div class="form-floating mb-3">
      <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder=""
          v-model="user.username">
      <label for="floatingInput">Логин</label>
    </div>
    <div class="form-floating">
      <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="user.password">
      <label for="floatingPassword">Пароль</label>
    </div>
    <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
    <button type="submit" class="btn btn-secondary mt-3 mx-3">Войти</button>
    <button type="button" class="btn btn-secondary mt-3 mx-3" @click="goToRegister()">Регистрация</button>
  </form>
</b-container>


</template>



<script>
  import User from '../models/user';

  export default {
  name: "Login",
    data() {
      return {
        user: new User('', ''),
        loading: false,
        message: ''
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/companies');
      }
    },
    methods:{
      goToRegister(){
        this.$router.push('/registration');
      },
      handleLogin() {
        this.loading = true;

          if (this.user.username && this.user.password) {
            this.$store.dispatch('auth/login', this.user).then(
                () => {
                  // console.log('success')
                  // console.log(this.$store.state.auth.user)
                  this.$router.push('/');
                },
                error => {
                  this.loading = false;
                  this.message =
                      (error.response && error.response.data && error.response.data.message) ||
                      error.message ||
                      error.toString();
                }
            );

          }

      }

    }
}
</script>


<style scoped>

</style>