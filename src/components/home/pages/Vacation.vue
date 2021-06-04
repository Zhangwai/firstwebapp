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
    props:['vacationList'],
    data(){
        return {
           
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