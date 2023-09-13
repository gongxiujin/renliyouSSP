<template>
  <div class="solution-main">
    <!-- 移动APP -->
    <div class="pc">
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">移动APP</h2>
          <p class="solution-desc">丰富的广告样式，满足不同场景需求</p>
        </div>
        <div class="container">
          <div class="tabs">
            <div
              :class="['tabs-item', activeIndex == 0 ? 'active' : '']"
              @mouseover="handleMouseOver(0)"
            >
              <img
                v-if="activeIndex == 0"
                src="../../assets/images/product/appTabs1Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/product/appTabs1.png"
                alt=""
              />
              <span>开屏广告</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 1 ? 'active' : '']"
              @mouseover="handleMouseOver(1)"
            >
              <img
                v-if="activeIndex == 1"
                src="../../assets/images/product/appTabs2Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/product/appTabs2.png"
                alt=""
              />
              <span>信息流广告</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 2 ? 'active' : '']"
              @mouseover="handleMouseOver(2)"
            >
              <img
                v-if="activeIndex == 2"
                src="../../assets/images/product/appTabs3Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/product/appTabs3.png"
                alt=""
              />
              <span>Banner</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 3 ? 'active' : '']"
              @mouseover="handleMouseOver(3)"
            >
              <img
                v-if="activeIndex == 3"
                src="../../assets/images/product/appTabs4Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/product/appTabs4.png"
                alt=""
              />
              <span>插屏广告</span>
            </div>
            <div
              :class="['tabs-item', activeIndex == 4 ? 'active' : '']"
              @mouseover="handleMouseOver(4)"
            >
              <img
                v-if="activeIndex == 4"
                src="../../assets/images/product/appTabs5Act.png"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/product/appTabs5.png"
                alt=""
              />
              <span>激励视频</span>
            </div>
          </div>
          <div class="content">
            <div class="content-item" v-if="activeIndex == 0">
              <img src="../../assets/images/product/appPhone1.png" alt="" />
              <div class="content-text">
                <p class="text-1">开屏广告</p>
                <p class="text-2">
                  启动页广告，出现在APP启动加载时，
                  将广告图片或视频展示固定时间（一般为5s-15s），展示完毕后自动关闭并进入APP主页面。抢占应用开启的“黄金5秒”，用户关注度较高。
                </p>
              </div>
            </div>
            <div class="content-item" v-else-if="activeIndex == 1">
              <img src="../../assets/images/product/appPhone1.png" alt="" />
              <div class="content-text">
                <p class="text-1">信息流广告</p>
                <p class="text-2">
                  在用户浏览阅读APP的推荐列表页、文章详情页、视频详情页中的原生图文及视频广告
                </p>
              </div>
            </div>
            <div class="content-item" v-else-if="activeIndex == 2">
              <img src="../../assets/images/product/appPhone1.png" alt="" />
              <div class="content-text">
                <p class="text-1">Banner</p>
                <p class="text-2">
                  固定于app顶部、中部、底部、或其他位置,横向贯穿整个app页面，高曝光率，目标受众广泛，易于操作，效果可持续优化。
                </p>
              </div>
            </div>
            <div class="content-item" v-else-if="activeIndex == 3">
              <img src="../../assets/images/product/appPhone1.png" alt="" />
              <div class="content-text">
                <p class="text-1">插屏广告</p>
                <p class="text-2">
                  触发式广告，在用户做出相应的操作（如开启、暂停、过
                  关、跳转、退出）后，弹出的以图片、视频等为表现形式
                  的半屏或全屏广告。曝光度高，视觉冲击力强。
                </p>
              </div>
            </div>
            <div class="content-item" v-else>
              <img src="../../assets/images/product/appPhone1.png" alt="" />
              <div class="content-text">
                <p class="text-1">激励视频</p>
                <p class="text-2">
                  深度适配流量APP原生模式的15-30秒全屏视频广告
                  用户可以选择观看视频广告来换区游戏或应用内奖励。
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
          <h2 class="solution-title">专业的解决方案</h2>
          <p class="solution-desc">行业深耕多年，适配不同行业的业务痛点</p>
        </div>
        <div class="m-swiper-main">
          <swiper
            class="swiper"
            @swiper="onSwiperM"
            @slideChange="slideChange"
            :centered-slides="true"
            :slides-per-view="1.3"
            :space-between="0"
          >
            <swiper-slide key="0">
                <img
                    class="banner-img"
                    src="../../assets/images/product/appPhone1.png"
                    alt=""
                />
            </swiper-slide>
            <swiper-slide key="1">
              <img
                class="banner-img"
                src="../../assets/images/product/appPhone1.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide key="2">
              <img
                class="banner-img"
                src="../../assets/images/product/appPhone1.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide key="3">
              <img
                class="banner-img"
                src="../../assets/images/product/appPhone1.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide key="4">
              <img
                class="banner-img"
                src="../../assets/images/product/appPhone1.png"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="bottom-content">
            <div class="content-item" v-if="activeIndex==0">
                <p class="text-1">开屏广告</p>
                <p class="text-2">
                    启动页广告，出现在APP启动加载时， 将广告图片或视频展示固定时间（一般为5s-15s），
                    展示完毕后自动关闭并进入APP主页面。抢占应用开启的“黄金5秒”，用户关注度较高。
                </p>
              </div>
              <div class="content-item" v-else-if="activeIndex==1">
                <p class="text-1">信息流广告</p>
                <p class="text-2">在用户浏览阅读APP的推荐列表页、文章详情页、视频详情页中的原生图文及视频广告。</p>
              </div>
              <div class="content-item" v-else-if="activeIndex==2">
                <p class="text-1">Banner</p>
                <p class="text-2">在用户浏览阅读APP的推荐列表页、文章详情页、视频详情页中的原生图文及视频广告。</p>
              </div>
              <div class="content-item" v-else-if="activeIndex==3">
                <p class="text-1">插屏广告</p>
                <p class="text-2">触发式广告，在用户做出相应的操作（如开启、暂停、过关、跳转、退出）后，弹出的以图片、视频等为表现形式的半屏或全屏广告。曝光度高，视觉冲击力强。</p>
              </div>
              <div class="content-item" v-else-if="activeIndex==4">
                <p class="text-1">激励视频</p>
                <p class="text-2">深度适配流量APP原生模式的15-30秒全屏视频广告，用户可以选择观看视频广告来换取应用或游戏内的奖励。</p>
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

