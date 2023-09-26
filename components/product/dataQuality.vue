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
                <div class="item-left">
                  <img
                    class="banner-img"
                    :src="$t(`${path}.content[${index}].image`)"
                    :alt="$t(`${path}.content[${index}].title`)"
                  />
                </div>
                <div class="$t(`${path}.content[${index}]-text normal-text">
                  {{ $t(`${path}.content[${index}].text`) }}
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
          <h2 class="access-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
            v-for="(item, index) in $tm(`${path}.content`)" :key="index"
             @click="setIndex(index)" class="menu-item">
              <p :class="{ active: activeIndex == index }">{{ $t(`${path}.content[${index}].title`) }}</p>
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            @slideChange="handleSlideChange"
          >
            <swiper-slide v-for="(item, index) in $tm(`${path}.content`)" :key="index">
              <div class="slide-item">
                <div class="img-bar">
                  <img
                    class="banner-img"
                    :src="$t(`${path}.content[${index}].image`)"
                    :alt="$t(`${path}.content[${index}].title`)"
                  />
                </div>
                <div class="slide-text">
                  <p class="text-desc">
                    {{ $t(`${path}.content[${index}].text`) }}
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
const path = ref("dataGrowth.dataQuality");

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
  padding-top: 79px;
  background: #f8f8f8;
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
    margin: 0 auto;
    .menu {
      width: 800px;
      display: flex;
      justify-content: space-between;
      margin-top: 51px;
      .menu-item {
        color: #666666;
        height: 38px;
        line-height: 38px;
        font-weight: 400;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 2px;
        cursor: pointer;
      }
      .active {
        font-family: SourceHans-bold;
        opacity: 1;
        font-weight: 600;
        font-size: 18px;
        font-weight: bold;
        color: #222222;
        border-bottom: 3px solid #e65e24;
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
      border-radius: 10px;
      box-shadow: 0px 0px 90px 0px rgba(208, 208, 208, 0.5);
      .slide-item {
        width: 100%;
        height: 360px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        background: #ffffff;
        border-bottom-left-radius: 15px;
        .item-left {
          position: relative;
          width: 561px;
          height: 100%;
          border-bottom: 10px solid #fa4b00;
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
          list-style: 24px;
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
  padding-top: 52px;
  background: #f8f8f8;
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
    .menu-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      .menu {
        width: 315px;
        margin: 16px auto 0;
        display: flex;
        justify-content: space-between;
        .menu-item {
          position: relative;
          width: 5rem;
          height: 48px;
          align-items: center;
          display: flex;
          color: #666666;
          text-align: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          cursor: pointer;
          justify-content: center;
        }
        .active {
          font-family: SourceHans-bold;
          color: #222222;
          border-radius: 2px;
          opacity: 1;
          height: 100%;
          line-height: 48px;
          font-size: 18px;
          font-weight: 600;
          border-bottom: 3px solid #e65e24;
        }
      }
    }
    .slide-bar {
      width: 100%;
      text-align: center;
      margin: 17px auto;
      .swiper {
        width: 300px;
        margin: 0 auto;
        .slide-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 10px;

          .slide-text {
            width: 100%;
            padding: 0 33px 30px;
            .text-desc {

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
