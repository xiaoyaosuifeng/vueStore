import vue from 'vue'
import vueX from 'vuex'
import getters from './getters'
import addList from './modules/addList'
vue.use(vueX)
export default new vueX.Store({
    modules:{
        addList
    },
    getters
})