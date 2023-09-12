<template>
  <div>
    <a ref="/" alt="logo"><span class="logo" alt="logo"></span></a>
    <img class="background" alt="login" />
    <div class="index-form">
      <div>
        <span class="title" v-if="formType === 'login'">用户登录</span>
        <span class="title" v-if="formType === 'register'">用户注册</span>
        <span class="title" v-if="formType === 'resetPassword'"
          ><i @click="formType = 'login'" class="el-icon-arrow-left"></i
          >密码重置</span
        >
        <el-tabs
          v-if="formType !== 'resetPassword'"
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane label="手机登录" name="phone"></el-tab-pane>
          <el-tab-pane label="邮箱登录" name="email"></el-tab-pane>
        </el-tabs>
        <!-- 登录表单 -->
        <el-form ref="form" :model="loginform" v-if="formType === 'login'">
          <el-form-item v-if="isPhoneLogin">
            <el-input v-model="loginform.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <RegistorCode
            v-if="isPhoneLogin"
            v-model:phoneCode="loginform.phoneCode"
          />
          <el-form-item v-if="!isPhoneLogin">
            <el-input v-model="loginform.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <PasswordInput
            v-if="!isPhoneLogin"
            v-model:password="loginform.password"
            v-model:placeholder="paswdPlaceholder"
            v-model:prop="pwdProp"
          />
          <el-checkbox v-model="agree"
            >我已阅读并同意<el-link type="danger" href="/">用户协议</el-link
            >和<el-link type="danger" href="/">隐私政策</el-link>
          </el-checkbox>
          <div class="other" style="justify-content: flex-start">
            <el-link class="forget-pwd" @click="formType = 'resetPassword'"
              >忘记密码</el-link
            >
          </div>
          <el-button
            class="login-btn"
            type="danger"
            @click="handleSubmit('login')"
            :disabled="!agree"
            >登录</el-button
          >
          <div class="other" style="justify-content: flex-end">
            <el-link @click="formType = 'register'">还没账号？注册</el-link>
          </div>
          <div class="other">
            <span
              >其他方式
              <el-link
                ><img src="~/assets/images/wechat.png" alt="wechat" /></el-link
            ></span>
          </div>
        </el-form>
        <!-- 注册表单 -->
        <el-form
          ref="form"
          :model="registorform"
          :rules="rules"
          v-if="formType === 'register'"
        >
          <el-form-item v-if="isPhoneLogin">
            <el-input
              placeholder="手机号"
              v-model="registorform.phone"
            ></el-input>
          </el-form-item>
          <RegistorCode
            v-if="isPhoneLogin"
            v-model:formType="registorform.registerCode"
          />
          <el-form-item v-if="!isPhoneLogin">
            <el-input
              placeholder="邮箱"
              v-model="registorform.email"
            ></el-input>
          </el-form-item>
          <PasswordInput
            v-if="!isPhoneLogin"
            v-model:password="registorform.password"
            v-model:placeholder="paswdPlaceholder"
            v-model:prop="pwdProp"
          />
          <el-form-item>
            <el-checkbox v-model="agree"
              >我已阅读并同意<el-link type="danger" href="/">用户协议</el-link
              >和<el-link type="danger" href="/">隐私政策</el-link>
            </el-checkbox>
          </el-form-item>
          <el-button
            class="login-btn"
            type="danger"
            @click="handleSubmit('register')"
            >注册</el-button
          >
          <div class="other">
            <el-link @click="formType = 'login'">已有账号,去登录</el-link>
          </div>
        </el-form>
        <!-- 重置密码表单 -->
        <el-form
          ref="form"
          :model="resetsform"
          :rules="newRules"
          v-if="formType === 'resetPassword'"
        >
          <el-form-item>
            <el-input placeholder="邮箱" v-model="resetsform.email"></el-input>
          </el-form-item>
          <PasswordInput
            v-model:password="resetsform.password"
            v-model:placeholder="newpaswdPlaceholder"
            v-model:prop="pwdProp"
          />
          <PasswordInput
            v-model:password="resetsform.confirmPassword"
            v-model:placeholder="cpaswdPlaceholder"
            v-model:prop="checkProp"
          />
          <RegistorCode v-model:phoneCode="resetsform.verificationCode" />
          <el-checkbox v-model="agree"
            >我已阅读并同意<el-link type="danger" href="/">用户协议</el-link
            >和<el-link type="danger" href="/">隐私政策</el-link>
          </el-checkbox>
          <el-form-item>
            <el-button
              class="login-btn"
              type="danger"
              @click="handleSubmit('resetPassword')"
              >重置密码</el-button
            >
            <el-button @click="formType = 'login'">返回登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validatePassword } from "~/assets/js/base.js";
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
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
      newRules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPassword: [{ validator: this.samePass, trigger: "blur" }],
      },
      agree: false, // 是否同意用户协议
      codeBtnText: "发送验证码", // 验证码按钮的文本
      pwdProp: "password",
      activeName: "phone",
      loginform: {
        phone: "",
        phoneCode: "",
        email: "",
        password: "",
      },
      paswdPlaceholder: "密码",
      newpaswdPlaceholder: "新密码",
      cpaswdPlaceholder: "确认密码",
      checkProp: "checkPassword",
      registorform: {
        phone: "",
        registerCode: "",
        email: "",
        password: "",
      },
      resetsform: {
        email: "",
        password: "",
        confirmPassword: "",
        verificationCode: "",
      },
    };
  },
  methods: {
    toggleLoginMethod() {
      this.isPhoneLogin = !this.isPhoneLogin;
    },
    samePass(rule, value, callback) {
      if (value === "") {
        return callback();
      }
      console.log(value, this.resetsform.password);
      if (value !== this.resetsform.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
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
      console.log(this.loginform, type);
      if (type === "resetPassword") {
        console.log(this.resetsform, type);
      }
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
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #000;
}
.el-tabs__nav-wrap::after {
  width: 0;
}
.other {
  justify-content: center;
  width: 100%;
  display: flex;
}
.title {
  font-size: 22px;
  font-weight: bold;
  line-height: 22px;

  color: #202020;
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
.login-btn {
  width: 310px;
  height: 40px;
  border-radius: 4px;

  background: #e65e24;
}
</style>
