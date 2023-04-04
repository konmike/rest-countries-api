<script>
import Countries from '../components/Countries.vue'
import SearchForm from '../components/SearchForm.vue'
import SelectForm from '../components/SelectForm.vue'
import { getAllCountries } from '../services/countriesService'

export default {
  components: { Countries, SearchForm, SelectForm },
  data() {
    return {
      countries: null
    }
  },
  mounted() {
    getAllCountries().then( res => {
        this.countries = res
    })
    .catch( err => {
        console.log(err);
    });
  },
}
</script>

<template>
  <main id="container" class="container">
    <SearchForm @search-country="this.countries = $event" />
    <SelectForm @update-countries="this.countries = $event" />
    <Countries :countries="this.countries"/>
  </main>
</template>
