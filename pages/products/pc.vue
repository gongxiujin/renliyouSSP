<template>
  <!-- pc变现 -->
  <div style="position: relative; z-index: 3; background: #f8f8f8">
    <div class="banner-top">
      <!-- banner -->
      <AloneBannerSingle :path="bannerData"></AloneBannerSingle>
      <ProductPcSlide></ProductPcSlide>
    </div>
    <!-- 商业PC变现的优势 -->
    <ProductPcAdvantage></ProductPcAdvantage>
  </div>
</template>

<script setup>
import { fetchTranslation } from "~/assets/js/base.js";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// useHead({
//   title: t("pc.pageTitle"),
// });
const bannerData = ref("pc.banner");
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
  background-image: url("/images/product/pcBanner.png");
  background-size: 100% 100%;
  position: relative;
  .banner-main {
    width: 100%;
    height: 434px;
  }
}
</style>
