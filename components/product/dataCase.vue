<template>
  <div style="width: 100%">
    <!-- 优秀案例分享 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">优秀案例分享</h2>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiper"
            :modules="modules"
            :autoplay="{ delay: 3000 }"
            @slideChange="handleSlideChange"
          >
            <swiper-slide key="0">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataCase1.png"
                  alt=""
                />
                <div class="right-content">
                  <img
                    class="content-icon"
                    src="../../assets/images/product/dataCase3.png"
                    alt=""
                  />
                  <p class="content-title">掌阅</p>
                  <p class="content-desc">
                    掌阅专注于数字阅读，是全球领先的数字阅读平台之一。
                  </p>
                  <p class="content-num">
                    <span class="num">1.6</span>
                    <span class="unit">亿+</span>
                  </p>
                  <p class="content-tips">月活</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataCase2.png"
                  alt=""
                />
                <div class="right-content">
                  <img
                    class="content-icon"
                    src="../../assets/images/product/dataCase4.png"
                    alt=""
                  />
                  <p class="content-title">游民星空</p>
                  <p class="content-desc">
                    游民星空是国内专注单机游戏的综合性娱乐媒体，是大型游戏领域头部游戏社区。
                  </p>
                  <p class="content-num">
                    <span class="num">3000</span>
                    <span class="unit">w+</span>
                  </p>
                  <p class="content-tips">用户</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="banner-progress-bar">
          <div
            @click="setIndex(0)"
            :class="[
              activeIndex == 0 ? 'banner-progress-active' : 'banner-progress',
            ]"
          ></div>
          <div
            @click="setIndex(1)"
            :class="[
              activeIndex == 1 ? 'banner-progress-active' : 'banner-progress',
            ]"
          ></div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-access-bar">
        <div class="title-bar">
          <h2 class="access-title">优秀案例分享</h2>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            :modules="modules"
            :autoplay="{ delay: 3000 }"
            @slideChange="handleSlideChange"
          >
            <swiper-slide key="0">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataCaseM1.png"
                  alt=""
                />
                <div class="right-content">
                  <img
                    class="content-icon"
                    src="../../assets/images/product/dataCase3.png"
                    alt=""
                  />
                  <p class="content-title">掌阅</p>
                  <p class="content-desc">
                    掌阅专注于数字阅读，是全球领先的数字阅读平台之一。
                  </p>
                  <p class="content-num">
                    <span class="num">1.6</span>
                    <span class="unit">亿+</span>
                  </p>
                  <p class="content-tips">月活</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/product/dataCaseM2.png"
                  alt=""
                />
                <div class="right-content">
                  <img
                    class="content-icon"
                    src="../../assets/images/product/dataCase4.png"
                    alt=""
                  />
                  <p class="content-title">游民星空</p>
                  <p class="content-desc">
                    游民星空是国内专注单机游戏的综合性娱乐媒体，是大型游戏领域头部游戏社区。
                  </p>
                  <p class="content-num">
                    <span class="num">3000</span>
                    <span class="unit">w+</span>
                  </p>
                  <p class="content-tips">用户</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="banner-progress-bar">
          <div
            @click="setIndex(0)"
            :class="[
              activeIndex == 0 ? 'banner-progress-active' : 'banner-progress',
            ]"
          ></div>
          <div
            @click="setIndex(1)"
            :class="[
              activeIndex == 1 ? 'banner-progress-active' : 'banner-progress',
            ]"
          ></div>
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
import { Autoplay, Pagination } from "swiper";

const modules = ref([Autoplay, Pagination]);

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
@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.access-bar {
  width: 100%;
  padding-top: 84px;
  background: #ffffff;
  padding-bottom: 140px;
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
  .slide-bar {
    width: 1200px;
    text-align: center;
    margin: 14px auto 0;
    padding-bottom: 100px;
    .swiper {
      width: 100%;
      .slide-item {
        display: flex;
        margin: 0 auto;
        width: 800px;
        height: 360px;
        margin-top: 90px;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
        .banner-img {
          width: 352px;
          height: 360px;
          margin-right: 50px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        .right-content {
          flex: 1;
          padding: 35px 0;
          .content-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 16px;
          }
          .content-title {
            font-family: Source Han Sans CN;
            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-align: left;
            color: #222222;
            margin-bottom: 20px;
          }
          .content-desc {
            font-family: 思源黑体;
            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            text-align: left;
            color: #666666;
            margin-bottom: 57px;
          }
          .content-num {
            font-weight: 500;
            text-align: left;
            color: #e65e24;
            font-family: HarmonyOS Sans SC;
            .num {
              font-size: 32px;
            }
            .unit {
              font-size: 16px;
            }
          }
          .content-tips {
            text-align: left;
            font-family: 思源黑体;
            font-size: 12px;
            font-weight: normal;
            line-height: 20px;
            color: #666666;
          }
        }
      }
    }
  }
  .banner-progress-bar {
    width: 1200px;
    margin: 0 auto;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .banner-progress {
      width: 56px;
      height: 3px;
      margin: 0 8px 0 0;
      background: #c1c1c1;
      opacity: 1;
      border-radius: 0;
      transform: skew(-45deg);
    }
    .banner-progress-active {
      width: 56px;
      height: 3px;
      margin: 0 8px 0 0;
      background: #c1c1c1;
      opacity: 1;
      border-radius: 0;
      transform: skew(-45deg);
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ff0017;
        animation: progress 3.2s linear;
      }
    }
  }
}
.mobile {
  display: none;
  padding-top: 47px;
  background: #ffffff;
  padding-bottom: 50px;
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
    .slide-bar {
      width: 100%;
      text-align: center;
      margin: 20px auto;
      .swiper {
        width: 100%;
        .slide-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          width: 292px;
          height: 420px;
          margin-bottom: 34px;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
          .banner-img {
            width: 100%;
            height: 152px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .right-content {
            flex: 1;
            padding: 35px 16px;
            .content-icon {
              position: absolute;
              left: 24px;
              top: 110px;
              width: 56px;
              height: 56px;
            }
            .content-title {
              font-family: Source Han Sans CN;
              font-size: 20px;
              font-weight: bold;
              line-height: 26px;
              text-align: left;
              color: #222222;
              margin-bottom: 20px;
            }
            .content-desc {
              font-family: 思源黑体;
              font-size: 14px;
              font-weight: normal;
              line-height: 20px;
              text-align: left;
              color: #666666;
              margin-bottom: 57px;
            }
            .content-num {
              font-weight: 500;
              text-align: left;
              color: #e65e24;
              font-family: HarmonyOS Sans SC;
              .num {
                font-size: 32px;
              }
              .unit {
                font-size: 16px;
              }
            }
            .content-tips {
              text-align: left;
              font-family: 思源黑体;
              font-size: 12px;
              font-weight: normal;
              line-height: 20px;
              color: #666666;
            }
          }
        }
      }
    }
    .banner-progress-bar {
      width: 100%;
      margin: 0 auto;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .banner-progress {
        width: 56px;
        height: 3px;
        margin: 0 8px 0 0;
        background: #c1c1c1;
        opacity: 1;
        border-radius: 0;
        transform: skew(-45deg);
      }
      .banner-progress-active {
        width: 56px;
        height: 3px;
        margin: 0 8px 0 0;
        background: #c1c1c1;
        opacity: 1;
        border-radius: 0;
        transform: skew(-45deg);
        cursor: pointer;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ff0017;
          animation: progress 3.2s linear;
        }
      }
    }
  }
}
</style>
