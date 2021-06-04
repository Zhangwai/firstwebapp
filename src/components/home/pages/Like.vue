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
    data(){
        return {
            likeList:[
                {
                    id:'01',
                    imgUrl:"https://imgs.qunarzz.com/sight/p0/1504/54/54acf4a672e58102.water.jpg_200x200_38c89023.jpg",
                    title:"贵安水世界",
                    msg:"5218",
                    price:"169",
                    map:"连江县"
                },
                {
                    id:'02',
                    imgUrl:"https://imgs.qunarzz.com/sight/p0/2003/98/985f7f9721ace766a3.img.jpg_200x200_0b150b57.jpg",
                    title:"福州欧乐堡海洋世界",
                    msg:"2888",
                    price:"193.8",
                    map:"永泰县"
                },
                {
                    id:'03',
                    imgUrl:"https://imgs.qunarzz.com/sight/p0/1507/cd/cd5907320e7a1a1a.img.jpg_200x200_6de235db.jpg",
                    title:"中国福州云顶",
                    msg:"6721",
                    price:"153.8",
                    map:"永泰县"
                },
                {
                    id:'04',
                    imgUrl:"https://imgs.qunarzz.com/sight/p0/1505/c0/c016dce7a3156fd1.water.jpg_200x200_9e096461.jpg",
                    title:"东方第一漂",
                    msg:"425",
                    price:"134",
                    map:"福清市"
                }
            ]
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
