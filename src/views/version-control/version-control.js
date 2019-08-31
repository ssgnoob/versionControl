import Vue from 'vue'
import versionControlWrapper from './index.vue'
/*
 ** VersionControl 单例
 **  参数说明
 **  needVersionControlViews: Array<{route:String,path:String,type: VersionControlType}>
 **  VersionControlType: enum {
 **       none,      //未匹配到对应版本页面文件时弹出更新提示框，默认值
 **       new,     //未匹配到对应版本页面文件时转向最新版本
 **       old    //转向最旧版本
 **    }
 */

const versionControlView = '/version'
export default class VersionControl {
    constructor(router, version, needVersionControlViews) {
        this.needVersionControlViews = needVersionControlViews
        this._instance = null
        this.router = router
        this.version = version
        this.routerProxy()
    }

    static init(router, version, needVersionControlViews) {
        if (!this._instance)
            this._instance = new VersionControl(
                router,
                version,
                needVersionControlViews
            )
        return this._instance
    }

    getFinalViewPath(path, version) {
        return (
            (this.needVersionControlViews || []).filter(
                item => item.route === path
            )[0].path + `@${version}`
        )
    }

    routerProxy() {
        let cache = {
            versionControlView
        }

        this.router.__proto__.__proto__.set = function(route) {
            this.history.current = route
        }
        this.router.beforeEach((to, from, next) => {
            if (to.path === versionControlView) {
                next()
                return
            }
            const VersionControlType = this.getVersionControlType(to)
            if (!VersionControlType) {
                next()
                return
            }
            const newRoute = this.getNewRoute(to, VersionControlType)
            cache[to.path] = newRoute
            next(newRoute)

            // next({
            //     path: '/car/list',
            //     component: this.createJSXElement()
            // })
        })
    }

    createJSXElement() {
        return Vue.component('my-component', {
            functional: true,
            // Props 是可选的
            props: {
                // ...
            },
            render: function() {
                // ...
                const renderView = () => import('@/views/car/list@1.1.vue')
                return (
                    <versionControlWrapper>
                        {{
                            renderView
                        }}
                    </versionControlWrapper>
                )
            }
        })
    }
    getNewRoute(to, VersionControlType) {
        return VersionControlType
            ? {
                  name: 'versionControl',
                  path: versionControlView,
                  params: {
                      VersionControlType,
                      oldRoute: to,
                      path: this.getFinalViewPath(to.path, this.version)
                  }
              }
            : to
    }

    getFullPath(query) {
        let fullPath = `${versionControlView}/?`
        for (let item in query) {
            fullPath += `${item}=${query.item}`
        }
        return fullPath
    }

    getVersionControlType(to) {
        let cache = {}

        return (to => {
            const oldPath = cache[to.path] || this.findRouteInConfig(to.path)
            cache[to.path] = oldPath
            if (oldPath.length > 0) return oldPath[0].type || 'none'
            else return null
        })(to)
    }

    findRouteInConfig(path) {
        return (this.needVersionControlViews || []).filter(
            item => item.route === path
        )
    }
}
