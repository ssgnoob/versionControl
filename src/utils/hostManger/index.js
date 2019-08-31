import MTangecheHost from './m-jiaxuan';
import PcTangecheHost from './pc-jiaxuan';

/**
 * host管理器
 */
const hostManger = () => {
    const host = {
        mTangecheHost: MTangecheHost.init(process.env.VUE_APP_ENV),
        pcTangecheHost: PcTangecheHost.init(process.env.VUE_APP_ENV),
    };
    host.env = process.env.VUE_APP_ENV;
    return {host : host};
};

export default hostManger;
