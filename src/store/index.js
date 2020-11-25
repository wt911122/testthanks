import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        SET_USERINFO(state, info){
            state.userInfo = info;
        }
    },
    actions: {
        async getUserInfo({ commit }, query) {
            try{
                const q = Object.keys(query).map(k => `${k}=${query[k]}`).join('&');
                console.log(q);
                const response = await fetch('/aitasks/tdataapi?' + q);
                const result = await response.json();
                console.log(result)
                commit('SET_USERINFO', result);
            } catch(e) {
                console.log(e)
            }
            
        }
    },
})
