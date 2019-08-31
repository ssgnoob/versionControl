<template>
    <div>
        <no-match-view v-if="showNoMatchView && !exactView"></no-match-view>

        <component :is='exactView'
                   ref='exactView'
                   v-else></component>
        <!-- <slot></slot> -->
    </div>
</template>
<script>
import noMatchView from './noMatchView.vue'
import versionControl from './version-control.js'

export default {
    props: {},
    data () {
        return {
            showNoMatchView: false,
            viewPath: '@/views/car/list@1.1.vue',
            version: ''
        }
    },
    computed: {
        exactView () {

            return this.viewPath ? () => import(`@/views/${this.viewPath}`) : null
            // return () => import(`@/views/car/list@1.1.vue`)
        }
    },
    components: {
        noMatchView
    },
    methods: {
        getViewByRule () {
            const path = versionControl.init().getFinalViewPath(this.$route.path, this.version)

            this.viewPath = path.match(/views\/(.*)$/)[1]
        }
    },
    mounted () {

        // this.$route = this.$route.params.oldRoute
        // console.log(this.$route.query)
        // console.log(this.$route.currentRoute)
        // console.log(this)
    },
    created () {
        // this.$route.__proto__.set = function (route) {
        //     console.log(this)
        //     this.path = route.path
        // }

        this.version = '1.1'

        Object.defineProperty(this, '$route', {
            get: function () {
                return this.$router.currentRoute
            }
        })

        this.showNoMatchView = this.$route.params.VersionControlType === 'none'

        const tempRoute = { ...this.$route.params }
        this.$router.set(tempRoute.oldRoute)
        // console.log(tempRoute)
        // history.replaceState({ name: 'car/list' }, 'list')
        window.history.pushState({}, 'page 2', tempRoute.oldRoute.fullPath);
        // console.log('a')
        this.getViewByRule()
    }
}
</script>
