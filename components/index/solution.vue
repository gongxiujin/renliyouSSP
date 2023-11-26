<template>
  <div class="solution-main">
    <!-- 专业的解决方案 -->
    <div class="pc">
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
          <p class="solution-desc">{{ $t(`${path}.text`) }}</p>
        </div>
        <div class="container">
          <div class="tabs">
            <img
              class="bgImg"
              :src="$t(`${itemPath}[${activeIndex}].iconBg`)"
              :alt="$t(`${itemPath}[${activeIndex}].title`)"
            />
            <div v-for="(item, index) in $tm(`${path}.content`)" :key="index"
              :class="['tabs-item', activeIndex == index ? 'active' : '']"
              @mouseover="handleMouseOver(index)"
            >
              <img
                v-if="activeIndex == index"
                :src="$t(`${itemPath}[${index}].iconActive`)"
                :alt="$t(`${itemPath}[${index}].title`)"
              />
              <img
                v-else
                :src="$t(`${itemPath}[${index}].icon`)"
                :alt="$t(`${itemPath}[${index}].title`)"
              />
              <span class="tab-title">{{ $t(`${itemPath}[${index}].title`) }}</span>
            </div>
          </div>
          <div class="content">
            <div class="content-item" >
              <p class="text-1">{{$t(`${itemPath}[${activeIndex}].title`)}}</p>
              <p class="text-2">
                {{$t(`${itemPath}[${activeIndex}].text`) }}
              </p>
              <p class="text-3">
                {{ $t(`${itemPath}[${activeIndex}].light`) }}
              </p>
            </div>
          </div>
          <div class="swiper-main">
            <swiper class="swiper"
            :effect="'coverflow'"
            :speed="600"
            :modules="[EffectCoverflow]"
            :coverflowEffect="{
              rotate: 5,
              depth: 10,
              modifier: 2.5,
              stretch: '10%'
            }"
            :slidesPerView="1.04"
            @swiper="onSwiper"
            >
            <template v-for="(item, index) in $tm(`${path}.content`)" :key="index">
              <swiper-slide :style="index === $tm(`${path}.content`).length - 1 ? 'left: -11%' : ''">
                <img
                  class="banner-img"
                  :src="$t(`${itemPath}[${index}].image`)"
                  :alt="$t(`${itemPath}[${index}].title`)"
                />
              </swiper-slide>
            </template>

            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
          <p class="solution-desc">{{ $t(`${path}.text`) }}</p>
        </div>
        <div class="tabs-row">
          <div v-for="(item, index) in $tm(`${path}.content`)" :key="index"
            :class="['tabs-item', activeIndex == index ? 'active' : '']"
            @click="handleMouseOver(index)"
          >
            <img
              v-if="activeIndex == index"
              :src="$t(`${itemPath}[${index}].iconActive`)"
              :alt="$t(`${itemPath}[${index}].title`)"
            />
            <img
              v-else
              :src="$t(`${itemPath}[${index}].icon`)"
              alt=""
            />
            <span class="tab-title normal-text">{{ $t(`${itemPath}[${index}].title`) }}</span>
          </div>
        </div>
        <div class="m-swiper-main">
          <swiper
          class="swiper"

          @swiper="onSwiperM"
          @slideChange="handleSlideChange">
            <swiper-slide v-for="(item, index) in $tm(`${path}.content`)" :key="index">
              <img
                class="banner-img"
                :src="$t(`${itemPath}[${index}].mbimage`)"
                alt=""
              />
              <div class="content-item">
                <p class="text-1 bold-text">{{ $t(`${itemPath}[${index}].title`) }}</p>
                <p class="text-2 normal-text">
                  {{ $t(`${itemPath}[${index}].text`) }}
                </p>
                <p class="text-3 normal-text">
                  {{ $t(`${itemPath}[${index}].light`) }}
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
import 'swiper/css/effect-coverflow';
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper";

const path = ref("home.solution");
const itemPath = "home.solution.content";
const activeIndex = ref(0);
const swiperInstance = ref();
const swiperInstanceM = ref();

function handleMouseOver(index) {
  activeIndex.value = index;
  swiperInstance.value?.slideTo(index);
  swiperInstanceM.value?.slideTo(index);
}

