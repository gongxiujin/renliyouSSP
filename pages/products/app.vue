<template>
  <!-- 移动变现 -->
  <div style="position: relative;z-index: 3;">
    <div class="banner-top">
      <img :src="$t('app.banner.image')" alt="">
      <div class="banner-title">
        <h2 class="title">
          {{ $t('app.banner.title') }}
        </h2>
        <p class="text normal-text">
          {{ $t('app.banner.text') }}
        </p>
      </div>
    </div>
    <!-- 移动APP -->
    <ProductAppSlide v-model:data="slideData"></ProductAppSlide>
    <!-- 移动WAP站 -->
    <ProductAppSlide v-model:data="wapData"></ProductAppSlide>
    <!-- <ProductAppWap v-model:data="wapData"></ProductAppWap> -->
    <!-- 安全高效的生态体系，免除后顾之忧 -->
    <ProductAppSystem></ProductAppSystem>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n();
const slideData = ref(tm('app').appSlide);
const wapData = ref(tm('app').appWap);
const title = ref(t("app.pageTitle"));

</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .banner-top {
    min-width: 100% !important;
  }
}
.banner-top {
  width: 100%;
  min-width: 1200px;
  height: 434px;
  background-image: url("../../assets/images/product/appBanner.png");
  background-size: 100% 100%;
  position: relative;
}
.banner-title{
  position: absolute;
  top: 95px;
  left: 19%;
  width: 460px;
  text-align: left;
  color: #222;
  .title {
    font-size: 60px;
    font-weight: normal;
    line-height: 36px;
  }
  .text {
    margin-top: 28px;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;

  }
}
</style>
