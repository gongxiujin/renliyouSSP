<template>
  <div class="solution-main">
    <!-- 专业的解决方案 -->
    <div class="pc">
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ data.title.body.static }}</h2>
          <p class="solution-desc">{{ data.text.body.static }}</p>
        </div>
        <div class="container">
          <div class="tabs">
            <img
              class="bgImg"
              :src="data.content[activeIndex].iconBg.body.static"
              :alt="data.content[activeIndex].title.body.static"
            />
            <div v-for="(item, index) in data.content" :key="index"
              :class="['tabs-item', activeIndex == index ? 'active' : '']"
              @mouseover="handleMouseOver(index)"
            >
              <img
                v-if="activeIndex == index"
                :src="item.iconActive.body.static"
                :alt="item.title.body.static"
              />
              <img
                v-else
                :src="item.icon.body.static"
                :alt="item.title.body.static"
              />
              <span class="tab-title">{{ item.title.body.static }}</span>
            </div>
          </div>
          <div class="content">
            <div class="content-item" >
              <p class="text-1">{{data.content[activeIndex].title.body.static}}</p>
              <p class="text-2">
                {{data.content[activeIndex].text.body.static}}
              </p>
              <p class="text-3">
                {{ data.content[activeIndex].light.body.static }}
              </p>
            </div>
            <!-- <div class="content-item" v-else-if="activeIndex == 1">
              <p class="text-1">APP应用&游戏</p>
              <p class="text-2">满足客户激活下载转化类的营销需求。</p>
              <p class="text-3">
                【社交媒体】【应用商店】【精准投放】【数据分析】
              </p>
            </div>
            <div class="content-item" v-else-if="activeIndex == 2">
              <p class="text-1">金融</p>
              <p class="text-2">帮助金融机构拓展新客户，扩大市场规模。</p>
              <p class="text-3">【线索留资】【品牌建设】【精准营销】</p>
            </div>
            <div class="content-item" v-else>
              <p class="text-1">运动健康</p>
              <p class="text-2">
                旗下产品“月野兔”有丰富的场馆资源和C端用户，可以为健身运动行业客户提供全方位解决方案。
              </p>
              <p class="text-3">【全方位服务】【线上线下一体化】</p>
            </div> -->
          </div>
          <div class="swiper-main">
            <swiper class="swiper" @swiper="onSwiper">
              <swiper-slide v-for="(item, index) in data.content" :key="index">
                <img
                  class="banner-img"
                  :src="item.image.body.static"
                  :alt="item.title.body.static"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ data.title.body.static }}</h2>
          <p class="solution-desc">{{ data.text.body.static }}</p>
        </div>
        <div class="tabs-row">
          <div v-for="(item, index) in data.content" :key="index"
            :class="['tabs-item', activeIndex == index ? 'active' : '']"
            @click="handleMouseOver(index)"
          >
            <img
              v-if="activeIndex == index"
              :src="data.content[index].iconActive.body.static"
              alt=""
            />
            <img
              v-else
              :src="data.content[index].icon.body.static"
              alt=""
            />
            <span class="tab-title normal-text">{{ item.title.body.static }}</span>
          </div>
        </div>
        <div class="m-swiper-main">
          <swiper class="swiper" @swiper="onSwiperM" @slideChange="handleSlideChange">
            <swiper-slide v-for="(item, index) in data.content" :key="index">
              <img
                class="banner-img"
                :src="item.mbimage.body.static"
                alt=""
              />
              <div class="content-item">
                <p class="text-1 bold-text">{{ item.title.body.static }}</p>
                <p class="text-2 normal-text">
                  {{ item.text.body.static }}
                </p>
                <p class="text-3 normal-text">
                  {{ item.light.body.static }}
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
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
const data = ref(tm('home').solution);

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
    .solution-title {
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
    .solution-desc {
      margin-top: 18px;

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
      width: 292px;
      .swiper {
        width: 100%;
        height: 100%;
        transform: skew(-8deg);
        .banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
    width: 100%;
    height: 100%;
    padding: 0 15px;
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
