<!-- 立即加入我们，助力你获得收益 -->
<template>
    <div class="pc">
        <img class="bg-img" src="../../assets/images/index/joinUsBg.png" alt="">
        <h2 class="title">{{ $t('joinUs.title') }}</h2>
        <div class="btn-bar">
            <a class="register" href="/">{{ $t('registorNow') }}</a>
            <a class="link" href="/">{{ $t('contactUs') }}</a>
        </div>
    </div>
    <div class="mobile" v-if="isShowMobileBlock">
        <a class="register" href="">{{ $t('login.registorButon') }}</a>
        <a class="login" href="">{{ $t('login.loginButton') }}</a>
    </div>
</template>

<script setup>
import { appStore } from '@/stores'
import {storeToRefs} from "pinia";

const { isShowMobileBlock } = storeToRefs(appStore())


</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .pc {
    display: none !important;
  }
  .mobile {
    width: 100%;
    display: inline-flex !important;
    opacity: 1 !important;
    height: 60px !important;
  }
}
.pc {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 210px;
    background: rgba(30, 26, 25, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .bg-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
    }
    .title {
        font-family: Source Han Sans CN;
        font-size: 32px;
        font-weight: 900;
        line-height: 38px;
        color: #FFFFFF;
    }
    .btn-bar {
        display: flex;
        .register {
            width: 116px;
            height: 42px;
            border-radius: 2px;
            background: #E65E24;
            font-family: Source Han Sans CN;
            font-size: 16px;
            font-weight: 500;
            line-height: 42px;
            text-align: center;
            color: #FFFFFF;
            margin-right: 16px;
            cursor: pointer;
        }
        .link {
            position: relative;
            width: 116px;
            height: 42px;
            border-radius: 2px;
            border: 1px solid #E65E24;
            line-height: 42px;
            text-align: center;
            font-family: Source Han Sans CN;
            font-size: 16px;
            font-weight: 500;
            line-height: 42px;
            color: #E65E24;
            cursor: pointer;
            z-index: 2;
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                transition: width 0.5s, background-color 0.5s;
            }
            &:hover {
                color: #FFFFFF;
            }
            &:hover::before {
                width: 100%;
                background-color: #E65E24;
                z-index: -1;
            }
        }
    }
}
.mobile {
    display: none;
    opacity: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
    transition: opacity .3s;
    .register {
        width: 163px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 2px;
        background: #E65E24;
        font-family: Source Han Sans CN;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
    }
    .login {
        width: 163px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid #E65E24;
        line-height: 40px;
        text-align: center;
        font-family: Source Han Sans CN;
        font-size: 16px;
        font-weight: 500;
        line-height: 40px;
        color: #E65E24;
    }
}
</style>
