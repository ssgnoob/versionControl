/*iphonex 适配*/
import { mapGetters } from "vuex";
import Env from "@/utils/const/runtimeEnv";
export default {
    name: "iphonexAdaptation",
    data() {
        return {
            showIphonexPad: false
        };
    },
    computed: {
        ...mapGetters(["isIphonex", "device"])
    },
    methods: {
        resizeListener: function() {
            const currnetHeight =
                window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            const deviceHeight = this.device.height; //刚进入页面时的高度
            if (Env.IN_WEIXIN) {
                //微信里面打开 默认没有底部状态栏 在滚动时 底部状态栏会出现
                if (deviceHeight != currnetHeight) {
                    this.showIphonexPad = false;
                } else {
                    this.showIphonexPad = true;
                }
            } else if (Env.IN_SAFARI) { //safari浏览器 默认有底部状态栏 在滚动时 底部状态栏会消失
                if (deviceHeight < currnetHeight) {
                    this.showIphonexPad = true;
                } else {
                    this.showIphonexPad = false;
                }
            } else if (Env.IN_QQ || Env.IN_UC) {
                this.showIphonexPad = false; //在QQ浏览器、uc浏览器中打开，底部状态栏一直存在，showIphonexPad恒为false
            }
        }
    },
    mounted() {
        //监听resize事件
        this.isIphonex && window.addEventListener("resize", this.resizeListener.bind(this));
        this.showIphonexPad = this.isIphonex;
        this.isIphonex && this.resizeListener();
    },
    beforeDestroy() {
        this.isIphonex && window.removeEventListener("resize", this.resizeListener.bind(this));
    }
};
