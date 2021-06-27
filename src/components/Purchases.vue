<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Искать по</option>
      <option value="status">Статус</option>
      <option value="lot">Лот</option>
      <option value="iz">Извещение</option>
      <option value="sub">Предмет договора</option>
      <option value="date">Даты</option>
    </select>
    <input v-if="selected==='date'" type="date" v-model="date1">
    <input v-if="selected==='date'" type="date" v-model="date2">
    <input v-else v-model="search" placeholder="Поиск">
    <button v-if="selected==='date'" type="submit" @click="getPurchasesByDate">Поиск</button>
    <button v-else type="submit" @click="getPurchasesBy">Поиск</button>

    <p v-if="!purchases">Список пуст</p>

       <ul>
      <li v-for="purchase in purchases" v-bind:key="purchase.id">
        {{ purchase.number }}
        {{ purchase.status }}
        {{ purchase.price }}
        {{ purchase.date }}
        {{ purchase.iz }}
        {{ purchase.lot }}
        {{ purchase.sub }}
        {{ purchase.company.name }}

      </li>
    </ul>
  </div>
</template>

<script>
import http from '../http-commons'
export default {
  name: "Purchases",

  data(){
    return {
      purchases:{},
      selected: "",
      search: "",
      date1 : null,
      date2 : null
    }
  },
  methods:{
    getPurchases() {
      http
          .get('purchases/all')
          .then(response => {
            this.purchases = response.data;
          })
    },
    getPurchasesBy() {
      http
          .get('purchases?findBy='+this.selected+'&value='+this.search)
          .then(response => {
            this.purchases = response.data;
          })
    },
    getPurchasesByDate() {
      http
          .get('purchases/date?date1='+this.date1+'&date2='+this.date2)
          .then(response => {
            this.purchases = response.data;
          })
    }
  },
  mounted() {
    this.getPurchases();
  }

}
</script>


<style scoped>

</style>