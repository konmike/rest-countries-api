<template lang="">
    <form class="form form--search">
        <span class="search-icon"><i class="fas fa-search"></i></span>
        <input @input="valueChange($event)" type="text" name="search" id="search" class="input input--search" placeholder="Search for country...">
    </form>
</template>

<script>
import { getCountryByName } from '../services/countriesService'
export default {
    methods: {
        valueChange(ev){
            getCountryByName(ev.target.value).then( res => {
                this.$emit('search-country', res)
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