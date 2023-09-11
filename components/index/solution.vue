<template>
  <div class="solution-main">
    <!-- 专业的解决方案 -->
    <div class="pc">
      <img
        class="solutionEdge2"
        src="../../assets/images/index/solutionEdge-2.png"
        alt=""
      />
      <img
        class="solutionEdge1"
        src="../../assets/images/index/solutionEdge-1.png"
        alt=""
      />
      <img
        class="solutionEdge3"
        src="../../assets/images/index/solutionEdge-3.png"
        alt=""
      />
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">专业的解决方案</h2>
          <p class="solution-desc">行业深耕多年，适配不同行业的业务痛点</p>
        </div>
        <div class="container">
          <div class="tabs">
            <img
              v-if="activeIndex == 0"
              class="bgImg"
              src="../../assets/images/index/solutionBg1.png"
              alt=""
            />
            <img
              v-else-if="activeIndex == 1"
              class="bgImg"
              src="../../assets/images/index/solutionBg2.png"
              alt=""
            />
            <img
              v-else-if="activeIndex == 2"
              class="bgImg"
              src="../../assets/images/index/solutionBg1.png"
              alt=""
            />
            <img
              v-else="activeIndex == 3"
              class="bgImg"
              src="../../assets/images/index/solutionBg4.png"
              alt=""
            />
            <div
              :class="['tabs-item', activeIndex == 0 ? 'active' : '']"
              @mouseover="handleMouseOver(0)"
            >
              <img
                v-if="activeIndex == 0"
                src="../../assets/images/index/solutionTabs1Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/index/solutionTabs1.png"
                alt=""
              />
              <span>电商类</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 1 ? 'active' : '']"
              @mouseover="handleMouseOver(1)"
            >
              <img
                v-if="activeIndex == 1"
                src="../../assets/images/index/solutionTabs2Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/index/solutionTabs2.png"
                alt=""
              />
              <span>APP应用&游戏</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 2 ? 'active' : '']"
              @mouseover="handleMouseOver(2)"
            >
              <img
                v-if="activeIndex == 2"
                src="../../assets/images/index/solutionTabs3Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/index/solutionTabs3.png"
                alt=""
              />
              <span>金融</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 3 ? 'active' : '']"
              @mouseover="handleMouseOver(3)"
            >
              <img
                v-if="activeIndex == 3"
                src="../../assets/images/index/solutionTabs4Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/index/solutionTabs4.png"
                alt=""
              />
              <span>运动健康</span>
            </div>
          </div>
          <div class="content">
            <div class="content-item" v-if="activeIndex == 0">
              <p class="text-1">电商类</p>
              <p class="text-2">
                在云袭电商场景下全方位为商家提供生意服务，提升用户活跃、下单、购买商品等行为。
              </p>
              <p class="text-3">
                【品牌推广】【商品推广】【搜索广告】【定向投放】
              </p>
            </div>
            <div class="content-item" v-else-if="activeIndex == 1">
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
            </div>
          </div>
          <div class="swiper-main">
            <swiper class="swiper" @swiper="onSwiper">
              <swiper-slide key="0">
                <img
                  class="banner-img"
                  src="../../assets/images/index/solution-1.png"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide key="1">
                <img
                  class="banner-img"
                  src="../../assets/images/index/solution-2.png"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide key="2">
                <img
                  class="banner-img"
                  src="../../assets/images/index/solution-3.png"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide key="3">
                <img
                  class="banner-img"
                  src="../../assets/images/index/solution-4.png"
                  alt=""
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
          <h2 class="solution-title">专业的解决方案</h2>
          <p class="solution-desc">行业深耕多年，适配不同行业的业务痛点</p>
        </div>
        <div class="tabs-row">
          <div
            :class="['tabs-item', activeIndex == 0 ? 'active' : '']"
            @click="handleMouseOver(0)"
          >
            <img
              v-if="activeIndex == 0"
              src="../../assets/images/index/solutionTabs1Act.png"
              alt=""
            />
            <img
              v-else
              src="../../assets/images/index/solutionTabs1.png"
              alt=""
            />
            <span>电商类</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 1 ? 'active' : '']"
            @click="handleMouseOver(1)"
          >
            <img
              v-if="activeIndex == 1"
              src="../../assets/images/index/solutionTabs2Act.png"
              alt=""
            />
            <img
              v-else
              src="../../assets/images/index/solutionTabs2.png"
              alt=""
            />
            <span>APP应用&游戏</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 2 ? 'active' : '']"
            @click="handleMouseOver(2)"
          >
            <img
              v-if="activeIndex == 2"
              src="../../assets/images/index/solutionTabs3Act.png"
              alt=""
            />
            <img
              v-else
              src="../../assets/images/index/solutionTabs3.png"
              alt=""
            />
            <span>金融</span>
          </div>
          <div
            :class="['tabs-item', activeIndex == 3 ? 'active' : '']"
            @click="handleMouseOver(3)"
          >
            <img
              v-if="activeIndex == 3"
              src="../../assets/images/index/solutionTabs4Act.png"
              alt=""
            />
            <img
              v-else
              src="../../assets/images/index/solutionTabs4.png"
              alt=""
            />
            <span>运动健康</span>
          </div>
        </div>
        <div class="m-swiper-main">
          <swiper class="swiper" @swiper="onSwiperM" @slideChange="handleSlideChange">
            <swiper-slide key="0">
              <img
                class="banner-img"
                src="../../assets/images/index/solutionMBg1.png"
                alt=""
              />
              <div class="content-item">
                <p class="text-1">电商类</p>
                <p class="text-2">
                  在云袭电商场景下全方位为商家提供生意服务，提升用户活跃、下单、购买商品等行为。
                </p>
                <p class="text-3">
                  【品牌推广】【商品推广】【搜索广告】【定向投放】
                </p>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <img
                class="banner-img"
                src="../../assets/images/index/solutionMBg2.png"
                alt=""
              />
              <div class="content-item">
                <p class="text-1">APP应用&游戏</p>
                <p class="text-2">
                    满足客户激活下载转化类的营销需求。
                </p>
                <p class="text-3">
                    【社交媒体】【应用商店】【精准投放】【数据分析】
                </p>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <img
                class="banner-img"
                src="../../assets/images/index/solutionMBg3.png"
                alt=""
              />
              <div class="content-item">
                <p class="text-1">金融</p>
                <p class="text-2">
                    帮助金融机构拓展新客户，扩大市场规模。
                </p>
                <p class="text-3">
                    【线索留资】【品牌建设】【精准营销】
                </p>
              </div>
            </swiper-slide>
            <swiper-slide key="3">
              <img
                class="banner-img"
                src="../../assets/images/index/solutionMBg4.png"
                alt=""
              />
              <div class="content-item">
                <p class="text-1">运动健康</p>
                <p class="text-2">
                    旗下产品“月野兔”有丰富的场馆资源和C端用户，可以为健身运动行业客户提供全方位解决方案。
                </p>
                <p class="text-3">
                    【全方位服务】【线上线下一体化】
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
    background: #ffffff;
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
      font-family: Source Han Sans CN;
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
    .solution-desc {
      margin-top: 14px;
      font-family: Source Han Sans CN;
      font-size: 16px;
      font-weight: normal;
      line-height: 38px;
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
          font-family: Source Han Sans CN;
          font-size: 26px;
          font-weight: bold;
          line-height: 25.99px;
          color: #222222;
          margin-bottom: 29px;
        }
        .text-2 {
          font-family: 思源黑体;
          font-size: 16px;
          font-weight: normal;
          color: #666666;
          margin-bottom: 13px;
        }
        .text-3 {
          font-family: 思源黑体;
          font-size: 16px;
          font-weight: normal;
          color: #222222;
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
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: 900;
        line-height: 38px;
        text-align: center;
        color: #222222;
      }
      .solution-desc {
        margin-top: 14px;
        font-family: Source Han Sans CN;
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
            font-family: Source Han Sans CN;
            font-size: 18px;
            font-weight: bold;
            line-height: 25.99px;
            color: #222222;
            margin-bottom: 10px;
          }
          .text-2 {
            font-family: 思源黑体;
            font-size: 14px;
            font-weight: normal;
            color: #666666;
            margin-bottom: 13px;
          }
          .text-3 {
            font-family: 思源黑体;
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
