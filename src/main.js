import Vue from "vue";
import directives from "core/directives";
import Lemon from "@souche-ui/lemon";
//import 'som-ui/lib/styles/index.css';
import "@souche-ui/lemon/less/reset.less";
import "@souche-ui/durian/lib/styles/index.css";
//import SomUI from 'som-ui';
import Variable from "variable";
import filters from "core/filters";
import myPlugin from "core/plugins";
import App from "./App";
import router from "./router";
import store from "./store";
import {
    Icon,
    Range,
    Toast,
    Loading
} from "som-ui";
import ToastPlugin from "som-ui/lib/plugins/toast/";
import LoadingPlugin from "som-ui/lib/plugins/loading/";
//import { ToastPlugin, LoadingPlugin } from '@souche-ui/som-ui';
import SomCityPicker from "@souche-ui/som-city-picker"; // 引入组件
import SomCarPicker from "@souche-ui/som-car-picker";
import SomSelectorItem from "@souche-ui/som-selector-item"; // 引入组件
import SomScrollRefresh from "@souche-ui/som-scroll-refresh"; // 引入组件
import Common from "./utils/helpers/common";
//引入metaInfo文件
import metaInfo from "@souche-f2e/metaInfo";
import hostManger from "./utils/hostManger/index";

import versionControl from './views/version-control/version-control'
import versionControlConfig from './views/version-control/config'


/* eslint-disable no-unused-vars */

/*
import VConsole from "vconsole";

if (process.env.VUE_APP_ENV === "development" || process.env.VUE_APP_ENV === "prepub") {
    const vconsole = new VConsole(); //eslint-disable-li
    Vue.use(vconsole);
}
*/
// console.log(router)
Vue.use(myPlugin);
//Vue.use(SomUI);
Vue.component(Icon.name, Icon);
Vue.component(Range.name, Range);
Vue.component(Toast.name, Toast);
Vue.component(Loading.name, Loading);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(SomCityPicker);
Vue.use(SomCarPicker);
Vue.use(SomSelectorItem);
Vue.use(SomScrollRefresh);
Vue.use(Lemon);
let host = hostManger();
Vue.use(metaInfo, {
    router,
    evn: process.env.VUE_APP_ENV,
    HostManager: host
});
Common.init();
versionControl.init(router, '1.1', versionControlConfig)


Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));

Variable.vm = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
    components: {
        App
    }
});

Variable.vm.$router.addRoutes([{
    path: '/h5/findCar2',
    component: () => import('@/views/car/list@1.1.vue')
}])

// console.log(Vue.prototype.__proto__)
// Object.defineProperty(Vue.prototype, '$route', {
//     get: function() {
//         return router.currentRoute
//     }
// })

// Vue.prototype.__proto__._defineGetter__('$route', () => router.currentRoute)
