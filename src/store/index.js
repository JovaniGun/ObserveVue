/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import Task from './modules/task'

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        Task,
    }
})