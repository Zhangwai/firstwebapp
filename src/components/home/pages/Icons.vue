<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">

            <swiper-slide v-for="(item,key) in page" :key="key">
                <div class="icons-item" v-for="page in item" :key="page.id">
                    <img :src="page.imgUrl">
                    <p>{{page.title}}</p>
                </div>
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>   
    </div>
</template>
<script>
export default {
    props:['iconsList'],
    data(){
        return{
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true // 允许点击跳转
                },
                loop:true
            }
        }
    },
    computed:{
        /*
        实现结构
            [
                [图标对象1,图标对象2,图标对象3,图标对象4,图标对象5,图标对象6,图标对象7,图标对象8,],
                [图标对象9,图标对象10]
            ]
        */
        page(){
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx]) pages[idx] = [];
                pages[idx].push(item)
            })
            return pages;
        }
    }
}
</script>
<style scoped lang="stylus">
@import "~css/common.styl";
    .icons{
        width: 100%;
        overflow: hidden;
        background: white;
    }
    .icons-item{
        width: 25%;
        padding-bottom: 25%;
        height: 0;
        /* background: #ccc; */
        float: left;
        
    }
     .icons-item img{
         display: block;
        width: 1.1rem;
        height: 1.1rem;
        margin: 0 auto;
        padding-top: 0.28rem;
    
    }
     .icons-item p{
         margin-top: .1rem;
        font-size: .28rem;
        text-align: center;
        textOverflow();

    }
</style>