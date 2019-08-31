/**
 * 工具方法
 */

//生成唯一值uuid
export const generateUuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

/**
 * 判断是否是IPHonex 解决刘海屏问题
 */
export const isIphonex = () => {
    const u = navigator.userAgent;
    //iphoneX 系列手机宽、高、dpr
    const xSeriesConfig = [
        {
            devicePixelRatio: 3,
            width: 375,
            height: 812
        },
        {
            devicePixelRatio: 3,
            width: 414,
            height: 896
        },
        {
            devicePixelRatio: 2,
            width: 414,
            height: 896
        }
    ];
    const isIOS = !!u.match(/(iPhone | iOS)/i);
    if (isIOS) {
        const { devicePixelRatio, screen } = window;
        const { width, height } = screen;
        return xSeriesConfig.some(
            item => item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height
        );
    }
    return false;
};

//生成唯一值uuid
export const isEmptyStr = str => {
    return str === null || str === "null" || str === "undefined" || str === undefined || str === "";
};
