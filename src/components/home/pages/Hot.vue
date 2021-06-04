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
    data(){
        return {
            hotList:[
            {
                id:'01',
                title:"福州欧乐堡海洋世界",
                price:"￥193.8",
                imgUrl:"https://imgs.qunarzz.com/sight/p0/2003/98/985f7f9721ace766a3.img.jpg_250x250_40d713cb.jpg"
            },
             {
                id:"02",
                title:"罗源湾海洋世界",
                price:"￥116.5",
                imgUrl:"https://imgs.qunarzz.com/sight/p0/1508/ff/ff5bbbcf8cfdec3.img.jpg_250x250_f91d8108.jpg"
            },
            {
                id:"03",
                title:"闽江夜游",
                price:"￥85.0",
                imgUrl:"https://imgs.qunarzz.com/sight/p0/201403/10/7c19e02265d1586824b5b18495222383.jpg_250x250_40e6663a.jpg"
            },
            {
                id:'04',
                title:"仙人井景区",
                price:"￥15.0",
                imgUrl:"https://imgs.qunarzz.com/sight/p6/201211/00/791325a30559a06b93835fbb.jpg_250x250_bcab329e.jpg"
            }
            ]
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