const handleSlideChange = (opt) => {
  activeIndex.value = opt.activeIndex;
};

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
    display: block !important;
  }
}
.solution-main {
    width: 100%;
}
.pc {
  position: relative;
  width: 100%;
  height: 867px;
  .solutionEdge2 {
    position: absolute;
    left: 0;
    top: 32px;
    width: 166.14px;
    height: 173.55px;
  }
  .solutionEdge1 {
    position: absolute;
    left: 0;
    top: 458px;
    width: 58.05px;
    height: 114.41px;
  }
  .solutionEdge3 {
    position: absolute;
    top: 268px;
    right: 0;
    width: 166.14px;
    height: 173.55px;
  }
}
.solution-bar {
  width: 100%;
  height: 100%;
  padding-top: 84px;
  .title-bar {
    min-width: 1200px;
    text-align: center;
    display: flex;
    align-content: space-around;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    .solution-title {
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
    .solution-desc {
      margin-top: 18px;
      width: 600px;
      font-size: 16px;
      font-weight: normal;
      line-height: 24px;
      color: #777777;
    }
  }
  .container {
    width: 1148px;
    margin: 64px auto 0;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    display: flex;
    position: relative;
    .tabs {
      position: relative;
      min-width: 172px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      .bgImg {
        position: absolute;
        left: -40px;
        top: -160px;
        width: 310px;
        height: 312px;
        max-width: none;
      }
      .tabs-item {
        width: 100%;
        height: 123px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #222222;
        background: #f7f6f6;
        cursor: pointer;
        z-index: 10;
        img {
          width: 61px;
          height: 62px;
        }
        .tab-title{
          font-family: SourceHans-normal;
          font-size: 16px;
        }
      }
      .active {
        color: #e65e24;
        background-color: #ffffff;
      }
    }
    .content {
      width: 100%;
      background: #fff;
      height: 476px;
      margin: 0 auto;
      padding: 64px;
      position: relative;
      .content-item {
        padding-top: 60px;
        .text-1 {

          font-size: 26px;
          font-weight: bold;
          line-height: 25.99px;
          color: #222222;
          margin-bottom: 29px;
        }
        .text-2 {

          font-size: 16px;
          width: 520px;
          font-weight: normal;
          color: #666666;
          margin-bottom: 13px;
        }
        .text-3 {

          font-size: 16px;
          font-weight: normal;
          color: #222222;
        }
      }
    }
    .swiper-main {
      position: absolute;
      bottom: 0px;
      right: -50px;
      height: 516px;
      width: 283px;
      .swiper {
        width: 100%;
        height: 100%;
        transform: skew(-8deg);
        .banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-slide {
          left: -1.5%;
          &.swiper-slide-active{
            opacity: 1;
          }
          &.swiper-slide-next {
            opacity: .1;
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
    width: 335px;
    height: 100%;
    margin: 0 auto;
    .title-bar {
      width: 100%;
      text-align: center;
      .solution-title {

        font-size: 24px;
        font-weight: 900;
        line-height: 38px;
        text-align: center;
        color: #222222;
      }
      .solution-desc {
        margin-top: 14px;

        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        color: #777777;
      }
    }
    .tabs-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .tabs-item {
        height: 123px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #222222;
        cursor: pointer;
        font-size: 14px;
        img {
          width: 45px;
          height: 45px;
        }
        .tab-title {
          font-size: 14px;
          line-height: 16px;
        }
      }
      .active {
        color: #e65e24;
      }
    }
    .m-swiper-main {
      width: 100%;
      .swiper {
        width: 100%;
        display: flex;
        flex-direction: column;
        .banner-img {
          width: 100%;
          height: 160px;
        }
        .content-item {
          padding: 14px 17px 21px;
          background: #FFFFFF;
          .text-1 {

            font-size: 18px;
            font-weight: bold;
            line-height: 25.99px;
            color: #222222;
            margin-bottom: 10px;
          }
          .text-2 {

            font-size: 14px;
            font-weight: normal;
            color: #666666;
            margin-bottom: 13px;
          }
          .text-3 {

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
