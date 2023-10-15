<template>
  <div class="al-banner">
    <div class="pc">
      <swiper
        class="swiper"
        @swiper="onSwiper"
        @slideChange="handleSlideChange"
        :autoplay="{ delay: 3000 }"
        :modules="modules"
      >
        <swiper-slide v-for="(item, index) in $tm(`${path}.content`)" :key="index">
          <img
            class="banner-img"
            :src="$t(`${itemPath}[${index}].image`)"
            :alt="$t(`${itemPath}[${index}].title`)"
          />
          <div class="banner-title">
            <h2 class="title" :style="{ whiteSpace: 'pre-line' }">
              {{ $t(`${itemPath}[${index}].title`) }}
            </h2>
            <p class="text normal-text">
              {{ $t(`${itemPath}[${index}].text`) }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="banner-progress-bar">
        <div
          v-for="(item, index) in $tm(`${path}.content`)"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            activeIndex == index ? 'banner-progress-active' : 'banner-progress',
          ]"
        ></div>
      </div>
      <!-- 统计 -->
      <div class="statistics-bar">
        <div class="statistics-item" v-for="(item, idx) in $tm(`${path}.info`)" :key="idx">
          <div class="text-[24px] text-[#222222]">{{ $t(`${path}.info[${idx}].title`) }}</div>
          <div class="text-[16px] text-[#666666]">{{ $t(`${path}.info[${idx}].text`) }}</div>
        </div>
      </div>
    </div>
    <div class="mobile relative hidden">
      <swiper class="swiper">
        <swiper-slide key="0">
          <img
            class="banner-img"
            src="/images/index/indexbanner-mini.png"
            alt=""
          />
          <div class="banner-title">
            <h2 class="title" :style="{ whiteSpace: 'pre-line' }">
              {{ $t(`${itemPath}[0].title`) }}
            </h2>
            <p class="text normal-text">
              {{ $t(`${itemPath}[0].text`) }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
      <a class="banner-btn" sr="/">{{ $t("justNow") }}</a>
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

const { path } = defineProps(["path"]);

const itemPath = path+".content";

const activeIndex = ref(0);
const swiperInstance = ref();

const handleSlideChange = (opt) => {
  activeIndex.value = opt.activeIndex;
};

function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

function goToSlide(index) {
  swiperInstance.value?.slideTo(index);
}
</script>
<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .pc {
    display: none !important;
  }
  .mobile {
    position: relative;
    display: block !important;
    height: 714px;
  }
}

.mobile {
  display: none;
}
.pc {
  position: relative;
  height: 544px;
}
.al-banner {
  position: relative;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: relative;
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner-title {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    .title {
      font-size: 60px;
      line-height: 70px;
      font-weight: normal;
      color: #212121;
    }
    .text {
      margin-top: 33px;
      font-size: 16px;
      font-weight: normal;
      line-height: 16px;
      color: #222222;
    }
  }
  @media (max-width: $mobile-width) {
    .banner-title {
      position: absolute;
      top: 429px;
      left: auto;
      width: 280px;
      text-align: left;
      .title {
        font-size: 32px;
        line-height: 36px;
        font-weight: normal;
        text-align: center;
        color: #000;
      }
      .text {
        margin-top: 8px;
        font-size: 12px;
        font-weight: normal;
        line-height: 24px;
        color: #222222;
      }
    }
  }
  .banner-img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.statistics-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-width: 1200px;
  height: 112px;
  background: rgba(233,234,242,0.5);
  backdrop-filter: blur(20px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .statistics-item {
    width: 288px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 16px;
  }
}

.banner-progress-bar {
  position: relative;
  bottom: 138px;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 1200px;
  cursor: pointer;
  margin: 0 auto;
  .banner-progress {
    width: 56px;
    height: 3px;
    margin: 0 8px 0 0;
    background: #fff;
    opacity: 1;
    border-radius: 0;
    transform: skew(-45deg);
  }
  .banner-progress-active {
    width: 56px;
    height: 3px;
    margin: 0 8px 0 0;
    background: #fff;
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
      background-color: #E65E24;
      animation: progress 3.2s linear;
    }
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

.banner-btn {
  position: absolute;
  width: 150px;
  height: 40px;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  background: #f75713;
  color: #ffffff;
  z-index: 10;
}
</style>
