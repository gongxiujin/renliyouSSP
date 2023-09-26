<template>
  <!-- 数据增长 -->
  <div style="position: relative; z-index: 3">
    <!-- banner -->
    <AloneBannerSingle :path="bannerData"></AloneBannerSingle>
    <ProductDataService></ProductDataService>
    <!-- 全方位保证服务质量 -->
    <ProductDataQuality></ProductDataQuality>
    <!-- 优秀案例分享 -->
    <ProductDataCase></ProductDataCase>
  </div>
</template>

<script setup>
import { fetchTranslation } from "~/assets/js/base.js";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
useHead({
  title: t("dataGrowth.pageTitle"),
});

const bannerData = ref("dataGrowth.banner");
</script>

  <style lang="scss" scoped>
</style>
