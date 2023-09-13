<template>
  <div>
    <!-- 商业PC变现的优势 -->
    <div class="pc">
      <div class="system-bar">
        <div class="title-bar">
          <h2 class="system-title">商业PC变现的优势</h2>
        </div>
        <div class="system-item">
          <div class="item-content">
            <p class="title">安全稳定，持续发展</p>
            <p class="desc">
                每项业务均通过严格测试力求创新，无缝衔接，收入可持续
            </p>
          </div>
          <img
            class="system-img"
            src="../../assets/images/product/PC-1.png"
            alt=""
          />
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/PC-2.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">业务多元，优化整合</p>
            <p class="desc">
                合理开发网吧资源，多元化业务接入资源整合，力求增值收益最大化
            </p>
          </div>
        </div>
        <div class="system-item">
          <div class="item-content">
            <p class="title">数据精准，及时透明</p>
            <p class="desc">
                诚信为本，坚决抵制数据作假。精准数据统计，支付及时不拖欠
            </p>
          </div>
          <img
            class="system-img"
            src="../../assets/images/product/PC-3.png"
            alt=""
          />
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/PC-4.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">操作便捷，高效服务</p>
            <p class="desc">
                自主研发管理系统，操作更简单7x24小时服务，随时解决问题
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-system-bar">
        <div class="title-bar">
          <h2 class="system-title">商业PC变现的优势</h2>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/PC-1.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">安全稳定，持续发展</p>
            <p class="desc">
                每项业务均通过严格测试力求创新，无缝衔接，收入可持续
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/PC-2.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">业务多元，优化整合</p>
            <p class="desc">
                合理开发网吧资源，多元化业务接入资源整合，力求增值收益最大化
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/PC-3.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">数据精准，及时透明</p>
            <p class="desc">
                诚信为本，坚决抵制数据作假。精准数据统计，支付及时不拖欠
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/PC-4.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">操作便捷，高效服务</p>
            <p class="desc">
                自主研发管理系统，操作更简单7x24小时服务，随时解决问题
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
}
.mobile {
  display: none;
}

.system-bar {
  width: 100%;
  height: 100%;
  padding-top: 84px;
  padding-bottom: 100px;
  background: #fff;
  .title-bar {
    width: 1200px;
    min-width: 1200px;
    text-align: center;
    margin: 0 auto 112px;
    .system-title {
      font-family: Source Han Sans CN;
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
  }
  .system-item {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item-content {
      width: 40%;
      text-align: left;
      .title {
        font-family: Source Han Sans CN;
        font-size: 26px;
        font-weight: bold;
        line-height: 26px;
        color: #222222;
        margin-bottom: 16px;
      }
      .desc {
        font-family: 思源黑体;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        color: #666666;
      }
    }
    .system-img {
      width: 346px;
      height: 336px;
    }
  }
}
.m-system-bar {
  width: 100%;
  height: 100%;
  padding-top: 84px;
  padding-bottom: 100px;
  background: #f8f8f8;
  .title-bar {
    width: 100%;
    text-align: center;
    margin: 0 auto 112px;
    .system-title {
      font-family: Source Han Sans CN;
      font-size: 24px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
  }
  .system-item {
    width: 100%;
    margin: 0 auto 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .item-content {
      width: 100%;
      text-align: left;
      padding: 0 45px;
      .title {
        font-family: Source Han Sans CN;
        font-size: 18px;
        font-weight: bold;
        line-height: 26px;
        color: #222222;
        margin-bottom: 8px;
      }
      .desc {
        font-family: 思源黑体;
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        color: #666666;
      }
    }
    .system-img {
      width: 174px;
      height: 152px;
    }
  }
}
</style>
