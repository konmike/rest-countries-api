<script>
import { getCountryNameByCode } from '../services/countriesService'
export default {
  name: "CountryItem",
  props: ['isDetail', 'country'],
  data() {
    return {
      borderCountries: [],
    }
  },
  mounted() {
    if(this.isDetail && this.country.borders.length){
      this.country.borders.forEach(code => {
        getCountryNameByCode(code).then( res => {
            let c = { name: res.name.common, code: res.ccn3 };
            this.borderCountries.push(c);
        })
        .catch( err => {
            console.log(err);
        });
      });
    }    
  },
  methods: {
    addCommas(number) {
      let strNum = number.toString();
      let length = strNum.length;
      let result = "";
      
      for (var i = 0; i < length; i++) {
        if (i > 0 && i % 3 == 0) {
          result = "," + result;
        }
        result = strNum[length - 1 - i] + result;
      }
      return result;
    },
    objectToString(obj, prop) {
      let res = ""
      if(typeof obj === "object"){
        let items = Object.values(obj);
          items.forEach((val, key, items) => {
            if(typeof val === "object")
            res += Object.is(items.length - 1, key) ? val[prop] : val[prop] + ", ";
            else{
              res += Object.is(items.length - 1, key) ? val : val + ", ";
            }
          });
        }
      return res;
    },
  },
  computed: {
    classes(){
      return this.isDetail ? 'country country--detail' : 'country country--summary';
    }
  },
}
</script>

<template>  
  <component :is="isDetail ? 'article' : 'li'" :class="classes">
    <img :src="country.flags.png" class="country__flag" />
    <h3 class="country__title">{{ country.name.common }}</h3>
    <ul class="country__content">
      <li v-if="isDetail"><span class="country__label">Native Name: </span><span>{{ objectToString(country.name.nativeName, 'official') }}</span></li>
      
      <li><span class="country__label">Population: </span><span>{{ addCommas(country.population) }}</span></li>
      <li><span class="country__label">Region: </span><span>{{ country.region }}</span></li>
      <li v-if="isDetail"><span class="country__label">SubRegion: </span><span>{{ country.subregion }}</span></li>
      <li :class="{'country__capital': isDetail}"><span class="country__label">Capital: </span><span>{{ country.capital[0] }}</span></li>
      
      <li v-if="isDetail"><span class="country__label">Top Level Domain: </span><span>{{ country.tld[0] }}</span></li>
      <li v-if="isDetail"><span class="country__label">Currencies: </span><span>{{ objectToString(country.currencies, 'name') }}</span></li>
      <li v-if="isDetail" class="country__lang"><span class="country__label">Languages: </span><span>{{ objectToString(country.languages) }}</span></li>
      
      <li v-if="isDetail && country.borders.length" class="country__borders">
        <span class="country__label country__label--bc">Border Countries: </span>
        <ul class="bc-list">
          <li v-for="c in borderCountries">
            <a :href="'/' + c.code" class="btn btn--country-detail">{{ c.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </component>
</template>