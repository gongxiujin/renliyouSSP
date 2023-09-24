<template>
  <!-- 关于我们 -->
  <div>
    <div class="banner-top"></div>
    <!-- 企业文化 -->
    <div class="pc">
      <div class="solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">{{ data.title.body.static }}</h2>
          <p class="solution-desc bold-text">{{ data.text.body.static }}</p>
        </div>
        <div class="container">
          <div class="content-item" v-for="(item, index) in data.content" :key="index">
            <div class="content-round">
              <img
                class="round-img"
                :src="item.image.body.static"
                :alt="item.title.body.static"
              />
            </div>
            <p class="title bold-text">{{ item.title.body.static }}</p>
            <p class="desc normal-text">{{ item.text.body.static }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="join-us">
      <img class="bg-img" src="/images/index/joinUsBg.png" alt="" />
      <div class="title-content">
        <h2 class="title">{{ $t('contactUs') }}</h2>
        <p :style="{ whiteSpace: 'pre-line' }">{{ $t("address") }}</p>
      </div>
    </div>
    <div class="mobile">
      <div class="m-solution-bar">
        <div class="title-bar">
          <h2 class="solution-title">企业文化</h2>
          <p class="solution-desc">开放共赢</p>
        </div>
        <div class="container">
          <div class="content-item">
            <div class="content-round">
              <img
                class="round-img"
                src="../assets/images/aboutUs/aboutUs1-1.png"
                alt=""
              />
            </div>
            <p class="title">改革</p>
            <p class="desc">开放创新，给予他人，成就自我</p>
          </div>
          <div class="content-item">
            <div class="content-round">
              <img
                class="round-img"
                src="../assets/images/aboutUs/aboutUs1-2.png"
                alt=""
              />
            </div>
            <p class="title">做事</p>
            <p class="desc">思路出彩，过程出色，结果出众</p>
          </div>
          <div class="content-item">
            <div class="content-round">
              <img
                class="round-img"
                src="../assets/images/aboutUs/aboutUs1-3.png"
                alt=""
              />
            </div>
            <p class="title">心态</p>
            <p class="desc">终身成长，持续奋斗，舍我其谁</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="m-join-us">
      <img class="bg-img" src="../assets/images/index/joinUsBg.png" alt="" />
      <h2 class="title">联系我们</h2>
      <p>云袭网络技术（河北）有限公司</p>
      <p>地址：河北省石家庄市裕华区怀特商业广场D座5层</p>
      <p>市场合作：17060666669</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
const data = ref(tm('aboutUs').solution);
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .banner-top {
    min-width: 100% !important;
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
.banner-top {
  width: 100%;
  min-width: 1200px;
  height: 434px;
  background-image: url("/images/aboutUs/aboutUsBanner.png");
  background-size: 100% 100%;
  position: relative;
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
    padding: 60px 0;
    background: rgba(30, 26, 25, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
    line-height: 10px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
