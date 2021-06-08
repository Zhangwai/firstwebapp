<template>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                    <!-- hot -->
                <div>
                <div class="hot-title">热门城市</div>
                    <ul class="hot-list">
                        <li class="hot-item">
                            北京
                        </li>
                        <li class="hot-item">
                            上海
                        </li>
                        <li class="hot-item">
                            三亚
                        </li>
                        <li class="hot-item">
                            丽江
                        </li>
                        <li class="hot-item">
                            杭州
                        </li>
                        <li class="hot-item">
                            广州
                        </li>
                        <li class="hot-item">
                            成都
                        </li>
                        <li class="hot-item">
                            深圳
                        </li>
                    </ul>
                </div>
                <div>
                <!-- sort -->
                <div class="sort-title">字母排序</div>
                <ul class="sort-list">
                    <li class="sort-item" v-for="(val,key) in cities" :key="key" @click="changeSort(key)">
                        {{key}}
                    </li>        
                </ul>
                </div>
                <!-- list -->
                <div>
                    <div v-for="(val,key) in cities" :key="val.id" :ref="key">
                        <div class="list-title">{{key}}</div>
                        <ul class="list-list">
                            <li class="list-item" v-for="item in val" :key="item.id" @click="changeCityName(item.name)">
                                {{item.name}}
                            </li>
                    
                        </ul>

                    </div> 
                </div>
            </div>
        </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {

    props:['cities','bd'],
    methods:{
        changeSort(sortName){
            this.bs.scrollToElement(this.$refs[sortName][0])
         
        },
        changeCityName(cityName){
            this.changeCity(cityName)
            this.$router.push('/')
        },
        ...mapMutations(["changeCity"])
    },
    data(){
        return{
            bs:'',

        }
    },
    mounted(){
        this.$nextTick(() => {
        this.bs = new BetterScroll(this.$refs['wrapper'], {
        movable: true,
        zoom: true
        })
        this.bs.on('touchEnd', () => {
            this.bs.refresh()
        })
    })

    },
}
</script>
<style scoped lang="stylus">
@import "~css/common.styl";
    .wrapper{
        position: absolute;
        left:0;
        right:0;
        bottom :0;
        top:0.88rem;
        background: #f5f5f5;
        overflow:hidden;

    }
    .hot-title{
        font-size: .26rem;
        color: #212121;
        padding: .3rem;
    }
    .hot-list{
        background: #fff;
        font-size: .28rem;
        position: relative;
        overflow: hidden;
    }
    .hot-list::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 33.33333%;
        left: 33.33333%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
    }
    .hot-item{
        text-align: center;
        height: .9rem;
        line-height: .9rem;
        float: left;
        width: 33.33%;
        border-bottom: .02rem solid #ddd;
    }
     .sort-title{
        font-size: .26rem;
        color: #212121;
        padding: .3rem;
    }
    .sort-list{
        background: #fff;
        font-size: .28rem;
        position: relative;
        overflow: hidden;
        padding: .3rem 0;
    }
    
    .sort-item{
        text-align: center;
        height: .9rem;
        line-height: .9rem;
        float: left;
        width: 16.6666%;
    }
    .list-title{
        font-size: .26rem;
        color: #212121;
        padding: .3rem;
    }
    .list-list{ 
        font-size: .28rem;
        position: relative;
        overflow: hidden;
        background: #fff;
    }
     .list-list::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 25%;
        left: 25%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
    }
    .list-list::after{
        content: '';
        position: absolute;
        height: 100%;
        width: 0%;
        left: 75%;
        border-left: .02rem solid #ddd;
    }
    .list-item{      
        text-align: center;
        font-size:.28rem;
        line-height: .9rem;
        float: left;
        width: 25%;
        border-bottom: .02rem solid #ddd;
        textOverflow();
        position :relative;
    }
</style>