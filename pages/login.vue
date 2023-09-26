<template>
  <div>
    <a ref="/" alt="logo"><span class="logo" alt="logo"></span></a>
    <img class="background" alt="login" />
    <div class="index-form">
      <LoginForm />
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useHead({
  title: t("login.pageTitle"),
});
definePageMeta({
  layout: "login",
});

</script>
<style lang="scss">
.index-form {
  position: absolute;
  padding: 29px 37px;
  top: 30%;
  right: 10%;
  width: 386px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(102, 132, 179, 0.3);
}
.background {
  content: url("/images/login-bg.png");
  width: 100%;
  height: 100%;
  position: absolute;
}
.login-btn {
  width: 310px;
  height: 40px;
  border-radius: 4px;

  background: #e65e24;
}
</style>
