<template>
  <div style="width: 100%">
    <div class="pc">
      <div class="access-bar">
        <div class="menu-bar">
          <div class="menu">
            <div
              @mouseover="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              网址导航
            </div>
            <div
              @mouseover="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              桌面图标
            </div>
            <div
              @mouseover="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              游戏退弹
            </div>
            <div
              @mouseover="setIndex(3)"
              :class="['menu-item', activeIndex == 3 ? 'active' : '']"
            >
              广告弹窗
            </div>
            <div
              @mouseover="setIndex(4)"
              :class="['menu-item', activeIndex == 4 ? 'active' : '']"
            >
              右下角升窗
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiper"
            @slideChange="handleSlideChange"
          >
            <swiper-slide key="0">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="bg-img"
                    src="../../assets/images/product/pcSlide1.png"
                    alt=""
                  />
                  <img
                    class="icon-img"
                    src="../../assets/images/product/pcSlide1-1.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-title">网址导航</p>
                  <p class="text-desc">
                    方便快速找到用户需要的网站入口，包含音乐、视频、小说、游戏、财经等上百个分类的优秀站点，提供最简单便捷的网上导航服务
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="bg-img"
                    src="../../assets/images/product/pcSlide2.png"
                    alt=""
                  />
                  <img
                    class="icon-img"
                    src="../../assets/images/product/pcSlide2-1.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-title">桌面图标</p>
                  <p class="text-desc">
                    是用户看到的第一眼最直接展现在桌面上的图标，它的受众面广、冲击力强，合理利用桌面广告位资源的同时也便捷了用户的上网使用
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="bg-img"
                    src="../../assets/images/product/pcSlide3.png"
                    alt=""
                  />
                  <img
                    class="icon-img"
                    src="../../assets/images/product/pcSlide3-1.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-title">游戏退弹</p>
                  <p class="text-desc">
                    在网民退出游戏客户端时，自动弹出的图片、Flash等形式的广告，网民对此类广告无所谓喜好或厌恶
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="bg-img"
                    src="../../assets/images/product/pcSlide4.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-title">广告弹窗</p>
                  <p class="text-desc">
                    用户打开网站后会自动弹出的广告，无论点击还是不点击都会出现在用户的面前，具有高曝光性
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="4">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="bg-img"
                    src="../../assets/images/product/pcSlide5.png"
                    alt=""
                  />
                  <img
                    class="icon-img"
                    src="../../assets/images/product/pcSlide5-1.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-title">右下角升窗</p>
                  <p class="text-desc">
                    打开指定游戏进程后，从右下角升出的广告，对正常运营及玩家上网不产生任何负面作用
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">移动APP</h2>
        </div>
        <div class="tabs-row">
          <div
            :class="['tabs-item', activeIndex == 0 ? 'active' : '']"
            @click="setIndex(0)"
          >
            <span>网址导航</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 1 ? 'active' : '']"
            @click="setIndex(1)"
          >
            <span>桌面图标</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 2 ? 'active' : '']"
            @click="setIndex(2)"
          >
            <span>游戏退弹</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 3 ? 'active' : '']"
            @click="setIndex(3)"
          >
            <span>广告弹窗</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 4 ? 'active' : '']"
            @click="setIndex(4)"
          >
            <span>右下角升窗</span>
          </div>
        </div>
        <div class="m-swiper-main">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            @slideChange="handleSlideChange"
          >
            <swiper-slide key="0">
              <div class="img-bar">
                <img
                  class="icon-img"
                  src="../../assets/images/product/rectangle.png"
                  alt=""
                />
                <img
                  class="banner-img"
                  src="../../assets/images/product/pcSlide1.png"
                  alt=""
                />
              </div>
              <div class="content-item">
                <p class="text-1">电商类</p>
                <p class="text-2">
                  在云袭电商场景下全方位为商家提供生意服务，提升用户活跃、下单、购买商品等行为。
                </p>
                <p class="text-3">
                  【品牌推广】【商品推广】【搜索广告】【定向投放】
                </p>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="img-bar">
                <img
                  class="icon-img"
                  src="../../assets/images/product/rectangle.png"
                  alt=""
                />
                <img
                  class="banner-img"
                  src="../../assets/images/product/pcSlide2.png"
                  alt=""
                />
              </div>
              <div class="content-item">
                <p class="text-1">APP应用&游戏</p>
                <p class="text-2">满足客户激活下载转化类的营销需求。</p>
                <p class="text-3">
                  【社交媒体】【应用商店】【精准投放】【数据分析】
                </p>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="img-bar">
                <img
                  class="icon-img"
                  src="../../assets/images/product/rectangle.png"
                  alt=""
                />
                <img
                  class="banner-img"
                  src="../../assets/images/product/pcSlide3.png"
                  alt=""
                />
              </div>
              <div class="content-item">
                <p class="text-1">金融</p>
                <p class="text-2">帮助金融机构拓展新客户，扩大市场规模。</p>
                <p class="text-3">【线索留资】【品牌建设】【精准营销】</p>
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <div class="img-bar">
                <img
                  class="icon-img"
                  src="../../assets/images/product/rectangle.png"
                  alt=""
                />
                <img
                  class="banner-img"
                  src="../../assets/images/product/pcSlide4.png"
                  alt=""
                />
              </div>
              <div class="content-item">
                <p class="text-1">运动健康</p>
                <p class="text-2">
                  旗下产品“月野兔”有丰富的场馆资源和C端用户，可以为健身运动行业客户提供全方位解决方案。
                </p>
                <p class="text-3">【全方位服务】【线上线下一体化】</p>
              </div>
            </swiper-slide>
            <swiper-slide key="4">
              <div class="img-bar">
                <img
                  class="icon-img"
                  src="../../assets/images/product/rectangle.png"
                  alt=""
                />
                <img
                  class="banner-img"
                  src="../../assets/images/product/pcSlide5.png"
                  alt=""
                />
              </div>
              <div class="content-item">
                <p class="text-1">运动健康</p>
                <p class="text-2">
                  旗下产品“月野兔”有丰富的场馆资源和C端用户，可以为健身运动行业客户提供全方位解决方案。
                </p>
                <p class="text-3">【全方位服务】【线上线下一体化】</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const activeIndex = ref(0);
