<template>
    <div class="vacation">
        <div class="vacation-top">
            周末去哪儿
        </div>
        <ul>
            <li class="vacation-item" v-for="item in vacationList" :key="item.id">
                <div class="vacation-img">
                    <img :src="item.imgUrl" alt="item.vacationName">
                </div>
                <div class="vacation-text">
                    <p>{{item.vacationName}}</p>
                    <p class="vacation-mark">{{item.vacationDesc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vacationList:[
                {
                    id:"01",
                    imgUrl:"https://imgs.qunarzz.com/sight/source/1505/68/de862f94e383a6.jpg_r_640x214_f9df927b.jpg",
                    vacationName:"福州打卡",
                    vacationDesc:"大美福州，必游之处"
                },
                {
                    id:"02",
                    imgUrl:"https://imgs.qunarzz.com/sight/source/1505/f6/82acfa5c7f472c.jpg_r_640x214_508da3cb.jpg",
                    vacationName:"熊孩子玩乐",
                    vacationDesc:"与数千种海洋动物亲切对话，看人鲨共舞惊心动魄、梦幻美人鱼婀娜多姿、海狮幽默的表演"
                },
                {
                    id:"03",
                    imgUrl:"https://imgs.qunarzz.com/sight/source/1509/b5/07bc81fc254ed6.jpg_r_640x214_8879c815.jpg",
                    vacationName:"土楼的秘密",
                    vacationDesc:"一座座神秘的建筑，一段段传奇的历史，在这里深刻体会历史留下的点点足迹，感受闽文化"
                }
            ]
        }
    }
}
</script>
<style  scoped lang="stylus">
@import "~css/common.styl";
    .vacation-top{
        font-size: .32rem;
        padding: .24rem;
    }
    .vacation-item{
        margin-bottom: .2rem;
        background: #fff;
    }
    .vacation-img{
        width: 100%;
        height: 0;
        padding-bottom: 37.4375%;
    }
    .vacation-img img{
        width: 100%;
        /* height: 2.7rem; */
    }
    .vacation-text{
        font-size: .32rem;
        padding: .24rem;
    }
    .vacation-mark{
        font-size: .26rem;
        padding: .2rem 0;
        padding-right : 1.3rem;
        textOverflow()
    }
</style>