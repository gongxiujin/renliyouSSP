<template>
  <div class="banner-top">
    <img class="banner-img" :alt="$t(`${path}.title`)" v-if="$t(`${path}.image`)!==''" />
    <img class="banner-img-mini" :alt="$t(`${path}.title`)" />
    <img class="banner-icon" :alt="$t(`${path}.title`)" v-if="$t(`${path}.icon`)!==''" />
    <div class="banner-title">
      <h2 class="title" :style="{ whiteSpace: 'pre-line' }">
        {{ $t(`${path}.title`) }}
      </h2>
      <p class="text normal-text" :style="{ whiteSpace: 'pre-line' }">
        {{ $t(`${path}.text`) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup >
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
const { path } = defineProps(["path"]);
onMounted(() => {
  if (t(path+`.image`) !== "") {
    image.value = "url(" + t(path+`.image`) + ")";
  }
  if (t(path+`.icon`) !== "") {
    icon.value = "url(" + t(path+`.icon`) + ")";
  }
});
let icon = ref("");
let image = ref("");
const mbImage = "url(" + t(path+`.mbImage`) + ")";
const mbTop = t(path+`.mbTop`);
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .banner-top {
    width: 100%;
    height: 712px;
    display: flex;
    justify-content: center;
    .banner-img {
      display: none ;
    }
    .banner-icon{
      display: none;
    }
    .banner-img-mini {
      content: v-bind(mbImage);
      width: 100%;
      height: 712px;
      position: absolute;
    }

    .banner-title {
      position: relative;
      margin-top: v-bind(mbTop);
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
}
@media (min-width: $mobile-width) {
  .banner-top {
    width: 100%;
    min-width: 1200px;
    height: 434px;
    .banner-img-mini {
      display: none;
    }
    .banner-icon {
      content: v-bind(icon);
      width: 23.48%;
      height: auto;
      position: absolute;
      top: 14px;
      right: 18.48%;
    }
    .banner-img {
      content: v-bind(image);
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }

    position: relative;
    .banner-title {
      position: absolute;
      top: 95px;
      left: 19%;
      width: 460px;
      text-align: left;
      color: #222;
      .title {
        font-size: 60px;
        font-weight: normal;
        line-height: 36px;
      }
      .text {
        margin-top: 28px;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
      }
    }
  }
}
</style>
