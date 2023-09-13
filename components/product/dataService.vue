<template>
  <div style="width: 100%">
    <!-- 多样化的接入方式 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">全生命周期提供数据服务</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              @mouseover="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              数据收集和监测
            </div>
            <div
              @mouseover="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              数据分析和挖掘
            </div>
            <div
              @mouseover="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              优化策略输出
            </div>
            <div
              @mouseover="setIndex(3)"
              :class="['menu-item', activeIndex == 3 ? 'active' : '']"
            >
              监测和评估
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
                <div class="slide-text">
                  <p class="text-title">数据收集和监测</p>
                  <p class="text-desc">
                    收集各类广告投放的数据，监测用户的行为、收集竞争者的数据。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-1.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">数据分析和挖掘</p>
                  <p class="text-desc">
                    用最先进的算法对广告投放过程中的数据进行分析和挖掘，寻找其中的规律与趋势，为决策提供科学的依据。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-2.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">优化策略输出</p>
                  <p class="text-desc">
                    通过对数据分析的结果，输出一系列针对性的优化策略，如降本增效、改进目标受众等。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-3.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">监测和评估</p>
                  <p class="text-desc">
                    对投放效果进行监测和评估，了解并分析优化策略的实施效果。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-4.png"
                  alt=""
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-access-bar">
        <div class="title-bar">
          <h2 class="access-title">全生命周期提供数据服务</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div @click="setIndex(0)" class="menu-item">
              <p :class="{ active: activeIndex == 0 }">数据收集和监测</p>
            </div>
            <div @click="setIndex(1)" class="menu-item">
              <p :class="{ active: activeIndex == 1 }">数据分析和挖掘</p>
            </div>
            <div @click="setIndex(2)" class="menu-item">
              <p :class="{ active: activeIndex == 2 }">优化策略输出</p>
            </div>
            <div @click="setIndex(3)" class="menu-item">
              <p :class="{ active: activeIndex == 3 }">监测和评估</p>
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            @slideChange="handleSlideChange"
          >
            <swiper-slide key="0">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-1.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">数据收集和监测</p>
                  <p class="text-desc">
                    收集各类广告投放的数据，监测用户的行为、收集竞争者的数据。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-2.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">数据分析和挖掘</p>
                  <p class="text-desc">
                    用最先进的算法对广告投放过程中的数据进行分析和挖掘，寻找其中的规律与趋势，为决策提供科学的依据。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-3.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">优化策略输出</p>
                  <p class="text-desc">
                    通过对数据分析的结果，输出一系列针对性的优化策略，如降本增效、改进目标受众等。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataService1-4.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">监测和评估</p>
                  <p class="text-desc">
                    对投放效果进行监测和评估，了解并分析优化策略的实施效果。
                  </p>
                </div>
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
  background: #ffffff;
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
    border-bottom: 1px solid #d8d8d8;
    margin: 16px auto 0;
    .menu {
      width: 800px;
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .menu-item {
        color: #666666;
        height: 56px;
        line-height: 56px;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 2px;
        cursor: pointer;
      }
      .active {
        border-radius: 2px;
        opacity: 1;
        font-weight: 600;
        font-family: Source Han Sans CN;
        font-size: 18px;
        font-weight: bold;
        color: #222222;
        &::after {
          content: "";
          position: absolute;
          bottom: 0px;
          display: block;
          z-index: 1;
          width: 40px;
          height: 3px;
          background: #e65e24;
        }
      }
    }
  }
  .slide-bar {
    width: 1200px;
    text-align: center;
    margin: 14px auto 0;
    padding-bottom: 100px;
    .swiper {
      width: 100%;
      .slide-item {
        width: 100%;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
            color: #666666;
            text-align: left;
            margin-top: 14px;
          }
        }
        .banner-img {
          width: 497px;
          height: 440px;
        }
      }
    }
  }
}
.mobile {
  display: none;
  height: 548px;
  padding-top: 47px;
  background: #141f29;
  .m-access-bar {
    width: 100%;
    .title-bar {
      width: 100%;
      text-align: center;
      .access-title {
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: 900;
        line-height: 38px;
        text-align: center;
        color: #ffffff;
      }
    }
    .menu-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      .menu {
        width: 100%;
        margin: 16px 20px 0;
        display: flex;
        justify-content: space-between;
        .menu-item {
          position: relative;
          width: 5rem;
          color: #ffffff;
          line-height: 1.5rem;
          text-align: center;
          font-weight: 400;
          font-size: 14px;
          cursor: pointer;
        }
        .active {
          color: #ffffff;
          border-radius: 2px;
          opacity: 1;
          font-weight: 600;
          &::after {
            content: "";
            position: absolute;
            bottom: -6px;
            display: block;
            z-index: 1;
            width: 32px;
            height: 3px;
            left: 50%;
            background: #e65e24;
            transform: translateX(-50%);
          }
        }
      }
    }
    .slide-bar {
      width: 100%;
      text-align: center;
      margin: 20px auto;
      .swiper {
        width: 100%;
        .slide-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 4px;
          margin: 0 16px;
          padding: 17px 0;
          .slide-text {
            width: 100%;
            padding: 0 33px;
            .text-title {
              font-family: Source Han Sans CN;
              font-size: 18px;
              font-weight: bold;
              line-height: 26px;
              color: #222222;
              text-align: left;
            }
            .text-desc {
              font-family: 思源黑体;
              font-size: 14px;
              font-weight: normal;
              line-height: 24px;
              color: #666666;
              text-align: left;
              margin-top: 14px;
            }
          }
          .banner-img {
            width: 212px;
            height: 188px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
