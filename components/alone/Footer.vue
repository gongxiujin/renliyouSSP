<template>
  <footer class="footer-pc">
    <div class="footer-container">
      <div class="footer-head">
        <img src="/images/logo01.png" alt="" />
      </div>
      <div class="footer-main">
        <div class="pangle-footer-links">
          <div class="footerContainer">
            <div class="col" v-for="(item, index) in $tm(`${path}`)" :key="index">
              <div class="content">
                <p class="title">{{ $t(`${path}[${index}].title`) }}</p>
                <a
                v-for="(text, idx) in $tm(`${path}[${index}].row`)" :key="idx"
                :href="$t(`${path}[${index}].row[${idx}].link`)" class="link"
                >{{ $t(`${path}[${index}].row[${idx}].text`) }}</a>
              </div>
            </div>
            <div class="col">
              <div class="content">
                <p class="title">{{ $t('footer.followUs') }}</p>
                <div class="content-item mb-6">
                  <el-tooltip placement="left" effect="light">
                    <template #content>
                      <img
                        class="code-img"
                        src="/images/index/code.png"
                        alt=""
                      />
                    </template>
                    <div class="wechat">
                      <img
                        class="wechat-img"
                        src="/images/index/WeChat.png"
                        alt=""
                      />
                    </div>
                  </el-tooltip>
                  <div class="wechat-text">{{ $t('footer.weChat') }}</div>
                </div>
                <div class="content-item mb-2">
                  <div class="phone">
                    <img
                      class="phone-img"
                      src="/images/index/phone.png"
                      alt=""
                    />
                    <div>{{ $t('footer.hotLine') }}</div>
                  </div>
                </div>
                <p class="phone-num mb-6">17060666669</p>
                <div class="content-item mb-2">
                  <div class="phone">
                    <img
                      class="phone-img"
                      src="/images/index/email.png"
                      alt=""
                    />
                    <div>{{ $t('footer.email') }}</div>
                  </div>
                </div>
                <p class="phone-num">yunxiwangluo@yunxi.cn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-terms">
      <div class="pangle-container-section">
        <a
        v-for="(text, idx) in $tm(`${path}[1].row`)" :key="idx"
        :href="$t(`${path}[1].row[${idx}].link`)" class="term-link"
        >{{ $t(`${path}[1].row[${idx}].text`) }}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="pangle-bottom-section">
        <a :href="$t(`copyright[0].link`)" class="term-link">{{ $t(`copyright[0].text`) }}</a>
        <a :href="$t(`copyright[1].link`)" class="term-link">{{ $t(`copyright[1].text`) }}</a>
      </div>
    </div>
  </footer>
  <footer class="footer-mobile">
    <div class="footer-container-mobile">
      <div class="footer-head">
        <img src="/images/logo01.png" alt="" />
      </div>
      <div class="footer-main">
        <div class="pangle-footer-links">
          <div class="footerContainer">
            <div class="col" v-for="(item, index) in $tm(`${path}`)" :key="index">
              <div class="content">
                <p class="title">{{ $t(`${path}[${index}].title`) }}</p>
                <a
                v-for="(text, idx) in $tm(`${path}[${index}].row`)" :key="idx"
                :href="$t(`${path}[${index}].row[${idx}].link`)" class="link"
                >{{ $t(`${path}[${index}].row[${idx}].text`) }}</a>
              </div>
            </div>
            <div class="col">
              <div class="content">
                <p class="title">{{ $t('footer.followUs') }}</p>
                <div class="content-item mb-6 flex-col" style="align-items: flex-start;">
                  <img
                    class="code-img"
                    src="/images/index/code.png"
                    alt=""
                  />
                  <div class="wechat-text">{{ $t('footer.weChat') }}</div>
                </div>
                <div class="content-item mb-2">
                  <div class="phone">
                    <img
                      class="phone-img"
                      src="/images/index/phone.png"
                      alt=""
                    />
                    <div>{{ $t('footer.hotLine') }}</div>
                  </div>
                </div>
                <p class="phone-num mb-6">17060666669</p>
                <div class="content-item mb-2">
                  <div class="phone">
                    <img
                      class="phone-img"
                      src="/images/index/email.png"
                      alt=""
                    />
                    <div>{{ $t('footer.email') }}</div>
                  </div>
                </div>
                <p class="phone-num">yunxiwangluo@yunxi.cn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-terms">
      <div class="pangle-container-section">
        <a
        v-for="(text, idx) in $tm(`${path}[1].row`)" :key="idx"
        :href="$t(`${path}[1].row[${idx}].link`)" class="term-link"
        >{{ $t(`${path}[1].row[${idx}].text`) }}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="pangle-bottom-section">
        <a :href="$t(`copyright[0].link`)" class="term-link">{{ $t(`copyright[0].text`) }}</a>
        <a :href="$t(`copyright[1].link`)" class="term-link">{{ $t(`copyright[1].text`) }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const path = ref("footer.up");
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .footer-pc {
    display: none !important;
  }
  .footer-mobile {
    position: relative;
    display: block !important;
  }
}
.footer-pc {
  position: relative;
  background: #0b0e12;
  min-width: 1200px;
  z-index: 3;
  .footer-container {
    padding: 40px 0;
    margin: 0 auto;
    width: 1200px;
    min-width: 1200px;
    .footer-head {
      img {
        width: 147px;
        height: 52px;
      }
    }
    .footer-main {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .pangle-footer-links {
        font-size: 12px;
        flex: 1;
        .footerContainer {
          display: flex;
          flex: 1;
          justify-content: space-between;
          .col {
            flex: 1;
            margin: 0 12px;
            .content {
              .title {
                color: hsla(0, 0%, 100%, 0.85);
                font-size: 14px;
                margin-bottom: 14px;
              }
              .link {
                color: hsla(0, 0%, 100%, 0.45);
                display: block;
                margin: 12px 0;
              }
              .content-item {
                display: flex;
                align-items: center;
                .code-img {
                  width: 86px;
                  height: 86px;
                }
                .wechat {
                  width: 32px;
                  height: 32px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
                  background: hsla(0, 0%, 100%, 0.45);
                  .wechat-img {
                    width: 22px;
                    height: 18px;
                  }
                  &:hover {
                    background: #ffffff;
                  }
                }
                .wechat-text {
                  font-family: 思源黑体;
                  font-size: 12px;
                  font-weight: normal;
                  color: #999999;
                  margin-left: 13px;
                }
                .phone {
                  display: flex;
                  align-items: center;
                  font-family: 思源黑体;
                  font-size: 14px;
                  font-weight: normal;
                  color: #dbdbdc;
                  .phone-img {
                    width: 15.13px;
                    height: 15.13px;
                    margin-right: 7px;
                  }
                }
              }
              .phone-num {
                font-family: HarmonyOS Sans;
                font-size: 12px;
                font-weight: normal;
                color: #797b7d;
              }
            }
          }
        }
      }
    }
  }
  .footer-terms {
    border-top: 1px solid hsla(0, 0%, 100%, 0.14);
    font-size: 12px;
    padding: 20px 0;
    .pangle-container-section {
      width: 1200px;
      min-width: 1200px;
      margin: 0 auto;
      .term-link {
        display: inline-block;
        margin: 0 32px 0 0;
        color: hsla(0, 0%, 100%, 0.45);
      }
    }
  }
  .footer-bottom {
    font-size: 12px;
    padding: 30px 0;
    background: #000000;
    .pangle-bottom-section {
      width: 1200px;
      min-width: 1200px;
      margin: 0 auto;
      .term-link {
        display: inline-block;
        margin: 0 32px 0 0;
        color: hsla(0, 0%, 100%, 0.45);
      }
    }
  }
}
.footer-mobile {
  display: none;
  position: relative;
  background: #0b0e12;
  .footer-container-mobile {
    padding: 40px 22px;
    margin: 0 auto;
    width: 100%;
    .footer-head {
      img {
        width: 121px;
		height: 43px;
      }
    }
    .footer-main {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .pangle-footer-links {
        font-size: 12px;
        flex: 1;
        .footerContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .col {
            margin: 0 12px;
            .content {
              .title {
                color: hsla(0, 0%, 100%, 0.85);
                font-size: 14px;
                margin-bottom: 14px;
              }
              .link {
                color: hsla(0, 0%, 100%, 0.45);
                display: block;
                margin: 12px 0;
              }
              .content-item {
                display: flex;
                align-items: center;
                .code-img {
                  width: 86px;
                  height: 86px;
				  border-radius: 4px;
                }
                .wechat-text {
                  font-family: 思源黑体;
                  font-size: 12px;
                  font-weight: normal;
                  color: #999999;
				  margin-top: 6px;
                }
                .phone {
                  display: flex;
                  align-items: center;
                  font-family: 思源黑体;
                  font-size: 14px;
                  font-weight: normal;
                  color: #dbdbdc;
                  .phone-img {
                    width: 15.13px;
                    height: 15.13px;
                    margin-right: 7px;
                  }
                }
              }
              .phone-num {
                font-family: HarmonyOS Sans;
                font-size: 12px;
                font-weight: normal;
                color: #797b7d;
              }
            }
          }
        }
      }
    }
  }
  .footer-terms {
    border-top: 1px solid hsla(0, 0%, 100%, 0.14);
    font-size: 12px;
    padding: 20px 22px;
    .pangle-container-section {
      width: 100%;
      margin: 0 auto;
      .term-link {
        display: inline-block;
        margin: 0 32px 0 0;
        color: hsla(0, 0%, 100%, 0.45);
      }
    }
  }
  .footer-bottom {
    font-size: 12px;
    padding: 30px 22px;
    background: #000000;
    .pangle-bottom-section {
      width: 100%;
      margin: 0 auto;
      .term-link {
        display: inline-block;
        margin: 0 32px 0 0;
        color: hsla(0, 0%, 100%, 0.45);
      }
	  &:nth-child(2n) {
		margin-top: 16px;
	  }
    }
  }
}
</style>
