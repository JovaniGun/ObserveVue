/* eslint-disable */
export default{
    state: {
        tasks: [
            {id: 1, title: 'Spider-man', description: 'Oh, its Spider-man', whatWatch: 'Film', completed: false, editing: false},
            {id: 2, title: 'Shameless', description: 'Frenk, mf', whatWatch: 'Serial', completed: false, editing: false}
          ]
    },
    mutations: {
        newTask(state,payload){
            state.tasks.push(payload);
        }
    },
    actions: {
        newTask({commit},payload){
            payload.id = Math.random
            commit('newTask',payload);
        }
    },
    getters: {
        tasks(state){
            return state.tasks;
        },
        taskCompleted(state){
            return state.tasks.filter(task => {
                return task.completed
            })
        },
        taskNotCompleted(state){
            return state.tasks.filter(task => {
                return task.completed === false
            })
        }
    }
}