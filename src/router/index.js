import Vue from "vue";
import Router from "@souche-vue/souche-router";
import routes from "./modules";
import { isEmptyStr } from "@/utils/helpers/tool";
Vue.use(Router);
import store from "src/store";
const router = new Router({
    mode: "history",
    base: "/",
    routes
    /*
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          if (from.meta.keepAlive) {
            from.meta.savedPosition = document.body.scrollTop
          }
          return { x: 0, y: to.meta.savedPosition || 0 }
        }
    }
    */
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    let spm = to.query.spm || "";
    if (!isEmptyStr(spm)) {
        store.commit("SET_SPM", spm);
    }
    next();
});

export default router;
