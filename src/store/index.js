import Vue from "vue";
import Vuex from "vuex";

import bpmn from "./modules/bpmn";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { bpmn }
});
