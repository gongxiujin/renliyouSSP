<template>
  <div>
    <!-- 商业PC变现的优势 -->
    <div class="pc">
      <div class="system-bar">
        <div class="title-bar">
          <h2 class="system-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="system-item" v-for="(item, index) in $tm(`${path}.content`)" :key="index">
          <div class="item-content" :style="{ order: index % 2 !== 0 ? 1 : '' }">
            <p class="title bold-text">{{ $t(`${itemPath}[${index}].title`) }}</p>
            <p class="desc normal-text">
              {{ $t(`${itemPath}[${index}].text`) }}
            </p>
          </div>
          <img
            class="system-img"
            :src="$t(`${itemPath}[${index}].image`)"
            :alt="$t(`${itemPath}[${index}].title`)"
          />
        </div>

      </div>
    </div>
    <div class="mobile">
      <div class="m-system-bar">
        <div class="title-bar">
          <h2 class="system-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="system-item" v-for="(item, index) in $tm(`${path}.content`)" :key="index">
          <img
            class="system-img"
            :src="$t(`${itemPath}[${index}].image`)"
            alt=""
          />
          <div class="item-content" >
            <p class="title">{{ $t(`${itemPath}[${index}].title`) }}</p>
            <p class="desc">
              {{ $t(`${itemPath}[${index}].text`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const path = ref("pc.pcAdvantage");
const itemPath = ref("pc.pcAdvantage.content");
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
  padding-top: 88px;
  padding-bottom: 100px;
  background: #fff;
  .title-bar {
    width: 1200px;
    min-width: 1200px;
    text-align: center;
    margin: 0 auto 122px;
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
    margin: 0 auto 156px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item-content {
      width: 240px;
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
      width: 301px;
      height: 264px;
    }
  }
}
.m-system-bar {
  width: 100%;
  height: 100%;
  padding-top: 51px;
  padding-bottom: 40px;
  background: #fff;
  .title-bar {
    width: 100%;
    text-align: center;
    margin: 0 auto 28px;
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
    margin: 0 auto 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .item-content {
      width: 260px;
      text-align: left;
      padding-top: 5px;
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
      width: 174px;
      height: 152px;
    }
  }
}
</style>
