<template>
  <div
    style="
      position: relative;
      z-index: 3;
      background: linear-gradient(0deg, #e8eff9 0%, #f8fafd 55%, #ffffff 100%);
    "
  >
    <!-- 优秀案例及解决方案 -->
    <div class="pc">
      <div class="access-bar">
        <div class="title-bar">
          <h2 class="access-title">{{ $t(`${path}.title`) }}</h2>
        </div>
        <div class="slide-bar">
          <div
            class="slide-item"
            v-for="(item, index) in $tm(`${path}.content`)"
            :key="index"
          >
            <div class="content-bar">
              <img
                class="banner-img"
                :src="$t(`${itemPath}[${index}].content.image`)"
                :alt="$t(`${itemPath}[${index}].content.title`)"
              />
              <div class="right-content">
                <div class="up">
                  <div class="content-title">
                    <p class="bold-text">
                      {{ $t(`${itemPath}[${index}].content.title`) }}
                    </p>
                  </div>
                  <div >
                    <template
                      v-for="(item, idx) in $tm(
                        `${itemPath}[${index}].content.text`
                      )"
                    >
                      <div class="content-desc">
                        <div class="point"></div>
                      <p class="normal-text">
                        {{ $t(`${itemPath}[${index}].content.text[${idx}]`) }}
                      </p>
                      </div>
                    </template>
                  </div>
                </div>
                <el-divider></el-divider>
                <div class="btn-group">
                  <button
                    class="normal-text"
                    v-for="(item, idx) in $tm(
                      `${itemPath}[${index}].content.button`
                    )"
                  >
                    {{ $t(`${itemPath}[${index}].content.button[${idx}]`) }}
                  </button>
                </div>
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
          <div
            class="slide-item"
            v-for="(item, index) in $tm(`${path}.content`)"
            :key="index"
          >
            <div class="content-bar">
              <img
                class="banner-img"
                :src="$t(`${itemPath}[${index}].content.mbimage`)"
                :alt="$t(`${itemPath}[${index}].content.title`)"
              />
              <div class="right-content">
                <div class="up">
                  <div class="content-title">
                    <p class="bold-text">
                      {{ $t(`${itemPath}[${index}].content.title`) }}
                    </p>
                  </div>
                  <div class="content-desc">
                    <div class="point"></div>
                    <p class="normal-text">
                      {{ $t(`${itemPath}[${index}].content.text[0]`) }}
                    </p>
                  </div>
                </div>
                <el-divider></el-divider>
                <div class="btn-group">
                  <button
                    class="normal-text"
                    v-for="(item, idx) in $tm(
                      `${itemPath}[${index}].content.button`
                    )"
                  >
                    {{ $t(`${itemPath}[${index}].content.button[${idx}]`) }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const path = ref("solutions.access");
const itemPath = ref("solutions.access.content");
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
      margin-top: 63px;
      display: flex;
      align-items: center;
      justify-content: center;
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
        width: 944px;
        height: 400px;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
        .banner-img {
          width: 400px;
          height: 400px;
          margin-right: 54px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        .right-content {
          width: 440px;
          padding-top: 35px;
          .up {
            height: 256px;
            padding-top: 65px;
            .content-title {
              font-size: 24px;
              font-weight: bold;
              line-height: 26px;
              text-align: left;
              color: #222222;
              margin-bottom: 20px;
              p {
                background: linear-gradient(
                  0deg,
                  rgba(255, 76, 0, 0.2) 0%,
                  rgba(216, 216, 216, 0) 100%
                );
                margin-left: 12px;
                display: inline-block;
              }
            }
            .content-desc {
              margin-top: 16px;
              font-size: 14px;
              font-weight: normal;
              line-height: 24px;
              text-align: left;
              width: 100%;
              color: #666666;
              display: flex;
              p {
                width: 95%;
              }
            }
          }
          .el-divider--horizontal {
            margin: 0;
            margin-bottom: 10px;
          }
          .btn-group {
            display: flex;
            justify-content: flex-start;
            gap: 10px;
            flex-wrap: wrap;
            button {
              padding: 4px 12px;
              font-size: 12px;
              border-radius: 4px;
              color: #e65e24;
              background: #ffedeb;
            }
          }
        }
      }
    }
  }
}
.point {
  width: 3px;
  height: 3px;
  display: inline-block;
  border-radius: 5px;
  background: #666;
  margin: 8px;
  @media (min-width: $mobile-width) {
    margin: 10px 10px 0 0;
  }
  vertical-align: middle;
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
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 0 41px;
        background: #ffffff;
        box-shadow: 1.5px 2.6px 30px 0px rgba(0, 0, 0, 0.12);
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
          padding: 0 17px;
          flex: 1;
          .up {
            height: 163px;
            padding-top: 21px;

            .content-title {
              font-size: 20px;
              font-weight: bold;
              margin-left: 13px;
              line-height: 26px;
              text-align: left;
              color: #222222;
              margin-bottom: 10px;
              p {
                background: linear-gradient(
                  0deg,
                  rgba(255, 76, 0, 0.2) 0%,
                  rgba(216, 216, 216, 0) 100%
                );
                display: inline-block;
              }
            }
            .content-desc {
              font-size: 14px;
              font-weight: normal;
              line-height: 20px;
              text-align: left;
              display: flex;
              color: #666666;
              margin-bottom: 30px;
              p {
                word-break: break-all;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                width: 95%;
              }
            }
          }
        }
        .el-divider--horizontal {
          margin: 0;
          margin-bottom: 10px;
        }
        .btn-group {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          button {
            padding: 4px 12px;
            font-size: 12px;
            border-radius: 4px;
            color: #e65e24;
            background: #ffedeb;
          }
        }
      }
    }
  }
}
</style>
