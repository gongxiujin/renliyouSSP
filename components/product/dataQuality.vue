<template>
  <div style="width: 100%">
    <!-- 多样化的接入方式 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">全方位保证服务质量</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              @mouseover="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              科技领先
            </div>
            <div
              @mouseover="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              个性化
            </div>
            <div
              @mouseover="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              安全可靠
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
                <div class="item-left">
                  <img
                    class="banner-img"
                    src="../../assets/images/product/dataService2-1.png"
                    alt=""
                  />
                </div>
                <div class="item-text">
                  我们采用最先进的技术手段和最新的算法，确保数据收集和分析的准确性和精度。
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <div class="item-left">
                  <img
                    class="banner-img"
                    src="../../assets/images/product/dataService2-2.png"
                    alt=""
                  />
                </div>
                <div class="item-text">
                  我们的系统可以根据不同企业的需求和特点进行个性化的定制，提供更加精细化的服务。
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <div class="item-left">
                  <img
                    class="banner-img"
                    src="../../assets/images/product/dataService2-3.png"
                    alt=""
                  />
                </div>
                <div class="item-text">
                  我们的系统非常注重数据安全，采取严格的措施保护客户的数据隐私。
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-access-bar">
        <div class="title-bar">
          <h2 class="access-title">全方位保证服务质量</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div @click="setIndex(0)" class="menu-item">
              <p :class="{ active: activeIndex == 0 }">科技领先</p>
            </div>
            <div @click="setIndex(1)" class="menu-item">
              <p :class="{ active: activeIndex == 1 }">个性化</p>
            </div>
            <div @click="setIndex(2)" class="menu-item">
              <p :class="{ active: activeIndex == 2 }">安全可靠</p>
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
                <div class="img-bar">
                  <img
                    class="banner-img"
                    src="../../assets/images/product/dataService2-1.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-desc">
                    收集各类广告投放的数据，监测用户的行为、收集竞争者的数据。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="banner-img"
                    src="../../assets/images/product/dataService2-2.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-desc">
                    用最先进的算法对广告投放过程中的数据进行分析和挖掘，寻找其中的规律与趋势，为决策提供科学的依据。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="banner-img"
                    src="../../assets/images/product/dataService1-3.png"
                    alt=""
                  />
                </div>
                <div class="slide-text">
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
                  src="../../assets/images/product/dataService2-3.png"
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
  background: #f8f8f8;
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
    min-width: 1200px;
    text-align: center;
    margin: 38px auto 0;
    padding-bottom: 100px;
    .swiper {
      width: 100%;
      .slide-item {
        width: 100%;
        height: 360px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0px 0px 90px 0px rgba(208, 208, 208, 0.5);
        border-bottom-left-radius: 15px;
        .item-left {
          position: relative;
          width: 574px;
          height: 100%;
          border-bottom: 8px solid #fa4b00;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom-left-radius: 15px;
          .banner-img {
            width: 401px;
            height: 288px;
          }
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            border-top: 50px solid #fa4b00;
            border-left: 40px solid transparent;
            border-bottom: 50px solid transparent;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 0;
            border-top: 50px solid transparent;
            border-right: 40px solid transparent;
            border-bottom: 50px solid #fa4b00;
            border-bottom-left-radius: 8px;
          }
        }
        .item-text {
          width: 320px;
          margin: 0 auto;
          font-family: 思源黑体;
          font-size: 16px;
          color: #777777;
          text-align: left;
        }
      }
    }
  }
}
.mobile {
  display: none;
  height: 548px;
  padding-top: 47px;
  background: #f8f8f8;
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
        color: #222222;
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
          color: #666666;
          line-height: 1.5rem;
          text-align: center;
          font-weight: 400;
          font-size: 14px;
          cursor: pointer;
        }
        .active {
          color: #222222;
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
      padding: 0 30px;
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
          .slide-text {
            width: 100%;
            padding: 0 33px 30px;
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
          .img-bar {
            position: relative;
            width: 100%;
            height: 164px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            border-bottom: 4px solid #fa4b00;
            border-top-right-radius: 10px;
            .banner-img {
              width: 196px;
              height: 141px;
              margin-bottom: 20px;
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              width: 0;
              height: 0;
              border-top: 50px solid #fa4b00;
              border-left: 40px solid transparent;
              border-bottom: 50px solid transparent;
              border-top-right-radius: 10px;
            }
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 0;
              border-top: 50px solid transparent;
              border-right: 40px solid transparent;
              border-bottom: 50px solid #fa4b00;
            }
          }
        }
      }
    }
  }
}
</style>
