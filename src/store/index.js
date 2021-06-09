import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海市';
if(localStorage.city){
    defaultCity = localStorage.city;
}

const state = {
    city:defaultCity,
    detail_img_banner:false
}

const mutations = {
    changeCity(state,cityName){
        state.city = cityName
        localStorage.city = cityName
    },
    showBanner(state){
        state.detail_img_banner = true;
    },
    hideBanner(state){
        state.detail_img_banner = false;
    }
}
export default new Vuex.Store({

    state,
    mutations

})  