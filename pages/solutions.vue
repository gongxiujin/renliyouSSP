<template>
  <div style="position: relative;z-index: 3;">
    <!-- 优秀案例及解决方案 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="slide-bar">
          <div class="slide-item" v-for="(item, index) in $tm(`${path}.content`)" :key="index">
            <div class="text-bar" :style="{ order: index % 2 !== 0 ? 1 : '' }">
              <p class="text-title bold-text">{{ $t(`${path}.content[${index}].slide.title`) }}</p>
              <p class="text-desc normal-text">
                {{ $t(`${path}.content[${index}].slide.text`) }}
              </p>
            </div>
            <div class="content-bar">
              <img
                class="banner-img"
                :src="$t(`${path}.content[${index}].content.image`)"
                :alt="$t(`${path}.content[${index}].content.title`)"
              />
              <div class="right-content">
                <img
                  class="content-icon"
                  :src="$t(`${path}.content[${index}].content.icon`)"
                  :alt="$t(`${path}.content[${index}].content.title`)"
                />
                <p class="content-title bold-text">{{ $t(`${path}.content[${index}].content.title`) }}</p>
                <p class="content-desc normal-text">{{ $t(`${path}.content[${index}].content.text`) }}</p>
                <p class="content-num harmony-text">
                  <span class="num">{{ $t(`${path}.content[${index}].content.num`) }}</span>
                  <span class="unit">{{ $t(`${path}.content[${index}].content.numUnit`) }}</span>
                </p>
                <p class="content-tips">{{ $t(`${path}.content[${index}].content.numtext`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-access-bar">
        <div class="title-bar">
          <h2 class="access-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="slide-bar">
          <div class="slide-item" v-for="(item, index) in $tm(`${path}.content`)" :key="index">
            <div class="image-content">
              <img
              class="banner-img"
              :src="$t(`${path}.content[${index}].content.mbimage`)"
              :alt="$t(`${path}.content[${index}].content.title`)"
            />
            <div class="right-content">
              <img
                class="content-icon"
                :src="$t(`${path}.content[${index}].content.icon`)"
                  :alt="$t(`${path}.content[${index}].content.title`)"
              />
              <p class="content-title bold-text">{{ $t(`${path}.content[${index}].content.title`) }}</p>
              <p class="content-desc normal-text">
                {{ $t(`${path}.content[${index}].content.text`) }}
              </p>
              <p class="content-num harmony-text">
                <span class="num bold-text">{{ $t(`${path}.content[${index}].content.num`) }}</span>
                <span class="unit normal-text">{{ $t(`${path}.content[${index}].content.numUnit`) }}</span>
              </p>
              <p class="content-tips">{{ $t(`${path}.content[${index}].content.numtext`) }}</p>
            </div>
            </div>
            <div class="text-slide">
              <p class="text-title bold-text">{{ $t(`${path}.content[${index}].slide.title`) }}</p>
              <p class="text-desc normal-text">
                {{ $t(`${path}.content[${index}].slide.text`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const path = ref('solutions.access');
useHead({
  title: t("solutions.pageTitle"),
});
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
  padding-top: 84px;
  background: #f8f8f8;
  padding-bottom: 114px;
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
  .slide-bar {
    width: 1200px;
    min-width: 1200px;
    text-align: center;
    margin: 14px auto 0;
    .slide-item {
      width: 100%;
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 94px;
      .text-bar {
        flex: 1;
        width: 360px;
        .text-title {

          font-size: 26px;
          font-weight: bold;
          line-height: 26px;
          text-align: center;
          color: #222222;
          text-align: left;
          margin-bottom: 16px;
        }
        .text-desc {

          font-size: 16px;
          font-weight: normal;
          line-height: 24px;
          color: #666666;
          text-align: left;
        }
      }
      .content-bar {
        display: flex;
        margin: 0 auto;
        width: 745px;
        height: 360px;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
        .banner-img {
          width: 352px;
          height: 360px;
          margin-right: 50px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        .right-content {
          flex: 1;
          padding: 35px 0;
          .content-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 16px;
          }
          .content-title {

            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-align: left;
            color: #222222;
            margin-bottom: 20px;
          }
          .content-desc {

            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            text-align: left;
            width: 268px;
            color: #666666;
            margin-bottom: 37px;
          }
          .content-num {
            font-weight: 500;
            text-align: left;
            color: #e65e24;
            line-height: 16px;

            .num {
              font-size: 32px;
            }
            .unit {
              font-size: 16px;
            }
          }
          .content-tips {
            text-align: left;
            margin-top: 13px;
            font-size: 12px;
            width: 268px;
            font-weight: normal;
            line-height: 20px;
            color: #666666;
          }
        }
      }
    }
  }
}
.mobile {
  display: none;
  padding-top: 47px;
  background: #ffffff;
  padding-bottom: 50px;
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
    .slide-bar {
      width: 100%;
      text-align: center;
      margin-top: 50px;
      .slide-item {
        position: relative;
        display: flex;
        height: 530px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 0 auto;
        width: 292px;
        margin-bottom: 34px;
        border-radius: 10px;

        .image-content {
          position: relative;
          width: 100%;
          background: #ffffff;
          box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
          border-radius: 10px;
        }
        .banner-img {
          width: 100%;
          height: 152px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .right-content {
          height: 268px;
          flex: 1;
          padding: 42px 16px 0;

          .content-icon {
            position: absolute;
            left: 24px;
            top: 120px;
            width: 56px;
            height: 56px;
          }
          .content-title {

            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
            text-align: left;
            color: #222222;
            margin-bottom: 10px;
          }
          .content-desc {

            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            text-align: left;
            color: #666666;
            margin-bottom: 30px;
          }
          .content-num {
            line-height: 16px;
            font-weight: 500;
            text-align: left;
            color: #e65e24;

            .num {
              font-size: 32px;
            }
            .unit {
              font-size: 16px;
            }
          }
          .content-tips {
            text-align: left;
            margin-top: 14px;
            font-size: 12px;
            font-weight: normal;
            line-height: 20px;
            color: #666666;
          }
        }
        .text-slide{
          padding-top: 21px;
          text-align: left;
          .text-title {
            font-size: 20px;
            font-weight: bold;
            line-height: 26px;
          }
          .text-desc {
            margin-top: 8px;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
