<template>
<div>
  <input v-model="search" placeholder="Поиск">
  <select v-model="selected">
    <option disabled value="">Искать по</option>
    <option value="name">Название</option>
    <option value="inn">ИНН</option>
    <option value="ogrn">ОГРН</option>
    <option value="address">Юр. адрес</option>
    <option value="director">Директор</option>
  </select>
  <button type="submit" @click="getCompaniesBy">Поиск</button>

  <p v-if="!companies">Список пуст</p>

    <ul>
      <li v-for="company in companies" v-bind:key="company.id">
        {{ company.name }}
        {{ company.ogrn }}
        {{ company.inn }}
        {{ company.kpp }}
        {{ company.address }}
        {{ company.director }}
        {{ company.egrn }}
        <button v-if="currentUser" @click="subscribeCompany(company.id)"></button>
      </li>

    </ul>


</div>
</template>

<script>
import http from '../http-commons'
import authHeader from '../store/auth.header';

export default {
  name: "Companies",
  data(){
    return {
      companies:{},
      search:"",
      selected:"",
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods:{
    getCompanies() {
      http
          .get('companies/all')
          .then(response => {
            this.companies = response.data;
          })
    },
    getCompaniesBy() {
      http
          .get('companies?findBy='+this.selected+'&value='+this.search)
          .then(response => {
            this.companies = response.data;
          })
    },
    subscribeCompany(id) {

      http
          .post('monitoring/subscribe' ,{companyId:id, userId:this.currentUser.id}, authHeader() )
          .catch(e=> {
            console.log(e)
      })
    },
  },
  mounted() {
    this.getCompanies();
  }

}
</script>

<style scoped>

</style>