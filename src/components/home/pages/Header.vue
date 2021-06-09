<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">
                &#xe629;
            </span>
        </div>
        <div class="header-search" >
            <span class="iconfont">
                &#xe62c;
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            <router-link to="/city">
            {{city}}<span class="iconfont">&#xe62a;</span>
            </router-link>  
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style scoped lang="stylus">
@import '~css/var.styl';

    .header{
        width: 100%;
        height: 0.88rem;
        background:$bgColor;
        color:$textColor;
        font-size: .36rem;
        display: flex;
    }
    .header-left{
        width: 0.4rem;
        padding: 0 .2rem;
        text-align: center;
        line-height: .88rem;
        font: bold;
    }
    .header-search{
        height: 0.6rem;
        background: #fff;
        margin: 0.14rem 0;
        flex: 1;
        border-radius: .1rem;
        color: #e4e7ea;
        line-height: .6rem;
        font-size: 0.28rem;
        padding-left: .2rem;
    } 
    .header-right{
        font-size: .28rem;
        padding:0 .2rem;
        line-height: .88rem;
        
    }
    .header-right a{
        color :#fff;
    }
</style>