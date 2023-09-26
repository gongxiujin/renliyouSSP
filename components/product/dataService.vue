<template>
  <div style="width: 100%">
    <!-- 多样化的接入方式 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              v-for="(item, index) in $tm(`${path}.content`)" :key="index"
              @mouseover="setIndex(index)"
              :class="['menu-item', activeIndex == index ? 'active' : '']"
            >
              {{ $t(`${path}.content[${index}].title`) }}
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiper"
            @slideChange="handleSlideChange"
          >
            <swiper-slide v-for="(item, index) in $tm(`${path}.content`)" :key="index">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">{{ $t(`${path}.content[${index}].title`) }}</p>
                  <p class="text-desc">
                    {{ $t(`${path}.content[${index}].text`) }}
                  </p>
                </div>
                <img
                  class="banner-img"
                  :src="$t(`${path}.content[${index}].image`)"
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
          <h2 class="access-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="slide-bar">
          <div class="slide-item" v-for="(item, index) in $tm(`${path}.content`)" :key="index">
            <img
              class="banner-img"
              :src="$t(`${path}.content[${index}].image`)"
              :alt="$t(`${path}.title`)"
            />
            <div class="slide-text">
              <p class="text-title">{{ $t(`${path}.content[${index}].title`) }}</p>
              <p class="text-desc">
                {{ $t(`${path}.content[${index}].text`) }}
              </p>
            </div>
          </div>
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
const path = ref("dataGrowth.dataService");

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
  padding-top: 38px;
  background: #ffffff;
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
    border-bottom: 1px solid #d8d8d8;
    margin: 10px auto 0;
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
    margin: 51px auto 0;
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

            font-size: 26px;
            font-weight: bold;
            line-height: 26px;
            color: #222222;
            text-align: left;
          }
          .text-desc {

            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            color: #666666;
            text-align: left;
            margin-top: 31px;
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
  height: 1575px;
  padding-top: 47px;
  background: #141f29;
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
      height: 1400px;
      text-align: center;
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: center;
      .slide-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 343px;
        height: 338px;
        justify-content: center;
        background: #ffffff;
        border-radius: 4px;
        padding: 17px 0;
        .slide-text {
          width: 300px;
          margin: 0 auto;
          .text-title {

            font-size: 18px;
            font-weight: bold;
            line-height: 26px;
            color: #222222;
            text-align: left;
          }
          .text-desc {

            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            color: #666666;
            text-align: left;
            margin-top: 7px;
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
</style>
