import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Grizzly', registered: false},
            {id: 2, name: 'Ronen', registered: false},
            {id: 3, name: 'Lainie', registered: false},
            {id: 4, name: 'Remy', registered: false}
        ]
    },
    // getters: getters
    //OR YOU CAN USE ES6 SYNTAX TO AUTOMATICALLY ASSIGN THE VALUE
    getters,
    mutations,
    actions
});
