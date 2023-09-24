<template>
  <div>
    <div class="pc">
      <div class="system-bar">
        <div class="title-bar">
          <h2 class="system-title">{{ data.title.body.static }}</h2>
        </div>
        <div class="system-item" v-for="(item, index) in data.content" :key="index">
          <div class="item-content" :style="{ order: index % 2 !== 0 ? 1 : '' }">
            <p class="title bold-text">{{ item.title.body.static }}</p>
            <p class="desc normal-text">
              {{ item.text.body.static }}
            </p>
          </div>
          <img
            class="system-img"
            :src="item.image.body.static"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="m-system-bar">
        <div class="title-bar">
          <h2 class="system-title" :style="{ whiteSpace: 'pre-line' }">{{ data.mbTitle.body.static }}</h2>
        </div>
        <div class="system-item" v-for="(item, index) in data.content" :key="index">
          <img
            class="system-img"
            :src="item.image.body.static"
            alt=""
          />
          <div class="item-content">
            <p class="title">{{ item.title.body.static }}</p>
            <p class="desc">{{ item.text.body.static }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
const data = ref(tm('app').appSystem);
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
.mobile {
    display: none;
}

.system-bar {
  width: 100%;
  height: 100%;
  padding-top: 79px;
  padding-bottom: 100px;
  background: #fff;
  .title-bar {
    width: 1200px;
    min-width: 1200px;
    text-align: center;
    margin: 0 auto 112px;
    .system-title {

      font-size: 36px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
  }
  .system-item {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto 88px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item-content {
      width: 40%;
      text-align: left;
      .title {

        font-size: 26px;
        font-weight: bold;
        line-height: 26px;
        color: #222222;
        margin-bottom: 16px;
      }
      .desc {

        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        color: #666666;
      }
    }
    .system-img {
      width: 346px;
      height: 336px;
    }
  }
}
.m-system-bar {
  width: 100%;
  height: 100%;
  padding-top: 52px;
  padding-bottom: 100px;
  background: #F8F8F8;
  .title-bar {
    width: 100%;
    text-align: center;
    margin: 0 auto 19px;
    .system-title {

      font-size: 24px;
      font-weight: 900;
      line-height: 38px;
      text-align: center;
      color: #222222;
    }
  }
  .system-item {
    width: 100%;
    margin: 0 auto 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .item-content {
      width: 100%;
      text-align: left;
      padding: 0 45px;
      .title {

        font-size: 18px;
        font-weight: bold;
        line-height: 26px;
        color: #222222;
        margin-bottom: 8px;
      }
      .desc {

        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        color: #666666;
      }
    }
    .system-img {
        width: 237px;
        height: 230px;
    }
  }
}
</style>
