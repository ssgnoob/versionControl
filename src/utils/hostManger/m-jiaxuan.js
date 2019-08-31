/**
 * @desc 弹个车移动端配置
 */
const host = {
    production: 'https://m.souche.com/',
    prepub: 'http://m.jia.prepub.souche.com/',
    development: 'http://jia.dasouche.net/'
};

export default {
    init(env) {
        return host[env];
    }
};
