<template>
    <div class="header-swiper">
        <swiper ref="mySwiper" :options="swiperOptions">

            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src='item.imgUrl' alt="">
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['swiperList'],
   data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击跳转
          },
          loop:true
        }
      }
    },
}
</script>
<style type="text/css" scoped lang="stylus">

    .header-swiper{
      
        height: 0;
        padding-bottom:25%
        background:#ccc
    }
    .header-swiper img{
        width: 100%;
        height: 2rem;
    }
    .header-swiper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
</style>