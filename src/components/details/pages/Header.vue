<template>
    <div class="header">
        <!-- 头1 -->
        <div class="header-back" v-show="showHeader" @click="toHome1">
            <span class="back"></span>
            <span class="iconfont back-mark"> &#xe629;</span>
        </div>
        <!-- 头2 -->
        <div class="header-top" v-show="!showHeader" :style="styleOpacity">
            <div class="header-left" @click="toHome">
                <span class="iconfont">
                    &#xe629;
                </span>
            </div>
            <div class="header-search" >
                贵安水世界
            </div>
        </div>

    </div>
</template>
<script>
import {mapState} from "vuex"
import {mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['detail_img_banner'])
    },
    data(){
        return{
            showHeader:true,
            styleOpacity :{
                opacity:0
            }
        }
    },
    methods:{
         ...mapMutations(["hideBanner"]),
         toHome1(){
             if(this.detail_img_banner){
                 this.hideBanner()
             }else{
                 this.$router.push('/')
             }
        },
        toHome(){
            this.$router.push('/')
        }
    },
    mounted(){
        let that = this
        window.addEventListener('scroll',function(){
            let top = document.documentElement.scrollTop;    
            if(top>45){
                let opacity = top/130;
                opacity>1?1:opacity;
                that.showHeader = false;
                that.styleOpacity = {opacity};
            }else{
                that.showHeader = true
            }
        })
    }
}

</script>
<style scoped lang="stylus">
@import '~css/var.styl';
    .header{

    }
    .header-back{
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        width: 0.72rem;
        height: 0.72rem;
      
    }
    .back{
        display: block;
        background: #000;
        width: 0.72rem;
        height: 0.72rem;
        opacity: .5;
        border-radius: .36rem;
    }
    .back-mark{
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        width: 0.72rem;
        line-height: 0.72rem;
        text-align: left;
        text-indent: .15rem;
        font-size: .32rem;
        font-weight: bold;
  
    }
     .header-top{
        position:fixed;
        top:0;
        left:0;
        width: 100%;
        height: 0.88rem;
        background:$bgColor;
        color:$textColor;
        font-size: .36rem;
        text-align :center;
        line-height :.88rem;
        
        
    }
    .header-left{
        position :absolute;
        width: 0.4rem;
        padding: 0 .2rem;
        text-align: center;
        line-height: .88rem;
        font: bold;
    }
 
</style>