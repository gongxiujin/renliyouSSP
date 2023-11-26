<template>
  <div class="solution-main">
    <!-- 移动APP -->
    <div class="pc">
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
          <p class="solution-desc" :style="$t(`${path}.textStyle`)">
            {{ $t(`${path}.text`) }}
          </p>
        </div>
        <div class="container">
          <div class="tabs">
            <div
              v-for="(item, index) in $tm(`${path}.content`)"
              :key="index"
              :class="['tabs-item', activeIndex == index ? 'active' : '']"
              @mouseover="handleMouseOver(index)"
            >
              <img
                v-if="activeIndex == index"
                :src="$t(`${path}.content[${index}].iconActive`)"
                :alt="$t(`${path}.content[${index}].title`)"
              />
              <img
                v-else
                :src="$t(`${path}.content[${index}].icon`)"
                :alt="$t(`${path}.content[${index}].title`)"
              />
              <span>{{ $t(`${path}.content[${index}].title`) }}</span>
            </div>
          </div>
          <div class="content">
            <div class="content-item">
              <div :class="`content-phone content-${activeIndex}`">
                <img
                  :src="$t(`${path}.content[${activeIndex}].image[${idx}]`)"
                  alt=""
                  v-for="(image, idx) in $tm(`${path}.content[${activeIndex}].image`)"
                  :class="`images-${idx}`"
                  :key="idx"
                  :style="idx == 1 ? {'margin-top': $t(`${path}.content[${activeIndex}].marginTop`)} : ''"
                />
                <img src="/images/product/cross.jpg" :alt="$t(`${path}.content[${activeIndex}].title`)" class="cross up" />
                <img
                  src="/images/product/cross.jpg"
                  alt=""
                  class="cross down"
                />
              </div>

              <div class="content-text">
                <p class="text-1 bold-text">
                  {{ $t(`${path}.content[${activeIndex}].title`) }}
                </p>
                <p class="text-2 normal-text">
                  {{ $t(`${path}.content[${activeIndex}].text`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
          <p class="solution-desc" :style="$t(`${path}.textStyle`)">
            {{ $t(`${path}.text`) }}
          </p>
        </div>
        <div class="m-swiper-main">
          <swiper
            class="swiper"
            :centeredSlides="true"
            :spaceBetween="23"
            :slidesPerView="1.6"
            @swiper="onSwiperM"
            @slideChange="slideChange"

          >
            <swiper-slide v-for="(item, index) in $tm(`${path}.content`)" :key="index">
              <img
                class="banner-img"
                :src="$t(`${path}.content[${index}].image[0]`)"
                :alt="$t(`${path}.content[${index}].title`)"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="bottom-content">
          <div class="content-item">
            <p class="text-1 bold-text">
              {{ $t(`${path}.content[${activeIndex}].title`) }}
            </p>
            <p class="text-2 normal-text">
              {{ $t(`${path}.content[${activeIndex}].text`) }}
            </p>
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
const activeIndex = ref(0);
const swiperInstance = ref();
const swiperInstanceM = ref();

function handleMouseOver(index) {
  activeIndex.value = index;
  swiperInstance.value?.slideTo(index);
}
const props = defineProps(["path", "backgroundColor"]);

function slideChange(swiper) {
  // 获取当前活动Slide的索引
  const index = swiper.activeIndex;
  const length = swiper.slides.length;
  activeIndex.value = index;
}

function onSwiperM(swiper) {
  swiperInstanceM.value = swiper;
  const index = swiper.activeIndex;
  // if (swiper.slides[index]) {
  //   swiper.slides[index].style.transform = "scale(1)";
  // }
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
  background: #ffffff;
}
.pc {
  position: relative;
  width: 100%;
}
.solution-bar {
  width: 100%;
  height: 100%;
  padding-top: 84px;
  padding-bottom: 100px;
  background: #fff;
  .title-bar {
    min-width: 1200px;
    text-align: center;
    .solution-title {
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
    .solution-desc {
      margin: 14px auto 0;
      width: 600px;
      font-size: 16px;
      font-weight: normal;
      line-height: 24px;
      color: #777777;
    }
  }
  .container {
    width: 1200px;
    min-width: 1200px;
    height: 580px;
    margin: 64px auto 0;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    display: flex;
    position: relative;
    .tabs {
      position: relative;
      min-width: 206px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      .tabs-item {
        width: 100%;
        flex: 1;
        padding: 0 27px;
        display: flex;
        align-items: center;
        color: #222222;
        background: #f7f6f6;
        cursor: pointer;
        z-index: 10;
        font-size: 14px;
        img {
          width: 47px;
          height: 47px;
          margin-right: 15px;
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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .content-item {
        position: relative;
        width: 100%;
        height: 412px;
        padding: 0 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .content-phone {
          position: relative;
          width: 331px;
          height: 100%;
          display: flex;
          justify-content: center;
          img.images-0 {
            border: 8px solid #222;
            border-radius: 32px;
            width: 204px;
            height: auto;
            z-index: 4;
            position: relative;
          }
          img.images-1 {
            position: absolute;
            width: 100%;
            z-index: 5;
          }
          img.cross {
            position: absolute;
            width: 185px;
            height: 156px;
            z-index: 3;
            &.up {
              top: 39px;
              left: 38px;
            }
            &.down {
              bottom: 36px;
              right: 38px;
              transform: rotate(180deg);
            }
          }
        }

        .content-text {
          width: 400px;
          .text-1 {
            font-size: 26px;
            font-weight: bold;
            line-height: 25.99px;
            color: #222222;
            margin-bottom: 29px;
          }
          .text-2 {
            font-size: 16px;
            font-weight: normal;
            color: #666666;
            margin-bottom: 13px;
          }
        }
      }
    }
    .swiper-main {
      position: absolute;
      bottom: -16px;
      right: -50px;
      height: 516px;
      width: 292px;
      .swiper {
        width: 100%;
        height: 100%;
        .banner-img {
          width: 100%;
          height: 100%;
          //   object-fit: cover;
        }
      }
    }
  }
}
.mobile {
  display: none;
  padding-top: 47px;
  width: 100%;
  background: v-bind(backgroundColor);
  .m-solution-bar {
    width: 100%;
    height: 100%;
    p, h2{
      width: 300px;
    }
    .title-bar {
      width: 100%;
      text-align: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      .solution-title {
        font-size: 28px;
        font-weight: 900;
        line-height: 38px;
        text-align: center;
        color: #222222;
      }
      .solution-desc {
        margin-top: 8px;

        font-size: 14px;
        font-weight: normal;
        line-height: 16px;
        color: #777777;
      }
    }

    .m-swiper-main {
      width: 100%;
      height: 467px;
      margin: 21px 0;
      .swiper {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: v-bind(backgroundColor);

        .swiper-slide {
          justify-content: center;
          display: flex;
          scale: 0.9;
          &.swiper-slide-active{
            scale: 1;
          }
          .banner-img {
            border-radius: 35px;
            border: 12px solid #222;
            height: 467px;
          }
        }
      }
    }
    .bottom-content {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .content-item {
        padding: 14px 17px 21px;
        .text-1 {
          font-size: 20px;
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

</style>
