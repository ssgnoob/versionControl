/**
 * @file 路由配置文件入口
 */

import H5 from './h5';
export default {
    "/": {
        redirect: "/car/list"
    },
    // 二手车列表页
    '/car/list': {
        name: 'car-list',
        path: 'views/car/list',
        meta: {
            keepAlive: true
        }
    },
    '/version': {
        name: 'versionControl',
        path: "views/version-control/index"
    },
    h5: H5 //h5推广活动页

};
