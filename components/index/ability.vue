<template>
  <div style="width: 100%;">
    <!-- 强大的产品能力 -->
    <div class="pc">
      <div class="ability-bar">
        <div class="title-bar">
          <h2 class="ability-title">强大的产品能力</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              @click="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              移动变现
            </div>
            <div
              @click="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              PC变现
            </div>
            <div
              @click="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              数据增长
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper class="swiper" @swiper="onSwiper" @slideChange="handleSlideChange">
            <swiper-slide key="0">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">移动变现</p>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">
                      丰富的广告产品（信息流、开屏、Banner、激励视频等）
                    </div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">高效的接入方式（SDK/API/JS）</div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">严格的风控体系</div>
                  </div>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/ability-1.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">PC变现</p>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">
                      丰富的广告形式（Banner、弹窗广告、对联广告等）
                    </div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">
                      海量的广告资源（游戏、健身、电商、金融等行业）
                    </div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">高效的数据分析</div>
                  </div>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/ability-2.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <div class="slide-text">
                  <p class="text-title">数据增长</p>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">实时监控预估收益</div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">全渠道数据分析</div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">以ROI为核心，提供分析洞察及指导</div>
                  </div>
                </div>
                <img
                  class="banner-img"
                  src="../../assets/images/index/ability-3.png"
                  alt=""
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-ability-bar">
        <div class="title-bar">
          <h2 class="ability-title">多样化的接入方式</h2>
        </div>
        <div class="menu-bar">
          <div class="menu">
            <div
              @click="setIndex(0)"
              :class="['menu-item', activeIndex == 0 ? 'active' : '']"
            >
              移动变现
            </div>
            <div
              @click="setIndex(1)"
              :class="['menu-item', activeIndex == 1 ? 'active' : '']"
            >
              PC变现
            </div>
            <div
              @click="setIndex(2)"
              :class="['menu-item', activeIndex == 2 ? 'active' : '']"
            >
              数据增长
            </div>
          </div>
        </div>
        <div class="slide-bar">
          <swiper class="swiper" @swiper="onSwiperM" @slideChange="handleSlideChange" :centered-slides="true" :slides-per-view="1.2" :space-between="15">
            <swiper-slide key="0">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/ability-1.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">移动变现</p>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">
                      丰富的广告产品（信息流、开屏、Banner、激励视频等）
                    </div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">高效的接入方式（SDK/API/JS）</div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">严格的风控体系</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="1">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/ability-2.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">PC变现</p>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">
                      丰富的广告形式（Banner、弹窗广告、对联广告等）
                    </div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">
                      海量的广告资源（游戏、健身、电商、金融等行业）
                    </div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">高效的数据分析</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide key="2">
              <div class="slide-item">
                <img
                  class="banner-img"
                  src="../../assets/images/index/ability-3.png"
                  alt=""
                />
                <div class="slide-text">
                  <p class="text-title">数据增长</p>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">实时监控预估收益</div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">全渠道数据分析</div>
                  </div>
                  <div class="text-desc">
                    <div class="desc-icon">
                      <img
                        class="icon-img"
                        src="../../assets/images/index/tick.png"
                        alt=""
                      />
                    </div>
                    <div class="desc-text">以ROI为核心，提供分析洞察及指导</div>
                  </div>
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
.ability-bar {
  width: 100%;
  height: 867px;
  padding-top: 84px;
  background: #141e28;
  .title-bar {
    min-width: 1200px;
    text-align: center;
    .ability-title {
      font-family: Source Han Sans CN;
      font-size: 36px;
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
    border-bottom: 1px solid #273542;
    margin: 16px auto 0;
    .menu {
      width: 416px;
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .menu-item {
        color: #fff;
        width: 112px;
        height: 56px;
        line-height: 56px;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          color: #e65e24;
        }
      }
      .active {
        color: #e65e24;
        border-radius: 2px;
        opacity: 1;
        font-weight: 600;
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
    margin: 14px auto;
    .swiper {
      width: 100%;
      .slide-item {
        width: 100%;
        height: 512px;
        margin-top: 34px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        .slide-text {
          width: 50%;
          margin: 0 auto;
          margin-left: 10%;
          .text-title {
            font-family: Source Han Sans CN;
            font-size: 26px;
            font-weight: bold;
            line-height: 26px;
            color: #222222;
            text-align: left;
            margin-bottom: 42px;
          }
          .text-desc {
            display: flex;
            font-family: 思源黑体;
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            color: #222222;
            text-align: left;
            margin-bottom: 38px;
            .desc-icon {
              width: 19.78px;
              height: 19.78px;
              margin-right: 7px;
              background: #fa4b00;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              .icon-img {
                width: 14px;
                height: 9px;
              }
            }
            .desc-text {
              width: 80%;
            }
          }
        }
        .banner-img {
          width: 505px;
          height: 416px;
        }
      }
    }
  }
}
.mobile {
  display: none;
  height: 709px;
  padding-top: 47px;
  background: #141e28;
  .m-ability-bar {
    width: 100%;
    .title-bar {
      width: 100%;
      text-align: center;
      .ability-title {
        font-family: Source Han Sans CN;
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
        margin: 16px 33px 0;
        display: flex;
        justify-content: space-between;
        .menu-item {
          color: #fff;
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
          font-weight: 600;
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
      width: 100%;
      text-align: center;
      margin: 14px 0px;
      .swiper {
        width: 100%;
        .swiper-wrapper {
            padding: 0 20px;
        }
        .slide-item {
          width: 100%;
          padding: 10px 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 462px;
          border-radius: 10px;
          background: #FFFFFF;
          .slide-text {
            width: 100%;
            padding: 15px 30px 0;
            .text-title {
              font-family: Source Han Sans CN;
              font-size: 18px;
              font-weight: bold;
              line-height: 26px;
              color: #222222;
              text-align: left;
            }
            .text-desc {
              font-family: 思源黑体;
              font-size: 14px;
              font-weight: normal;
              line-height: 24px;
              color: #666666;
              text-align: left;
              margin-top: 14px;
              display: flex;
              .desc-icon {
                width: 19.78px;
                height: 19.78px;
                margin-right: 7px;
                background: #fa4b00;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon-img {
                  width: 14px;
                  height: 9px;
                }
              }
              .desc-text {
                width: 100%;
              }
            }
          }
          .banner-img {
            width: 272px;
            height: 223px;
            margin-left: 5rem;
          }
        }
      }
    }
  }
}
</style>
