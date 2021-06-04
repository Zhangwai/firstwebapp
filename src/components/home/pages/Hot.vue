<template>
    <div class="hot">
        <div class="hot-top"> 
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
            <span class="hot-left">本周热门榜单</span>
            <span class="hot-right">全部榜单></span>
        </div>

        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                <img :src="item.imgUrl" alt="item.title">
                <p>{{item.title}}</p>
                <p>
                    <span class="hot-mark">{{item.price}}</span>起
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotList'],
    data(){
        return {
            
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/common.styl'
    .hot{
        margin-top: .2rem;
        font-size: .28rem;
        background: #fff;
        
    }
    .hot-top{
        padding: .2rem;
        position: relative;
    }
    .hot-top img{
        width: 0.3rem;
        height: 0.3rem;
    }
    .hot .hot-left{
        font-size: .35rem;
    }
    .hot-right{
        position: absolute;
        right: 0.3rem;
        color: #616161;
    
    }
    .hot-list{
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        height: 3.2rem;
    }
    .hot-item{
        padding:0 .2rem ;
        width: 2rem;
        height: 2rem;
        display: inline-block;

    }
    .hot-item img{
       width: 100%;
       height: 100%;
    }
    .hot-item p{
        margin-top: .1rem;
        text-align: center;
        textOverflow();
    }
    .hot-item p .hot-mark{
        color: #ff8300;
        font-size: .32rem;
    }
</style>