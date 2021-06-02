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
   data() {
      return {
        swiperList:[
            {
                id:'01',
                imgUrl:"//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg"
            },
             {
                id:'02',
                imgUrl:"//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg"
            },
             {
                id:'03',
                imgUrl:"//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg"
            },
            
        ],
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
        padding-bottom :26.67%
        background #ccc
    }
    .header-swiper img{
        width: 100%;
        height: 2rem;
    }
    .header-swiper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
</style>