<template>
  <div style="position: relative;z-index: 3;">
    <div class="pc">
      <div class="title-bar">
        <a href="/">{{ $t('navList.home') }} / </a>
        <span class="desc">{{ crumbTitle }}</span>
      </div>
      <div class="container">
        <div class="container-left">
          <div
            v-for="(item, index) in $tm(`${path}`)" :key="index"
            @click="setIndex(index)"
            :class="['tabs', activeIndex == index ? 'active' : '']"
          >
            {{ $t(`${path}[${index}].title`) }}
          </div>
        </div>
        <div
        class="container-right">
          <div class="title-right">
            <img :src="$t(`${path}[${activeIndex}].image`)" alt="" />
            <p>{{ $t(`${path}[${activeIndex}].title`) }}</p>
          </div>
          <div class="content-text" :style="{ whiteSpace: 'pre-line' }">
            {{ $t(`${path}[${activeIndex}].text`) }}
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="container">
        <div class="container-left">
          <div
            v-for="(item, index) in $tm(`${path}`)" :key="index"
            @click="setIndex(index)"
            :class="['tabs', activeIndex == index ? 'active' : '']"
          >
            {{ $t(`${path}[${index}].title`) }}
          </div>
        </div>
        <div class="container-right">
          <div class="title-right">
            <img :src="$t(`${path}[${activeIndex}].image`)" alt="" />
            <p>{{ $t(`${path}[${activeIndex}].title`) }}</p>
          </div>
          <div class="content-text" :style="{ whiteSpace: 'pre-line' }">
            {{ $t(`${path}[${activeIndex}].text`) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const path = ref("policy.content");
const activeIndex = ref(0);
const crumbTitle = ref(t(`policy.content[0].currentTitle`));
useHead({
  title: t("policy.pageTitle"),
});
function setIndex(index) {
  activeIndex.value = index;
  crumbTitle.value = t(`policy.content[${index}].currentTitle`);
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
.pc {
  width: 100%;
  padding-top: 44px;
  padding-bottom: 30px;
  background: #f8f8f8;
  .title-bar {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;
    font-family: 思源黑体;
    font-size: 16px;
    font-weight: normal;
    line-height: 16px;
    .title {
      color: #666666;
    }
    .desc {
      color: #222222;
    }
  }
  .container {
    width: 1200px;
    height: 816px;
    min-width: 1200px;
    display: flex;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
    .container-left {
      width: 160px;
      height: 100%;
      border-right: 1px solid #d8d8d8;
      .tabs {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-family: 思源黑体;
        font-size: 14px;
        font-weight: normal;
        color: #222222;
        cursor: pointer;
      }
      .active {
        color: #e65e24;
        background: #fdf7f2;
      }
    }
    .container-right {
      width: 1040px;
      padding: 58px 44px;
      .title-right {
        display: flex;
        margin-bottom: 26px;
        img {
          width: 36px;
          height: 36px;
          margin-right: 18px;
        }
        p {
          font-family: 思源黑体;
          font-size: 24px;
          font-weight: 500;
          line-height: 38px;
          color: #333333;
        }
      }
      .content-text {
        width: 956px;
        height: 678px;
        font-family: 思源黑体;
        font-size: 14px;
        color: #555555;
        overflow: auto;
      }
    }
  }
}
.mobile {
  display: none;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  background: #FFFFFF;
  .container {
    width: 100%;
    padding: 20px;
    .container-left {
      display: flex;
      .tabs {
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-family: 思源黑体;
        font-size: 16px;
        font-weight: normal;
        color: #222222;
        cursor: pointer;
        margin-right: 14px;
        margin-bottom: 20px;
      }
      .active {
        color: #e65e24;
      }
    }
    .container-right {
      width: 100%;
      .title-right {
        display: flex;
        margin-bottom: 26px;
        img {
          width: 36px;
          height: 36px;
          margin-right: 18px;
        }
        p {
          font-family: 思源黑体;
          font-size: 18px;
          font-weight: 500;
          line-height: 38px;
          color: #333333;
        }
      }
      .content-text {
        font-family: 思源黑体;
        font-size: 14px;
        color: #555555;
        overflow: auto;
      }
    }
  }
}
</style>
