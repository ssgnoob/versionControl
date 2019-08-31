import Vue from "vue";
//import VueSentry from '@souche-vue/vue-sentry'
import Innovation from "@souche-vue/Innovation";
import OSSImage from "@souche-ui/oss-image";
import VuePosition from "@souche-vue/vue-position";
import VueBurying from "@souche-vue/vue-burying";
import SPMModel from "@souche-f2e/souche-spm";
import router from "@/router";
//import packageJson from 'package';
import Statistics from "./statistics";

// 线索跟踪工具初始化
const spmInit = () => {
    SPMModel.init({
        env: process.env.VUE_APP_ENV,
        getUserTag(userTag) {
            Vue.buryOptions.usertag = userTag;
        },
        appType: "JX"
    });
    Vue.buryOptions.marketSpm = SPMModel.getCookieSpm();
};

// 埋点初始化
const BuryInit = () => {
    Vue.use(VueBurying, {
        env: process.env.VUE_APP_ENV,
        baseOptions: {
            platform: "PLATFORM_JIAXUAN_M"
        }
    });
};

// 调试小工具初始化
const InnovationInit = () => {
    Vue.use(Innovation, {
        env: process.env.VUE_APP_ENV
    });
};

/*
const sentryInit = () => {
    Vue.use(VueSentry, {
        dsn: 'https://c561378d66c14bd993416467e29a2616@sentry.souche.com/757',
        env: process.env.VUE_APP_ENV,
        version: packageJson.version
    });
};
*/

const positionInit = () => {
    // 定位初始化
    Vue.use(VuePosition, {
        http: true,
        timeout: 3000 //设置超时时间为3s
    });
};
// 图片懒加载初始化
const OSSImageInit = () => {
    Vue.use(OSSImage.component.vue, {
        lazy: {
            // 延迟加载相关配置
            attempt: 1,
            loading: "//img.souche.com/f2e/ee752ad58e61f80999eb1355a514493d.png",
            error: "//img.souche.com/f2e/ee752ad58e61f80999eb1355a514493d.png"
        }
    });
};

export default () => {
    InnovationInit();
    //sentryInit(); //去除掉sentryInit，加上这个在qq浏览器里面会报错网络异常
    OSSImageInit();
    positionInit();
    BuryInit();
    spmInit();
    Statistics.init({}, router);
};
