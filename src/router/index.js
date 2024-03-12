import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/bpmn-modeler.vue")
  },
  {
    path: "/bpmn-modeler",
    name: "默认-编辑模式",
    component: () => import("../views/bpmn-modeler.vue")
  },
  {
    path: "/bpmn-viewer",
    name: "默认-预览模式",
    component: () => import("../views/bpmn-viewer.vue")
  },
  {
    path: "/custom-modeler",
    name: "自定义-编辑模式",
    component: () => import("../views/custom-modeler.vue")
  },
  {
    path: "/custom-viewer",
    name: "自定义-预览模式",
    component: () => import("../views/custom-viewer.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
