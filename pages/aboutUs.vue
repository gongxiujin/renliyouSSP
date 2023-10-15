<template>
  <!-- 关于我们 -->
  <div style="position: relative; z-index: 3">
    <div class="banner-top">
      <div class="banner-title">
        <h2 class="title" :style="{ whiteSpace: 'pre-line' }">
          {{ $t(`${bannerPath}.title`) }}
        </h2>
        <p class="text normal-text" :style="{ whiteSpace: 'pre-line' }">
          {{ $t(`${bannerPath}.text`) }}
        </p>
      </div>
    </div>
    <!-- 企业文化 -->
    <div class="pc">
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
          <p class="solution-desc bold-text">{{ $t(`${path}.text`) }}</p>
        </div>
        <div class="container">
          <div
            class="content-item"
            v-for="(item, index) in $tm(`${path}.content`)"
            :key="index"
          >
            <div class="content-round">
              <img
                class="round-img"
                :src="$t(`${itemPath}[${index}].image`)"
                :alt="$t(`${itemPath}[${index}].title`)"
              />
            </div>
            <p class="title bold-text">{{ $t(`${itemPath}[${index}].title`) }}</p>
            <p class="desc normal-text">{{ $t(`${itemPath}[${index}].text`) }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="join-us">
      <img class="bg-img" src="/images/index/joinUsBg.png" alt="" />
      <div class="title-content">
        <h2 class="title heavy-text">{{ $t(`contactUs`) }}</h2>
        <p class="regular-text" :style="{ whiteSpace: 'pre-line' }">{{ $t(`address`) }}</p>
      </div>
    </div>
    <div class="mobile">
      <div class="m-solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ $t(`${path}.title`) }}</h2>
          <p class="solution-desc bold-text">{{ $t(`${path}.text`) }}</p>
        </div>
        <div class="container">
          <div
            class="content-item"
            v-for="(item, index) in $tm(`${path}.content`)"
            :key="index"
          >
            <div class="content-round">
              <img
                class="round-img"
                :src="$t(`${itemPath}[${index}].image`)"
                :alt="$t(`${itemPath}[${index}].title`)"
              />
            </div>
            <p class="title bold-text">{{ $t(`${itemPath}[${index}].title`) }}</p>
            <p class="desc normal-text">{{ $t(`${itemPath}[${index}].text`) }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="m-join-us">
      <img class="bg-img" src="/images/index/joinUsBg.png" alt="" />
      <h2 class="title heavy-text">{{ $t(`contactUs`) }}</h2>
      <p class="normal-text" :style="{ whiteSpace: 'pre-line' }">
        {{ $t(`address`) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { parallaxOffset } from '@/stores'
const { t } = useI18n();
const bannerPath = ref("aboutUs.banner");
const miniBanner = "url(" + t("aboutUs.banner.mbImage") + ")";
const path = ref("aboutUs.solution");
const itemPath = ref("aboutUs.solution.content");
const background = parallaxOffset()
background.height="640px";
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .banner-top {
    min-width: 100% !important;
    background-image: v-bind(miniBanner) !important;
  }
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
  .join-us {
    display: none !important;
  }
  .m-join-us {
    display: flex !important;
  }
}

.layer-parallax .parallax-svg {
  padding-top: 640px!important;
}
.banner-top {
  width: 100%;
  min-width: 1200px;
  height: 544px;
  background-image: url("/images/aboutUs/aboutUsBanner.png");
  background-size: 100% 100%;
  object-fit: cov;
  position: relative;
  .banner-title {
    position: absolute;
    top: 151px;
    left: 21%;
    width: 665px;
    text-align: left;
    color: #222;
    .title {
      font-family: SourceHans-heavy;
      font-size: 36px;
      font-weight: normal;
      line-height: 38px;
    }
    .text {
      margin-top: 43px;
      font-size: 16px;
      font-weight: normal;
      line-height: 24px;
    }
  }
  @media (max-width: $mobile-width) {
    display: flex;
    .banner-title {
      position: relative;
      margin: 163px auto 0;
      width: 300px;
      text-align: left;
      color: #222;
      position: relative;
      left: unset;
      top: unset;
      .title {
        font-size: 32px;
        text-align: center;
        font-weight: normal;
        line-height: 36px;
      }
      .text {
        margin-top: 19px;
        font-size: 14px;
        font-weight: normal;
        line-height: 22px;
      }
    }
  }
}
.pc {
  position: relative;
  width: 100%;
  padding-bottom: 115px;
  .solution-bar {
    width: 100%;
    height: 100%;
    padding-top: 80px;
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
        margin-top: 14px;
        font-size: 16px;
        font-weight: 500;
        line-height: 38px;
        color: #777777;
      }
    }

    .container {
      width: 1200px;
      min-width: 1200px;
      margin: 100px auto 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      .content-item {
        position: relative;
        padding: 54px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 380px;
        height: 248px;
        border-radius: 10px;
        background: linear-gradient(0deg, #f9f9f9 0%, #ffffff 100%);
        box-shadow: 1.5px 2.6px 20px 0px rgba(194, 154, 137, 0.28);
        border-bottom: 10px solid #e65e24;
        .content-round {
          position: absolute;
          top: -59px;
          width: 118px;
          height: 118px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0px 0px 10px 0px rgba(136, 0, 0, 0.15);
          .round-img {
            width: 66px;
            height: 61px;
          }
        }
        .title {
          width: 100%;
          text-align: left;

          font-size: 30px;
          font-weight: bold;
          line-height: 24px;
          color: #222222;
          margin-bottom: 29px;
        }
        .desc {
          width: 100%;
          text-align: left;

          font-size: 18px;
          font-weight: normal;
          line-height: 18px;
          color: #666666;
        }
      }
    }
  }
}
.join-us {
  position: relative;
  z-index: 3;
  width: 100%;
  min-width: 1200px;
  height: 300px;
  .bg-img {
    width: 100%;
    height: 100%;
  }
  .title-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 73px;
    background: rgba(30, 26, 25, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: flex-start;
    .title {
      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      font-weight: normal;
      line-height: 40px;
      text-align: center;
      color: #ffffff;
      letter-spacing: 0.1em;
    }
  }
}
.mobile {
  display: none;
  padding-top: 47px;
  width: 100%;
  padding-bottom: 40px;
  background: #ffffff;
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
    .container {
      width: 100%;
      margin: 100px auto 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-item {
        position: relative;
        padding: 46px 46px 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 320px;
        height: 148px;
        border-radius: 10px;
        background: linear-gradient(0deg, #f9f9f9 0%, #ffffff 100%);
        box-shadow: 1.5px 2.6px 20px 0px rgba(194, 154, 137, 0.28);
        border-bottom: 10px solid #e65e24;
        margin-bottom: 62px;
        .content-round {
          position: absolute;
          top: -40px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0px 0px 10px 0px rgba(136, 0, 0, 0.15);
          .round-img {
            width: 40px;
            height: 40px;
          }
        }
        .title {
          width: 100%;
          text-align: left;

          font-size: 24px;
          font-weight: bold;
          line-height: 24px;
          color: #222222;
          margin-bottom: 15px;
        }
        .desc {
          width: 100%;
          text-align: left;

          font-size: 14px;
          font-weight: normal;
          line-height: 18px;
          color: #666666;
        }
      }
    }
  }
}
.m-join-us {
  display: none;
  position: relative;
  width: 100%;
  height: 300px;
  padding: 60px 0;
  background: rgba(30, 26, 25, 0.85);
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .bg-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  .title {
    font-size: 24px;
    font-weight: 900;
    line-height: 38px;
    color: #ffffff;
    margin-bottom: 6px;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
