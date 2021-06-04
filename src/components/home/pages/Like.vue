<template>
    <div class="like">
        <div class="like-top">
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            猜你喜欢
        </div>
        <ul>
            <li class="like-item border-bottom" v-for="item in likeList" :key="item.id">
                <div class="like-img">
                    <img :src="item.imgUrl" alt="item.title">
                </div>
                <div class="like-text">
                    <div class="like-title">
                        {{item.title}}
                    </div>
                    <div class="like-message">
                        {{item.msg}}条评论
                    </div>
                    <div class="like-map">
                        <span class="like-mark">￥<b>{{item.price}}</b></span>起
                        <span class="like-location">{{item.map}}</span>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    props:['likeList'],
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
    .like{
        margin-top: .2rem;
        font-size: .28rem;
        background: #fff;
        padding: 0 .2rem;
    }
    .like-top{
        padding: .2rem 0;
        font-size: .32rem;
    }
    .like-top img{
        width: .3rem;
        height: .3rem;
    }
    .like-item{
        position: relative;
        overflow: hidden;
        padding: .2rem 0;
    }
    .like-img{
        float: left;
    }
    .like-img img{
        width: 2rem;
        height: 2rem;
    }   
    .like-text{
        padding-left: .22rem;
        overflow: hidden;
    }
    .like-title{
        font-size: 0.36rem;
        color: #212121;
        margin-top: .26rem;
    }
    .like-message{
        margin-top: .3rem;
        font-size: .24rem;
        color: #616161;
    }
    .like-map{
        margin-top: .3rem;
        color: #616161;
    }
    .like-mark{
        color:#ff8300;
    }
    .like-mark b{
        font-size: .4rem;
    }
    .like-location{
        font-size: .24rem;
        position: absolute;
        right: 0;
        bottom: .3rem;
    }
</style>
