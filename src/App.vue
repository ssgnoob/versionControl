<style lang="less">
@import "styles/index.less";
* {
    -webkit-tap-highlight-color: transparent;
}
body {
    -webkit-overflow-scrolling: touch;
}
</style>

<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
//import { generateUuid } from '@/utils/helpers/tool'
import Base from '@/mixins/base'
//import Api from 'api';ß
export default {
    name: 'app',
    data () {
        return {
        };
    },
    mixins: [Base],
    computed: {
    },
    components: {
    },
    async created () {

    },
    methods: {

    }
};
</script>
