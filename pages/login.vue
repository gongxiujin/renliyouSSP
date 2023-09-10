<template>
  <div>
    <span class="logo" alt="logo"><a ref="/" alt="logo"></a></span>
    <img class="background" alt="login" />
    <div class="index-form">
      <div v-if="formType === 'login'">
        <span>用户登录</span>
        <el-form ref="form" :model="form">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="手机登录" name="phone"></el-tab-pane>
            <el-tab-pane label="邮箱登录" name="email"></el-tab-pane>
          </el-tabs>
          <el-form-item v-if="isPhoneLogin">
            <el-input v-model="form.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <RegistorCode v-if="isPhoneLogin" v-model:phoneCode="form.phoneCode" />
          <el-form-item v-if="!isPhoneLogin">
            <el-input v-model="form.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <PasswordInput v-if="!isPhoneLogin" v-model:password="form.password" v-model:placeholder="paswdPlaceholder" />
          <el-form-item>
            <el-checkbox v-model="form.agree"
              >我已阅读并同意<el-link type="primary" href="/">用户协议</el-link
              >和<el-link type="primary" href="/">隐私政策</el-link>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <span v-if="!isPhoneLogin" @click="formType = 'resetPassword'"
              >忘记密码</span
            >
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="handleSubmit('login')"
              :disabled="!form.agree"
              >登录</el-button
            >
          </el-form-item>
          <span @click="formType = 'register'">还没账号？注册</span>
        </el-form>
        <span>其他方式<img src="" alt="wechat" /></span>
      </div>

      <template v-if="formType !== 'login'">
        <AuthForm v-model:formType="formType" />
      </template>
    </div>

    <!-- 注册表单和重置密码 -->
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "login",
    });
    const title = ref("登录");
    useHead({
      title: title.value,
      meta: [{ name: "description", content: "注册登录页面" }],
    });

    return {
      title,
    };
  },
  data() {
    return {
      formType: "login", // form类型，可以是 'login', 'register' 或 'resetPassword'
      isPhoneLogin: true, // 是否是手机号登录
      isCodeBtnDisabled: false, // 验证码按钮是否禁用
      agree: false, // 是否同意用户协议
      codeBtnText: "发送验证码", // 验证码按钮的文本
      activeName: "phone",
      paswdPlaceholder: "密码",
      form: {
        phone: "",
        phoneCode: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toggleLoginMethod() {
      this.isPhoneLogin = !this.isPhoneLogin;
    },
    handleClick(tab, event) {
      this.toggleLoginMethod();
    },
    sendCode() {
      this.isCodeBtnDisabled = true;
      this.codeBtnText = "60s";
      let seconds = 60;
      const interval = setInterval(() => {
        seconds -= 1;
        this.codeBtnText = `${seconds}s`;
        if (seconds === 0) {
          clearInterval(interval);
          this.isCodeBtnDisabled = false;
          this.codeBtnText = "发送验证码";
        }
      }, 1000);

      // 在这里添加发送验证码的逻辑
    },
    handleSubmit(type) {
      // 在这里添加表单提交的逻辑
      console.log(this.form, type);
    },
  },
};
</script>

<style lang="scss">
.index-form {
  position: absolute;
  padding: 29px 37px;
  top: 30%;
  right: 10%;
  width: 386px;
  height: 388px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(102, 132, 179, 0.3);
}
.el-form-item {
  margin-bottom: 20px;
}
.el-tabs__active-bar {
  background-color: #e65e24;
}
.el-tabs__item {
  color: #999999;
  &.is-active {
    color: #202020;
  }
}
.el-input .el-input__wrapper {
  background-color: #f0f0f0;
  .el-input__inner {
    height: 40px;
    font-size: 14px;
  }
}
.el-tabs__nav-wrap::after {
  width: 0;
}

.logo {
  position: absolute;
  left: 46.75px;
  top: 40.29px;
  width: 113.17px;
  height: 40.18px;
  content: url("~/assets/images/logo.png");
  z-index: 2;
}
.background {
  content: url("~/assets/images/login-bg.png");
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
