<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
    </div>
</template>
<script>
import DetailBanner from './pages/Banner'
import DetailHeader from './pages/Header'
export default {
    components:{
        DetailBanner,
        DetailHeader
    },
    activated(){
        document.documentElement.scrollTop = 0 
        document.body.scrollTop = 0
        
    }

}
</script>
<style scoped>
    .detail{
        height: 10000px;
    }
</style>