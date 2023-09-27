<template>
  <div style="width: 100%">
    <div class="pc">
      <div class="access-bar">
        <div class="menu-bar">
          <div class="menu">
            <div
              v-for="(item, index) in $tm(`${path}.content`)"
              :key="index"
              @mouseover="setIndex(index)"
              :class="[
                'menu-item normal-text',
                activeIndex == index ? 'active' : '',
              ]"
            >
              {{ $t(`${itemPath}[${index}].title`) }}
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiper"
            @slideChange="handleSlideChange"
          >
            <swiper-slide
              v-for="(item, index) in $tm(`${path}.content`)"
              :key="index"
            >
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="bg-img"
                    :src="$t(`${itemPath}[${index}].image`)"
                    alt=""
                  />
                  <img
                    v-if="
                      $t(`${itemPath}[${index}].icon`) !=
                      `${itemPath}[${index}].icon`
                    "
                    class="icon-img"
                    :src="$t(`${itemPath}[${index}].icon`)"
                    alt=""
                  />
                </div>
                <div class="slide-text">
                  <p class="text-title bold-text">
                    {{ $t(`${itemPath}[${index}].title`) }}
                  </p>
                  <p class="text-desc normal-text">
                    {{ $t(`${itemPath}[${index}].text`) }}
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
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="tabs-row">
          <div
            v-for="(item, index) in $tm(`${path}.content`)"
            :key="index"
            :class="['tabs-item', activeIndex == index ? 'active' : '']"
            @click="setIndex(index)"
          >
            <span>{{ $t(`${itemPath}[${index}].title`) }}</span>
          </div>
        </div>
        <div class="m-swiper-main">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            @slideChange="handleSlideChange"
          >
            <swiper-slide
              v-for="(item, index) in $tm(`${path}.content`)"
              :key="index"
            >
              <div class="img-bar">
                <img
                  class="icon-img"
                  src="/images/product/rectangle.png"
                  alt=""
                />
                <img
                  class="banner-img"
                  :src="$t(`${itemPath}[${index}].image`)"
                  alt=""
                />
              </div>
              <div class="content-item">
                <p class="text-1">
                  {{ $t(`${itemPath}[${index}].title`) }}
                </p>
                <p class="text-2">
                  {{ $t(`${itemPath}[${index}].text`) }}
                </p>
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
const path = ref("pc.pcSlide");
const itemPath = ref("pc.pcSlide.content");

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
        font-weight: 500;
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
    margin: 0 auto;
    padding-bottom: 140px;
    .swiper {
      width: 100%;
      box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.06);
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
          padding-left: 46px;
          .text-title {
            font-size: 32px;
            font-weight: bold;
            line-height: 26px;
            color: #222222;
            text-align: left;
          }
          .text-desc {
            font-size: 16px;
            font-weight: normal;
            line-height: 16px;
            color: #222222;
            text-align: left;
            margin-top: 31px;
          }
        }
        .img-bar {
          position: relative;
          width: 514px;
          height: 290px;
          .bg-img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
          .icon-img {
            position: absolute;
            left: 50%;
            top: -50px;
            border-radius: 50%;
            width: 247px;
            height: 247px;
            transform: translateX(-50%);
            box-shadow: 0px 0px 30px 0px rgba(33, 33, 33, 0.4);
          }
        }
      }
    }
  }
}
.mobile {
  display: none;
  padding-top: 57px;
  width: 100%;
  height: 578px;
  background: #f8f8f8;
  .m-solution-bar {
    width: 100%;
    height: 100%;
    .title-bar {
      margin-bottom: 32px;
      width: 100%;
      text-align: center;
      .solution-title {
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
      margin-bottom: 21px;
      white-space: nowrap;
      .tabs-item {
        display: inline-block;
        justify-content: center;
        width: 100px;
        height: 50px;
        padding: 3px;
        display: flex;
        line-height: 50px;
        text-align: center;
        color: #222222;
        cursor: pointer;
        font-size: 14px;
        font-weight: normal;
        box-sizing: border-box;
        img {
          width: 45px;
          height: 45px;
        }
      }
      .active span {
        font-weight: 500;
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
        .swiper-slide {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
        }

        .img-bar {
          position: relative;
          width: 326px;
          height: 210px;
          padding: 25px 0;

          .banner-img {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0px 4px 40px 0px rgba(153, 153, 153, 0.5);
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
          width: 300px;
          .text-1 {
            margin-top: 28px;
            font-size: 20px;
            font-weight: bold;
            line-height: 25.99px;
            color: #222222;
            line-height: 26px;
            margin-bottom: 13px;
          }
          .text-2 {
            font-size: 14px;
            font-weight: normal;
            color: #666666;
            line-height: 20px;
            margin-bottom: 13px;
          }
        }
      }
    }
  }
}
</style>
