/**
 * @file 用于在Vue实例上绑定一些方法
 * @author hyb on 17/5/15.
 */

import Utils from 'utils';

export default {
    install(Vue) {
        // 设置网站标题
        Vue.prototype.$setTitle = function(title = '') {
            document.title = title;
        };

        // 跳转页面
        Vue.prototype.$goPage = function(name = '404', params, query = {}, flag = false) {
            if (/^http*/.test(name)) {
                if (params) {
                    name = Utils.convertParamsToUrl(params, `${name}?`);
                }
                flag ? window.location.replace(name) : (window.location.href = name);
                return;
            }
            flag = flag ? 'replace' : 'push';
            this.$router[flag]({
                name: name,
                params,
                query
            });
        };

        //获取链接参数
        Vue.prototype.$getUrlParam = function(paramName, url = window.location.href) {
            let reg = new RegExp("[\\?&]" + paramName + "=([^&#]*)"); 
            let result = url.match(reg); 
            if (result != null) return  decodeURIComponent(result[1]); return null; 
        }
    }
};
