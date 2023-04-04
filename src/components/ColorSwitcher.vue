<script>
export default {
    name: "ColorSwitcher",
    data() {
        return {
            txtValue: "Dark Mode"
        }
    },
    methods: {
        changeClrMode(){
            let clrModeEl = document.getElementById("app");
            clrModeEl.toggleAttribute("data-clr-mode-dark");
            
            if(this.txtValue === "Dark Mode"){
                this.txtValue = "Light Mode";
                localStorage.setItem("darkMode", "true");
            }
            else{
                this.txtValue = "Dark Mode";
                localStorage.setItem("darkMode", "false");
            }
            
        }
    },
    mounted() {
        const darkMode = localStorage.getItem("darkMode");
        if(darkMode === "true"){
            this.changeClrMode();
        }
    },
}
</script>

<template >
    <button @click="changeClrMode()" class="btn btn--switch">{{ this.txtValue }}</button>
</template>