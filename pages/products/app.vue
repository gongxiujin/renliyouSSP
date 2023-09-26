<template>
  <!-- 移动变现 -->
  <div style="position: relative; z-index: 3">
    <!-- banner -->
    <AloneBannerSingle :path="bannerData"></AloneBannerSingle>
    <!-- 移动APP -->
    <ProductAppSlide v-model:path="slideData" v-model:backgroundColor="slideColor"></ProductAppSlide>
    <!-- 移动WAP站 -->
    <ProductAppSlide v-model:path="wapData" v-model:backgroundColor="wapColor"></ProductAppSlide>
    <!-- <ProductAppWap v-model:data="wapData"></ProductAppWap> -->
    <!-- 安全高效的生态体系，免除后顾之忧 -->
    <ProductAppSystem></ProductAppSystem>
  </div>
</template>

<script setup>

import { useI18n } from "vue-i18n";
const { t } = useI18n();
useHead({
  title: t("app.pageTitle"),
});
const bannerData = ref("app.banner");
const slideData = ref("app.appSlide");
const slideColor = "#F8F8F8;"
const wapData = ref("app.appWap");
const wapColor = "#FFF;"
</script>

<style></style>
