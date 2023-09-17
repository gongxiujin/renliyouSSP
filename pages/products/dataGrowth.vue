<template>
    <!-- 数据增长 -->
    <div style="position: relative;z-index: 3;">
      <div class="banner-top"></div>
      <ProductDataService></ProductDataService>
      <!-- 全方位保证服务质量 -->
      <ProductDataQuality></ProductDataQuality>
      <!-- 优秀案例分享 -->
      <ProductDataCase></ProductDataCase>
    </div>
  </template>
  
  <script></script>
  
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
    background-image: url("../../assets/images/product/dataGrowthBanner.png");
    background-size: 100% 100%;
    position: relative;
  }
  </style>
  