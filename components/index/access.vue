<template>
  <div style="width: 100%;">
    <!-- 多样化的接入方式 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">多样化的接入方式</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              @click="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              SDK
            </div>
            <div
              @click="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              API
            </div>
            <div
              @click="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              JS
            </div>
            <div
              @click="setIndex(3)"
              :class="['menu-item', activeIndex == 3 ? 'active' : '']"
            >
              程序下发
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper class="swiper" @swiper="onSwiper" @slideChange="handleSlideChange">
            <swiper-slide key="0">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">SDK</p>
                  <p class="text-desc">
                    开发者按照开发文档，在自己的应用内嵌入任礼游SSP的SDK，实现广告的最终投放。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-1.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">API</p>
                  <p class="text-desc">
                    在媒体广告位确认情况下，技术人员按照任礼游SSP提供的API对接文档，实现广告的最终投放。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-2.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">JS</p>
                  <p class="text-desc">
                    技术人员将任礼游SSP提供的对应业务代码埋在H5页面，实现广告的最终投放。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-3.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">程序下发</p>
                  <p class="text-desc">
                    将任礼游SSP提供的客户端程序自动下发至商业PC上，保持每次开启即启动客户端程序，实现广告的最终投放。
                  </p>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-4.png"
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
          <h2 class="access-title">多样化的接入方式</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              @click="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              SDK
            </div>
            <div
              @click="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              API
            </div>
            <div
              @click="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              JS
            </div>
            <div
              @click="setIndex(3)"
              :class="['menu-item', activeIndex == 3 ? 'active' : '']"
            >
              程序下发
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper class="swiper" @swiper="onSwiperM" @slideChange="handleSlideChange">
            <swiper-slide key="0">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-1.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">SDK</p>
                  <p class="text-desc">
                    开发者按照开发文档，在自己的应用内嵌入任礼游SSP的SDK，实现广告的最终投放。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-2.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">API</p>
                  <p class="text-desc">
                    在媒体广告位确认情况下，技术人员按照任礼游SSP提供的API对接文档，实现广告的最终投放。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-3.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">JS</p>
                  <p class="text-desc">
                    技术人员将任礼游SSP提供的对应业务代码埋在H5页面，实现广告的最终投放。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/access-4.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">程序下发</p>
                  <p class="text-desc">
                    将任礼游SSP提供的客户端程序自动下发至商业PC上，保持每次开启即启动客户端程序，实现广告的最终投放。
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
  height: 660px;
  padding-top: 84px;
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
      width: 416px;
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .menu-item {
        color: #666666;
        width: 112px;
        height: 56px;
        line-height: 56px;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          color: #e65e24;
        }
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
          width: 505px;
          height: 416px;
        }
      }
    }
  }
}
.mobile {
  display: none;
  height: 548px;
  padding-top: 47px;
  background: #ffffff;
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
        margin: 16px 33px 0;
        display: flex;
        justify-content: space-between;
        .menu-item {
          color: #666666;
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
      width: 100%;
      text-align: center;
      margin: 14px auto;
      .swiper {
        width: 100%;
        .slide-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
            width: 272px;
            height: 223px;
            margin-left: 5rem;
          }
        }
      }
    }
  }
}
</style>
