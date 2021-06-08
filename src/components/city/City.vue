<template>
    <div class="city" ref="city">
        <city-header></city-header>
        <city-list :cities="cities"></city-list>
    </div>
</template>
<script>
    import CityHeader from "./pages/Header"
    import CityList from "./pages/List"
export default {
    components:{
        CityHeader,
        CityList
    },
    data(){

        return {
            cities:{},
        }
    },

    mounted(){
        this.$refs.city.style.height = document.documentElement.clientHeight  + 'px'
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
                
              for(let i in data_res){
                  if(data_res[i].length==0){
                      delete data_res[i]
                  }
              }
                
            this.cities = data_res;
           
        })
 }
}
</script>
<style scoped>
    .city{
        background: #f5f5f5;
        position: relative;
    }
</style>