function slideChange(swiper) {
    // 获取当前活动Slide的索引
    const index = swiper.activeIndex;
    const length = swiper.slides.length
    activeIndex.value = index
    swiper.slides[index].style.transform = "scale(1)";
    // 根据索引判断是否为中间Slide
    if (index > 0) {
        if (length - 1 > index) {
            swiper.slides[index-1].style.transform = "scale(0.9)";
            swiper.slides[index+1].style.transform = "scale(0.9)";
        } else {
            swiper.slides[index-1].style.transform = "scale(0.9)";
        }

    } else {
        swiper.slides[index+1].style.transform = "scale(0.9)";
    }
}

function onSwiperM(swiper) {
  swiperInstanceM.value = swiper;
  const index = swiper.activeIndex;
  if (swiper.slides[index]) {
    swiper.slides[index].style.transform = "scale(1)";
  }
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
    width: 1200px;
    min-width: 1200px;
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
        height: 123px;
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
        width: 100%;
        padding: 0 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          width: 233px;
          height: 467px;
        }
        .content-text {
          width: 400px;
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
    .m-swiper-main {
      width: 100%;
      margin: 25px auto 40px;
      .swiper {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #f8f8f8;
        .banner-img {
          width: 18rem;
          height: 467px;
        //   object-fit: contain;
        }
      }
    }
    .bottom-content {
        width: 100%;
        .content-item {
          padding: 14px 17px 21px;
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
.swiper-slide {
    transform: scale(0.9);
}
</style>
