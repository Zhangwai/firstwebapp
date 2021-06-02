<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>
<script>
    import HomeHeader from './pages/Header'
    import HomeSwiper from './pages/Swiper.vue'
    export default{
        components:{
            HomeHeader,
            HomeSwiper

        }
    }
</script>
<style scoped>

</style>