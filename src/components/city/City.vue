<template>
    <div class="city">
        <city-header></city-header>
        <city-hot></city-hot>
        <city-sort :cities="cities"></city-sort>
        <city-list :cities="cities"></city-list>
    </div>
</template>
<script>
    import CityHeader from "./pages/Header"
    import CityHot from "./pages/Hot"
    import CitySort from "./pages/Sort"
    import CityList from "./pages/List"
export default {
    components:{
        CityHeader,
        CityHot,
        CitySort,
        CityList
    },
    data(){

        return {
            cities:{}
        }
    },

    mounted(){
        this.$http.get("static/mock/city.json")
        .then((res)=>{
            const data = res.data.citylist
            let data_res = {}
            for(let i = 0;i<26;i++){
                data_res[String.fromCharCode((65 + i))] = [];
            }
             for(let item of data){
                   var firstcode = item.SpellSX.substr(0,1)
                   data_res[firstcode].push(item)
                }
                // console.log(data_res)
            this.cities = data_res;
           
        })
 }
}
</script>
<style scoped>
    .city{
        background: #f5f5f5;
    }
</style>