<template>
  <header class="header">
    <div class="heard-left">
      <a href="/" class="block flex items-center"
        ><img class="h-8 w-24 mr-12" src="../assets/images/logo.png" alt=""
      /></a>
      <AloneNavBar :data="navList" />
    </div>
    <div class="heard-right">
      <LanguageSelector />
      <a href="/login"
        ><span class="header_sign_in" xt-marked="ok" style="display: none;">登录</span></a
      >
      <button type="button" class="btn-sign-up">
        <span class="pangle-btn-inner" xt-marked="ok">{{ $t('justus') }}</span>
      </button>
    </div>
    <img
      class="m-btnMenu w-4 h-3"
      @click="isCollapse ? (isCollapse = false) : (isCollapse = true)"
      src="../assets/images/menu.png"
      alt=""
    />
  </header>
  <div class="header-white"></div>
  <div class="drawer-main">
    <el-drawer
      size="80%"
      :append-to-body="true"
      :z-index="99"
      v-model="isCollapse"
      :with-header="false"
    >
      <el-menu
        class="menu-main"
        @select="menuSelect"
        active-text-color="#E65E24"
      >
        <template v-for="(item, index) in navList" :key="index">
          <el-sub-menu :index="item.link" v-if="item.children">
            <template #title>
              <span><span></span>{{ item.name }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(ite, inde) in item.children"
                :index="ite.link"
              >
                <nuxt-link :to="ite.link">{{ ite.name }}</nuxt-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item :index="item.link" v-else>
            <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
          </el-menu-item>
        </template>
      </el-menu>
      <!-- 登录注册 -->
      <div class="login-btn-bar">
        <div class="login-btn">登录/注册</div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>

const navIndex = ref(0);
const isCollapse = ref(false);
const navList = ref([
  { name: "首页", link: "/" },
  {
    name: "产品中心",
    link: "#",
    children: [
      { name: "移动变现", link: "/products/app" },
      { name: "PC变现", link: "/products/pc" },
      { name: "数据增长", link: "/products/dataGrowth" },
    ],
  },
  { name: "解决方案", link: "/solutions" },
  { name: "关于我们", link: "/aboutUs" },
]);

const menuSelect = (opt) => {
  isCollapse.value = false;
};
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .header {
    min-width: 100% !important;
  }
  .heard-right {
    display: none !important;
  }
  .m-btnMenu {
    display: block !important;
    margin-right: 4%;
  }
}
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
  padding: 0 0 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  min-width: 1366px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
  transition: background-color 0.6s ease-in-out, top 0.2s ease-in-out,
    box-shadow 0.6s ease-in-out;
  .heard-left {
    display: flex;
    align-items: center;
  }
  .heard-right {
    display: flex;
    align-items: center;
    .header_sign_in {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #222;
      margin-left: 24px;
    }
    .btn-sign-up {
      height: 64px;
      width: 104px;
      border-radius: 0;
      border: none;
      margin-left: 24px !important;
      background-color: #ff0017;
      min-width: 90px;
      .pangle-btn-inner {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #fff;
      }
    }
  }
}
.header-white {
  width: 100%;
  height: $header-height;
}

.btnColor {
  color: #ffffff;
  font-weight: 350;
  background-color: $primary-color;
}
.m-btnMenu {
  display: none;
}
.drawer-main {
  width: 100%;
}
.el-menu {
  border: none !important;
}
.menu-main {
  position: relative;
  margin-top: $header-height;
  font-size: 0.9rem;
}

.el-drawer__body {
  padding: 1rem !important;
}
.login-btn-bar {
  position: fixed;
  bottom: 0;
  width: 70%;
  height: 6rem;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-btn {
    border: 0.02rem solid #ff0017;
    box-sizing: border-box;
    border-radius: 0.4rem;
    font-size: 1rem;
    line-height: 3rem;
    color: #ff0017;
    width: 10rem;
    height: 3rem;
    text-align: center;
  }
}
</style>
