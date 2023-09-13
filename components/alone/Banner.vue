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
        <!-- <swiper-slide v-for="(banner,index) in data" :key="index">
				<img :src="banner.image" :title="banner.title" alt="">
			</swiper-slide> -->
        <swiper-slide key="0">
          <img
            class="banner-img"
            src="../../assets/images/index-banner.png"
            alt=""
          />
        </swiper-slide>
        <swiper-slide key="1">
          <img
            class="banner-img"
            src="../../assets/images/index-banner.png"
            alt=""
          />
        </swiper-slide>
      </swiper>
      <div class="banner-progress-bar">
        <div
          @click="goToSlide(0)"
          :class="[
            activeIndex == 0 ? 'banner-progress-active' : 'banner-progress',
          ]"
        ></div>
        <div
          @click="goToSlide(1)"
          :class="[
            activeIndex == 1 ? 'banner-progress-active' : 'banner-progress',
          ]"
        ></div>
      </div>
      <!-- 统计 -->
      <div class="statistics-bar">
        <div class="statistics-item">
          <div class="text-[24px] text-[#222222]">2000+</div>
          <div class="text-[16px] text-[#666666]">活跃APP</div>
        </div>
        <div class="statistics-item">
          <div class="text-[24px] text-[#222222]">5000+</div>
          <div class="text-[16px] text-[#666666]">优质广告主</div>
        </div>
        <div class="statistics-item">
          <div class="text-[24px] text-[#222222]">6亿+</div>
          <div class="text-[16px] text-[#666666]">日均请求次数</div>
        </div>
        <div class="statistics-item">
          <div class="text-[24px] text-[#222222]">3亿+</div>
          <div class="text-[16px] text-[#666666]">月覆盖用户量</div>
        </div>
      </div>
    </div>
    <div class="mobile relative hidden">
      <swiper class="swiper">
        <swiper-slide key="0">
          <img
            class="banner-img"
            src="../../assets/images/index-banner.png"
            alt=""
          />
        </swiper-slide>
      </swiper>
      <a class="banner-btn" sr="/">立即变现</a>
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

const { data } = defineProps(["data"]);

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
  .banner-img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.statistics-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-width: 1200px;
  height: 112px;
  background: hsla(0, 0%, 100%, 0.5);
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
  position: absolute;
  left: 9rem;
  bottom: 138px;
  z-index: 10;
  display: flex;
  align-items: center;
  cursor: pointer;
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
      background-color: #ff0017;
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
