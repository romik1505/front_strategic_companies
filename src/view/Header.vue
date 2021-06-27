<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand mx-4">ИАС Мониторинга</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0 ">
          <li class="nav-item me-3">
            <router-link to="/companies" class="nav-link ">Стратегические компании</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/purchases" class="nav-link" >Закупки</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/monitoring" class="nav-link">Отслеживание компаний</router-link>
          </li>
        </ul>
        <div v-if="currentUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
            <path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M28,3A25,25,0,1,0,53,28,25.009,25.009,0,0,0,28,3Zm0,7.5A7.5,7.5,0,1,1,20.5,18,7.49,7.49,0,0,1,28,10.5ZM28,46a18,18,0,0,1-15-8.05c.075-4.975,10-7.7,15-7.7,4.975,0,14.925,2.725,15,7.7A18,18,0,0,1,28,46Z" transform="translate(-3 -3)" fill="#c8c1c1"/>
          </svg>
          <span class="mx-4  navbar-text">{{ currentUser.username }} </span>
          <button type="button" class="btn btn-secondary" @click="logOut">Выйти</button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-secondary" @click="goToLogin()">Войти</button>
        </div>
      </div>

    </div>
  </nav>
</template>



<script>

// import store from "@/store/store";
export default {
  name: "Header",
  methods:{
    goToLogin(){
      this.$router.push('/login');
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  },
  computed: {
    currentUser() {

      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }
      return false;
    }
  }
}
</script>

<style scoped>

</style>