export default {
    state: {
        list: [
            {id:1,name:'吃饭',done:true},
            {id:2,name:'睡觉',done:false}
        ]
    },
    mutations:{
        addList(state,obj){
            state.list.push(obj)
        },
        finish(state,i){
            state.list.forEach((item,index,arr)=>{
                if (item.id==i) item.done=true
            })
        },
        del(state,i){
            state.list.forEach((item,index,arr)=>{
                if (item.id==i) arr.splice(index,1)
            })
        }
    },
    actions:{
        addList({commit},obj){
            commit('addList',obj);
        },
        finish({commit},i){
            commit('finish',i)
        },
        del({commit},i){
            commit('del',i)
        }
    }
}