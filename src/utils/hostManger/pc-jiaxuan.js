/**
 * @desc 弹个车PC端域名配置
 */
const host = {
    production: 'https://www.souche.com/',
    prepub: 'http://jia.prepub.souche.com/',
    development: 'http://jiaxuan-pc.dasouche.net/'
};

export default {
    init(env) {
        return host[env];
    }
};
