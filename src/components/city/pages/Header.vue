<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <span class="iconfont">
                    &#xe629;
                </span>
            </div>
        </router-link>
        
        <div class="header-title">
            城市选择
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="stylus">
@import '~css/var.styl';

    .header{
        width: 100%;
        height: 0.88rem;
        background:$bgColor;
        color:$textColor;
        font-size: .32rem;
        position: relative;
    }
    .header a {
        color :#fff;
    }
    .header-left{
        width: 0.4rem;
        padding: 0 .2rem;
        text-align: center;
        line-height: .88rem;
        font: bold;
        position: absolute;
    }
    .header-title{
        text-align:center;
        line-height :.88rem;
    }
</style>