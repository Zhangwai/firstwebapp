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
            <img src="http://img1.qunarzz.com/sight/p0/1504/d8/d8506e68147b841f.water.jpg_r_800x800_027fbdc2.jpg" alt="">
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
</style>