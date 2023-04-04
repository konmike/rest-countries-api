<script>
import CountryItem from './CountryItem.vue'
import { getAllCountries } from '../services/countriesService'

export default {
  name: "Countries",
  components: { CountryItem },
  props: ['countries'],
  methods: {
    goToDetail(code){
      this.$router.push('/' + code )
    }
  },
}
</script>

<template>
  <ul class="countries">
    <CountryItem v-for="country in countries" :country="country" :isDetail="false" @click="goToDetail(country.ccn3)" />
  </ul>
</template>
