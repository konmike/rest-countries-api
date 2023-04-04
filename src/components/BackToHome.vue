<script>
export default {
    name: "BackToHome",
    methods: {
        goToHome(){
            this.$router.push('/')
        }
    },
}
</script>

<template>
    <button id="home" @click="goToHome()" class="btn btn--back">Back</button>
</template>
