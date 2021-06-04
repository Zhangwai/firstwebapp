<template>
     <div class="activity border-top" >
        <div class="activity-item border-right">
           <img src="" alt="门票特卖">
        </div>
        <div class="activity-item">
            <img src="" alt="暑假大促">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .activity{
        margin-top: .2rem;
        position: relative;
        display: flex;
        background: white;
    }
    .activity .activity-item{
        flex: 1;
        font-size: .28rem;
        text-align: center;
        height: 1.4rem;
    }
    .activity .activity-item img{
        width: 100%;
        height: 100%;     
    }
</style>