<script>
import CountryItem from '../components/CountryItem.vue'
import BackToHome from '../components/BackToHome.vue'
import { getCountryByCode } from '../services/countriesService'

export default {
  components: { BackToHome, CountryItem },
  data() {
    return {
      country: {},
      dataReady: false
    }
  },
  mounted() {
        getCountryByCode( this.$route.params.countryCode ).then( res => {
        this.country = res
        this.dataReady = true
    })
    .catch( err => {
        console.log(err);
    });
  },
}
</script>

<template>
    <main class="container">
        <BackToHome />
        <CountryItem :isDetail="true" v-if="dataReady" :country="country" />
    </main>
</template>