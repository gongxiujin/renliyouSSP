<template>
    <!-- 移动变现 -->
    <div>
      <div class="banner-top">
        <div class="banner-main"></div>
        <ProductPcSlide></ProductPcSlide>
        <!-- 商业PC变现的优势 -->
        <ProductPcAdvantage></ProductPcAdvantage>
      </div>
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
    background-image: url("../../assets/images/product/pcBanner.png");
    background-size: 100% 100%;
    position: relative;
    .banner-main {
        width: 100%;
        height: 434px;
    }
  }
  </style>
  