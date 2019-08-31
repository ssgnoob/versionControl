/**
  * @file 通用全局filter
  * @author hyb on 17/2/28.
  * move and rename by jwd on 2018/7/23
  */


export default {
     /**
     * @desc 将http转换成https
     */
    toHttps: (value = '') => {
        if (window.location.protocol === 'https:' && /^http:\/\/*/.test(value)) {
            return value.substr(5);
        }
        return value;
    },
    /**
     * @desc 元转成万,默认保留两个小数点
     * 值无效或者不存在,则返回0
     */
    yuanReverseWan: (value = 0, place = 2) => {
        if (isNaN(+value)) {
            return '数据异常';
        }
        if (!value && +value !== 0) {
            return '';
        }
        value /= 10000;
        return value.toFixed(place);
    },
    
};
