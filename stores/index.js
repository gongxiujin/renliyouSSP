import { defineStore } from 'pinia'


export const appStore = defineStore('appInfo', () => {

    const isShowMobileBlock = ref(false) //是否展示手机端底部登录注册模块

    return {
        isShowMobileBlock
    }
})
export const parallaxOffset = defineStore('parallaxOffset', () => {

    const height = ref('1040px') // 背部锯齿块高度

    return {
        height
    }
})
