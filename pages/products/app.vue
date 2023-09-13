<template>
  <!-- 移动变现 -->
  <div>
    <div class="banner-top"></div>
    <!-- 移动APP -->
    <ProductAppSlide></ProductAppSlide>
    <!-- 移动WAP站 -->
    <ProductAppWap></ProductAppWap>
    <!-- 安全高效的生态体系，免除后顾之忧 -->
    <ProductAppSystem></ProductAppSystem>
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
  background-image: url("../../assets/images/product/appBanner.png");
  background-size: 100% 100%;
  position: relative;
}
</style>
