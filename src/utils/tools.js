/**
 * @Description:
 * @author Liu Le
 * @date 2019-08-15
 */
import Vue from 'vue'

class Tools {
    /**
     *
     * @param phone
     * @returns {boolean}
     */
    static checkPhone(phone) {
        if (!phone) {
            Vue.$som.toast.show({
                text: '请输入手机号',
                position: 'middle'
            });
            return false;
        } else if (!/1[0-9]{10}/.test(phone)) {
            Vue.$som.toast.show({
                text: '请输入正确的手机号',
                position: 'middle'
            });
            return false;
        } else {
            return true;
        }
    }


}

export default Tools
