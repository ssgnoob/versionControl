/**
 * 统计代码初始化
 */
import Const from 'const';
//import Env from 'const/runtimeEnv';
import Statistics from '@souche-f2e/statistics';

// const ids = (function () {
//     if (Env.IN_WX_MINPROGRAM) {
//         return {
//             baidu: '2eed906a85eae2182a0d7dec511c5e3c',
//             siteId: 'tangeche-wechat'
//         };
//     } else if (Env.IN_ALI_MINIPROGRAM) {
//         return {
//             baidu: 'd94b70fff4b033e2ae8f8d2940424eef',
//             siteId: 'tangeche-ali'
//         };
//     }
//     return {
//         baidu: 'b21163e43ac5d0c357bcc4e71e630acb',
//         siteId: 'tangeche-m'
//     };
// })();
export default {
    init(data, router) {
        Statistics.init({
            router,
            //baidu: ids.baidu,
            //google: 'GTM-N3HXNS3',
            piwik: {
                env: process.env.VUE_APP_ENV,
                siteId:'PLATFORM_JIAXUAN_M',
                //siteId: ids.siteId
            },
            load() {
                // app里面，不走统计代码
                if (window.location.pathname.indexOf('/blank') > -1) {
                    return false;
                }
                // 线上才会加载统计代码
                return process.env.VUE_APP_ENV === Const.PROD;
            }
        });
    }
};
