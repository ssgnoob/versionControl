export default {
    methods: {
        //解决iOS11、ios12系统的手机输入法消失后页面不回弹的bug
        iOSInputRepair() {
            //判断是否是IOS12 IOS12 input框输入法消失后，页面不回弹
            let u = navigator.userAgent.toLowerCase();
            let isIOS = !!u.match(/(iPhone | iOS)/i); //ios终端 包括iphoneX的判断
            if (isIOS) {
                let iOSVersion = 12;
                let iOSVersionObj;
                if (u.indexOf("like mac os x") > 0) {
                    let iosRegStr = /os [\d._]*/gi; //ios版本正则
                    iOSVersionObj = u.match(iosRegStr);
                    iOSVersionObj = (iOSVersionObj + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
                }
                if (iOSVersionObj) {
                    //防止取不到版本
                    const firstDot = iOSVersionObj.toString().indexOf("."); //版本号有的是：12.1.3
                    if (firstDot > -1) {
                        iOSVersion = iOSVersionObj.toString().substring(0, firstDot);
                    } else {
                        iOSVersion = iOSVersionObj;
                    }
                }
                if (parseInt(iOSVersion) >= 11) {
                    //如果iphone版本号>=11
                    //使页面滑动
                    let currentPosition, timer;
                    let speed = 1; //页面滚动距离
                    timer = setInterval(function() {
                        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                        currentPosition -= speed;
                        window.scrollTo(0, currentPosition); //页面向上滚动
                        currentPosition += speed; //speed变量
                        window.scrollTo(0, currentPosition); //页面向下滚动
                        clearInterval(timer);
                    }, 1);
                }
            }
        },

        /**
         * 判断是否是安卓手机
         */
        isAndroid() {
            let u = navigator.userAgent;
            let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
            return isAndroid;
        },
        /**
         * 判断是否是IOS手机
         */
        isIos () {
            let u = navigator.userAgent;
            const isIOS = !!u.match(/(iPhone | iOS)/i); //是否是ios终端
            return isIOS;
        },
        /**
         * 判断是否是空字符串
         */
        isEmptyStr(str) {
            return str === null || str === "null" || str === "undefined" || str === undefined || str === "";
        }
    }
};
