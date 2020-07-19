import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      contacts: []
    }
  },
  mutations: {
    SET_USER_CONTACTS(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    getUserContacts(context, payload) {
      fetch(`fakeData.json?${payload.lastName}`)
        .then(response => {
          return response.json();
        })
        .then(response => {
          context.commit("SET_USER_CONTACTS", response.data);
        });
    }
  },
  modules: {}
});
