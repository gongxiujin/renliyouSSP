<template>
  <div>
    <div class="pc">
      <div class="system-bar">
        <div class="title-bar">
          <h2 class="system-title">安全高效的生态体系，免除后顾之忧</h2>
        </div>
        <div class="system-item">
          <div class="item-content">
            <p class="title">高效竞价</p>
            <p class="desc">
              一次曝光机会将公开向所有应用内竞价广告平台发起竞价云袭
              SSP会选取出价最高的广告进行展示确保开发者收益最大
            </p>
          </div>
          <img
            class="system-img"
            src="../../assets/images/product/system1.png"
            alt=""
          />
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system2.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">广告分层</p>
            <p class="desc">
              精准识别广告，进行分层，自动匹配高净值用户，提升转化，确保优质广告源得到充分的曝光机会
            </p>
          </div>
        </div>
        <div class="system-item">
          <div class="item-content">
            <p class="title">高效请求策略</p>
            <p class="desc">
              支持串、并行请求，开发者可自行选择，提高价值广告源的曝光机会
            </p>
          </div>
          <img
            class="system-img"
            src="../../assets/images/product/system3.png"
            alt=""
          />
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system4.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">多维流量分组</p>
            <p class="desc">
              相同特征、标签的用户往往存在共同偏好
              云袭SSP支持将用户进行地区、年龄、设备类型等群组划分投其所好助力精细化运营
            </p>
          </div>
        </div>
        <div class="system-item">
          <div class="item-content">
            <p class="title">A/B test</p>
            <p class="desc">提供多层流量实验框架，方便实现AB test</p>
          </div>
          <img
            class="system-img"
            src="../../assets/images/product/system5.png"
            alt=""
          />
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system4.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">智能混合瀑布流</p>
            <p class="desc">
              混合瀑布流模式融合传统瀑布流和应用内竞价的优势开发者可结合应用特点灵活设置瀑布流
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-system-bar">
        <div class="title-bar">
          <h2 class="system-title">安全高效的生态体系</h2>
          <h2 class="system-title">免除后顾之忧</h2>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system1.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">高效竞价</p>
            <p class="desc">
              一次曝光机会将公开向所有应用内竞价广告平台发起竞价云袭
              SSP会选取出价最高的广告进行展示确保开发者收益最大
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system2.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">广告分层</p>
            <p class="desc">
              精准识别广告，进行分层，自动匹配高净值用户，提升转化，确保优质广告源得到充分的曝光机会
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system3.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">高效请求策略</p>
            <p class="desc">
              支持串、并行请求，开发者可自行选择，提高价值广告源的曝光机会
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system4.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">多维流量分组</p>
            <p class="desc">
              相同特征、标签的用户往往存在共同偏好
              云袭SSP支持将用户进行地区、年龄、设备类型等群组划分投其所好助力精细化运营
            </p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system5.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">A/B test</p>
            <p class="desc">提供多层流量实验框架，方便实现AB test</p>
          </div>
        </div>
        <div class="system-item">
          <img
            class="system-img"
            src="../../assets/images/product/system4.png"
            alt=""
          />
          <div class="item-content">
            <p class="title">智能混合瀑布流</p>
            <p class="desc">
              混合瀑布流模式融合传统瀑布流和应用内竞价的优势开发者可结合应用特点灵活设置瀑布流
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
  background: #F8F8F8;
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
    margin: 0 auto 25px;
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
        width: 237px;
        height: 230px;
    }
  }
}
</style>
