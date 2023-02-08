import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [
            {
                title: "menyapu",
                status: true,
            },
            {
                title: "cuci piring",
                status: false,
            },
            {
                title: "pel",
                status: true,
            },
        ],
    },
    getters: {
        getToDo (state) {
            return state.list
        }
    },
    actions: {
        addList (context, payload){
            context.commit('ADD_TODO', payload)
        },
        deleteList (context, payload){
            context.commit('DELETE_TODO', payload)
        }
    },
    mutations: {
        ADD_TODO(state, payload){
            state.list.push(payload)
        },
        DELETE_TODO(state, payload){
            state.list.splice(payload, 1)
        }
    },
    modules: {

    }
})