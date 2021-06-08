<template>
    <div>
        <div v-for="(val,key) in cities" :key="val.id">
            <div class="list-title">{{key}}</div>
            <ul class="list-list">
                <li class="list-item" v-for="item in val" :key="item.id">
                    {{item.name}}
                </li>
        
            </ul>

        </div>
        
    </div>
</template>
<script>
export default {
    props:['cities']
}
</script>
<style scoped lang="stylus">
@import "~css/common.styl";
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
        width: 25%;
        left: 50%;
        border-right: .02rem solid #ddd;
    }
    .list-item{      
        text-align: center;
        font-size:.28rem;
        line-height: .9rem;
        float: left;
        width: 25%;
        border-bottom: .02rem solid #ddd;
        textOverflow();
        
    }
</style>