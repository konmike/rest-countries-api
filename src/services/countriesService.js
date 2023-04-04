import axios from "axios";

const baseURL = 'https://restcountries.com/v3.1/';
const summaryFields = 'ccn3,flags,name,population,capital,region'
const detailFields = 'ccn3,flags,name,nativeName,population,capital,region,subregion,tld,currencies,languages,borders'

export async function getAllCountries() {    
    const response = await axios.get(baseURL + 'all?fields=' + summaryFields)
    return response.data;
}

export async function getCountriesByRegion(region) {    
    const response = await axios.get(baseURL + 'region/' + region + '?fields=' + summaryFields)
    return response.data;
}

export async function getCountryByName(name) {    
    const response = await axios.get(baseURL + 'name/' + name + '?fields=' + summaryFields)
    return response.data;
}

export async function getCountryByCode(code) {    
    const response = await axios.get(baseURL + 'alpha/' + code + '?fields=' + detailFields)
    return response.data;
}

export async function getCountryNameByCode(code) {    
    const response = await axios.get(baseURL + 'alpha/' + code + '?fields=name,ccn3')
    return response.data;
}