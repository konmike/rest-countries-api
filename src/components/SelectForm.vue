<template lang="">
    <form class="form form--select">
        <select name="select" id="select" class="select" @change="$event.target.value ? getCountriesByRegion($event) : getAllCountries()">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
        </select>
    </form>
</template>
<script>
import { getAllCountries, getCountriesByRegion } from '../services/countriesService'

export default {
    methods: {
        getCountriesByRegion(event){
            getCountriesByRegion(event.target.value).then( res => {
                this.$emit('update-countries', res)
            })
            .catch( err => {
                console.log(err);
            });
        },

        getAllCountries(){
            getAllCountries().then( res => {
                this.countries = res
                this.$emit('update-countries', this.countries)
            })
            .catch( err => {
                console.log(err);
            });
        }
    },
}
</script>
<style lang="">
    
</style>