<template>
  <div style="width: 100%">
    <!-- 优秀案例分享 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">{{ data.title.body.static }}</h2>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiper"
            :modules="modules"
            :autoplay="{ delay: 3000 }"
            @slideChange="handleSlideChange"
          >
            <swiper-slide v-for="(item, index) in data.content" :key="index">
              <div class="slide-item">
                <img
                  class="banner-img"
                  :src="item.image.body.static"
                  :alt="item.title.body.static"
                />
                <div class="right-content">
                  <img
                    class="content-icon"
                    :src="item.icon.body.static"
                    :alt="item.title.body.static"
                  />
                  <p class="content-title bold-text">{{ item.title.body.static }}</p>
                  <p class="content-desc normal-text">
                    {{ item.text.body.static }}
                  </p>
                  <p class="content-num">
                    <span class="num">{{ item.num.body.static }}</span>
                    <span class="unit">{{ item.numunit.body.static }}</span>
                  </p>
                  <p class="content-tips normal-text">{{ item.numtext.body.static }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="banner-progress-bar">
          <div
            v-for="(item, index) in data.content" :key="index"
            @click="setIndex(index)"
            :class="[
              activeIndex == index ? 'banner-progress-active' : 'banner-progress',
            ]"
          ></div>

        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-access-bar">
        <div class="title-bar">
          <h2 class="access-title">{{ data.title.body.static }}</h2>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            :modules="modules"
            :autoplay="{ delay: 3000 }"
            @slideChange="handleSlideChange"
          >
            <swiper-slide v-for="(item, index) in data.content" :key="index">
              <div class="slide-item">
                <img
                  class="banner-img"
                  :src="item.mbImage.body.static"
                  :alt="item.title.body.static"
                />
                <div class="right-content">
                  <img
                    class="content-icon"
                    :src="item.icon.body.static"
                    alt=""
                  />
                  <p class="content-title">{{ item.title.body.static }}</p>
                  <p class="content-desc">
                    {{ item.text.body.static }}
                  </p>
                  <p class="content-num">
                    <span class="num">{{ item.num.body.static }}</span>
                    <span class="unit">{{ item.numunit.body.static }}</span>
                  </p>
                  <p class="content-tips normal-text">{{ item.numtext.body.static }}</p>
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
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
const data = ref(tm('dataGrowth').dataCase);
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
    padding-bottom: 78px;
    .swiper {
      width: 100%;
      .slide-item {
        display: flex;
        margin: 90px auto 30px;
        width: 800px;
        height: 360px;
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

            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-align: left;
            color: #222222;
            margin-bottom: 20px;
          }
          .content-desc {

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
            font-family: HarmonyOS_Sans_SC;

            .num {
              font-size: 32px;
            }
            .unit {
              font-size: 16px;
            }
          }
          .content-tips {
            text-align: left;

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
          justify-content: flex-start;
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
              top: 125px;
              width: 56px;
              height: 56px;
            }
            .content-title {

              font-size: 20px;
              font-weight: bold;
              line-height: 26px;
              text-align: left;
              color: #222222;
              margin-bottom: 8px;
            }
            .content-desc {

              font-size: 14px;
              font-weight: normal;
              line-height: 20px;
              text-align: left;
              color: #666666;
              margin-bottom: 50px;
            }
            .content-num {
              font-family: HarmonyOS_Sans_SC;
              font-weight: 500;
              text-align: left;
              color: #e65e24;

              .num {
                font-size: 32px;
              }
              .unit {
                font-size: 16px;
              }
            }
            .content-tips {
              text-align: left;

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

      }
      .banner-progress-active {
        width: 56px;
        height: 3px;
        margin: 0 8px 0 0;
        background: #c1c1c1;
        opacity: 1;
        border-radius: 0;
        transform: skew(0);
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
