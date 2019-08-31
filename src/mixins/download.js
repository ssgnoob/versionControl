import Env from 'const/runtimeEnv';
import Utils from 'utils';

const downUrlList = {
    appStoreUrl: 'https://itunes.apple.com/cn/app/%E5%A4%A7%E6%90%9C%E8%BD%A6%E5%AE%B6%E9%80%89/id1458702514?mt=8', // App stroe地址
    androidApkUrl: 'https://souche-res.oss-cn-hangzhou.aliyuncs.com/jiaxuan/jiaxuan.apk', //安卓主包链接
    androidApkUrl_jiaxuanshenma:'https://souche-res.oss-cn-hangzhou.aliyuncs.com/jiaxuan/jiaxuan_shenma.apk',
    androidApkUrl_jiaxuanbaidusousuo:'https://souche-res.oss-cn-hangzhou.aliyuncs.com/jiaxuan/jiaxuan_baidusousuo.apk',
    wechatDownloadUrl:'https://a.app.qq.com/o/simple.jsp?pkgname=com.souche.jupiter'
};
const spm = Utils.getParams().spm || '';

const getAndroidApkUrl = (spm) => {
    switch (spm) {
        case '400029.205438.7.8.19.1.8620865':
            return downUrlList.androidApkUrl_jiaxuanshenma;
        case '400028.205428.7.8.19.1.8620866':
            return downUrlList.androidApkUrl_jiaxuanbaidusousuo;
        default:
            return downUrlList.androidApkUrl;
    }
};



const download = {
    methods: {
        getDownloadUrl() {
            return new Promise((resolve) => {
                let url = '';
                //qq和微信 走腾讯应用宝下载
                if (Env.IN_WEIXIN || Env.IN_QQ) {
                    url = downUrlList.wechatDownloadUrl //微信下载的地址 腾讯应用宝
                } else if (Env.IN_IOS) {
                    url = downUrlList.appStoreUrl;
                } else if (Env.IN_ANDROID) {
                    url = getAndroidApkUrl(spm);
                } else {
                    //do something else
                }
                resolve(url);
            });
        },
        downloadApp(canDownload = true) {
            if (canDownload) {
                this.getDownloadUrl()
                    .then(url => this.$goPage(url));
            } else {
                //do something else
            }
        }
    }
};

export default download;
