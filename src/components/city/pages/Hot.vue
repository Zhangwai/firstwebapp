<template>
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
</style>