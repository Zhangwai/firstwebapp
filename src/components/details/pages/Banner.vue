<template>
    <div class="banner">
        <div @click="showImg">
            <div class="banner-img">
                <img src="//img1.qunarzz.com/sight/p0/1504/54/54acf4a672e58102.water.jpg_600x330_d74cb30c.jpg" alt="">
            </div>
            <div class="banner-title">
                贵安水世界
            </div>
        </div>
    

        <div class="img-swipper" v-show="imgSwipper" @click="hideImg">
             <swiper ref="mySwiper" :options="swiperOptions">

                <swiper-slide v-for="item in bannerList" :key="item.id">
                    <img :src='item.imgUrl'>
                </swiper-slide>
        
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>
<script>
export default {  
    methods:{
        showImg(){
            this.imgSwipper = true
        },
        hideImg(){
            this.imgSwipper = false
        }
    },
    data(){
        return{
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    clickable: true // 允许点击跳转1
                },
                loop:true
                },
            bannerList:[
                {
                    id:'01',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1504/d8/d8506e68147b841f.water.jpg_r_800x800_027fbdc2.jpg'
                },
                {
                    id:'02',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1504/54/54acf4a672e58102.water.jpg_r_800x800_1b4678a5.jpg'
                },
                {
                    id:'03',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1504/8f/8ffef8ed47bcf132.water.jpg_r_800x800_77dd4c9f.jpg'
                }
            ],
            imgSwipper:false
        }
    }
}
</script>
<style scoped>
.banner{
    position: relative;
}
.banner-img{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 55%;
}
.banner-img img{
    width: 100%;

}
.banner-title{
    position: absolute;
    left: .3rem;
    bottom: .4rem;
    font-size: .36rem;
    color: #fff;
}
.img-swipper{
    background: #000;
    position:fixed;
    top:0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.img-swipper img{
    width: 100%;
}
.swiper-pagination{
    color: #fff;
    font-size: .32rem;
    bottom: 0.6rem;
}
</style>