const swiperInstance = ref();
const swiperInstanceM = ref();

const handleSlideChange = (opt) => {
  activeIndex.value = opt.activeIndex;
};

function setIndex(index) {
  activeIndex.value = index;
  swiperInstance.value?.slideTo(index);
  swiperInstanceM.value?.slideTo(index);
}

function onSwiperM(swiper) {
  swiperInstanceM.value = swiper;
}

function onSwiper(swiper) {
  swiperInstance.value = swiper;
}
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .pc {
    display: none !important;
  }
  .mobile {
    width: 100%;
    display: block !important;
  }
}
.access-bar {
  width: 100%;
  padding-top: 84px;
  background: rgba(255, 255, 255, 0.3);
  .title-bar {
    min-width: 1200px;
    text-align: center;
    .access-title {
      font-family: Source Han Sans CN;
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
  }
  .menu-bar {
    width: 1200px;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 16px auto 43px;
    .menu {
      width: 600px;
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .menu-item {
        color: #666666;
        width: 112px;
        height: 40px;
        line-height: 40px;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 2px;
        cursor: pointer;
      }
      .active {
        color: #e65e24;
        border-radius: 2px;
        opacity: 1;
        font-weight: 600;
        &::after {
          content: "";
          position: absolute;
          bottom: 0px;
          display: block;
          z-index: 1;
          width: 32px;
          height: 3px;
          background: #e65e24;
        }
      }
    }
  }
  .slide-bar {
    width: 1200px;
    text-align: center;
    margin: 14px auto;
    .swiper {
      width: 100%;
      .slide-item {
        width: 100%;
        display: flex;
        padding: 100px;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.06);
        .slide-text {
          width: 400px;
          padding-left: 50px;
          .text-title {
            font-family: Source Han Sans CN;
            font-size: 26px;
            font-weight: bold;
            line-height: 26px;
            color: #222222;
            text-align: left;
          }
          .text-desc {
            font-family: 思源黑体;
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            color: #222222;
            text-align: left;
            margin-top: 14px;
          }
        }
        .img-bar {
          position: relative;
          width: 514px;
          height: 290px;
          .bg-img {
            width: 100%;
            height: 100%;
          }
          .icon-img {
            position: absolute;
            left: 50%;
            top: -50px;
            width: 247px;
            height: 247px;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
.mobile {
  display: none;
  padding-top: 47px;
  width: 100%;
  height: 640px;
  background: #f8f8f8;
  .m-solution-bar {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    .title-bar {
      width: 100%;
      text-align: center;
      .solution-title {
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: 900;
        line-height: 38px;
        text-align: center;
        color: #222222;
      }
    }
    .tabs-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 55px;
      white-space: nowrap;
      .tabs-item {
        display: inline-block;
        width: 100px;
        height: 50px;
        padding: 3px;
        display: flex;
        line-height: 50px;
        text-align: center;
        color: #222222;
        cursor: pointer;
        font-size: 14px;
        box-sizing: border-box;
        img {
          width: 45px;
          height: 45px;
        }
      }
      .active {
        color: #e65e24;
        border-bottom: 3px solid #e65e24;
      }
    }
    .m-swiper-main {
      width: 100%;
      .swiper {
        width: 100%;
        display: flex;
        flex-direction: column;
        .img-bar {
          position: relative;
          width: 100%;
          padding: 25px 0;
          .banner-img {
            width: 100%;
            height: 184px;
          }
          .icon-img {
            position: absolute;
            left: 10px;
            top: 0px;
            width: 58px;
            height: 114px;
            z-index: -1;
          }
        }
        .content-item {
          padding: 14px 17px 21px;
          .text-1 {
            font-family: Source Han Sans CN;
            font-size: 18px;
            font-weight: bold;
            line-height: 25.99px;
            color: #222222;
            margin-bottom: 10px;
          }
          .text-2 {
            font-family: 思源黑体;
            font-size: 14px;
            font-weight: normal;
            color: #666666;
            margin-bottom: 13px;
          }
          .text-3 {
            font-family: 思源黑体;
            font-size: 14px;
            font-weight: normal;
            color: #222222;
          }
        }
      }
    }
  }
}
</style>
