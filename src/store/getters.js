export  default {
    todoList:state=>{
        const todoList=state.addList.list.filter(item=>{
            if(!item.done) {
                return item
            }
        })
        return todoList
    },
    doneList:state=>{
        const doneList=state.addList.list.filter(item=>{
            if(item.done) return item
        })
        return doneList
    }
}