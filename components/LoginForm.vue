<template>
  <span class="title bold-text" v-if="formType === 'login'">{{ $t('login.login') }}</span>
  <span class="title bold-text" v-if="formType === 'register'">{{ $t('login.registor') }}</span>
  <el-tabs
    v-if="formType !== 'resetPassword'"
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane :label="$t('login.loginByPhone')" name="phone"></el-tab-pane>
    <el-tab-pane :label="$t('login.loginByEmail')" name="email"></el-tab-pane>
  </el-tabs>
  <!-- 登录表单 -->
  <el-form class="form" ref="form" :model="loginform" v-if="formType === 'login'">
    <el-form-item v-if="isPhoneLogin">
      <el-input v-model="loginform.phone" :placeholder="$t('login.phoneInput')"></el-input>
    </el-form-item>
    <RegistorCode v-if="isPhoneLogin" v-model:phoneCode="loginform.phoneCode" />
    <el-form-item v-if="!isPhoneLogin">
      <el-input v-model="loginform.email" :placeholder="$t('login.emailInput')"></el-input>
    </el-form-item>
    <PasswordInput
      v-if="!isPhoneLogin"
      v-model:password="loginform.password"
      v-model:placeholder="paswdPlaceholder"
      v-model:prop="pwdProp"
    />
    <el-checkbox v-model="agree" class="agree-check"
      >{{ $t('login.aggreeText[0]') }}<el-link type="danger" href="/">{{ $t('login.aggreeText[1]') }}</el-link
      >{{ $t('login.aggreeText[2]') }}<el-link type="danger" href="/">{{ $t('login.aggreeText[3]') }}</el-link>
    </el-checkbox>
    <el-button
      class="login-btn"
      type="danger"
      @click="handleSubmit('login')"
      >{{ $t('login.loginButton') }}</el-button
    >
    <div class="other link-other" style="justify-content: flex-end">
      <el-link
        v-if="!isPhoneLogin"
        class="forget-pwd"
        @click="formType = 'resetPassword'"
        >{{$t('login.forgetPassword')}}</el-link
      >
      <el-link v-if="isPhoneLogin" @click="formType = 'register'"
        >{{ $t('login.registorNow') }}</el-link
      >
    </div>
    <div class="other wechat" style="margin-top: 0">
      <span style="font-size:12px; line-height: 12px;"
        >{{ $t('login.otherWay') }}
        <el-link><img src="/images/wechat.png" alt="wechat" /></el-link
      ></span>
    </div>
  </el-form>
  <!-- 注册表单 -->
  <RegitsorForm
    v-if="formType === 'register'"
    v-model:formType="formType"
    v-model:isPhoneLogin="isPhoneLogin" />
  <!--忘记密码-->
  <AuthForm
    v-if="formType === 'resetPassword'"
    v-model:formType="formType"
    v-model:isPhoneLogin="isPhoneLogin" />
</template>

<script>
import { validatePassword } from "~/assets/js/base.js";
import { useI18n } from 'vue-i18n';
export default {
  setup() {
    const { t } = useI18n();
    const title = ref(t('login.pageTitle'));
    //
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
      agree: false, // 是否同意用户协议
      codeBtnText: this.$t('login.sendCode'), // 验证码按钮的文本
      paswdPlaceholder: this.$t('login.password'),
      pwdProp: "password",
      activeName: "phone",
      loginform: {
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
    handleSubmit(type) {
      // 在这里添加表单提交的逻辑
      console.log(this.loginform, type);

    },
  },
};
</script>

<style lang="scss">
.index-form, .login-form {
  font-family: SourceHans-normal;
  span {
  color: #a1a1a1;
}
}
a.el-link {
  --el-link-hover-text-color: none;
}
.el-tabs__active-bar{
  height: 3px;
}
.el-tabs__nav {
  margin-top: 30px;
  height: 24px;
  .el-tabs__item{
    font-size: 16px;
    line-height: 16px;
    height: 16px;
  }
}
.agree-check {
  margin: 4px 0;
  span.el-link__inner {
    color: #e65e24;
  }
}
.el-tabs__header {
  margin: 0 0 19px;
}
.el-form-item {
  margin-bottom: 22px;
  &.is-error {
    margin-bottom: 28px;
  }
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
span.title {
  height: 23px;
  opacity: 1;
  color: #202020;

  font-size: 22px;
  font-weight: bold;
  line-height: 22px;
}
.el-input .el-input__wrapper {
  background-color: #f0f0f0;
  .el-input__inner {
    height: 40px;
    font-size: 14px;
  }
}
.login-btn span {
  font-size: 16px;
  font-weight: normal;
  line-height: 16px;
  color: #ffffff;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #a1a1a1;
}
.el-tabs__nav-wrap::after {
  width: 0;
}
.other {
  margin-top: 8px;
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
  content: url("/images/logo.png");
  z-index: 2;
}
@media (max-width: $mobile-width) {
  span.title {
    display: none;
  }
  form.el-form {
    display: flex;
    flex-direction: column;
    button {
      position: absolute;
      bottom: 1.28rem;
      width: 80%;
      height: 50px;
    }
    button.el-button.is-link {
      padding: 0;
      width: auto;
      bottom: unset;
      top: unset;
    }
    .other{
      position: absolute;
      bottom: 5.4rem;
      width: 45%;
      justify-content: center!important;;
      &.link-other {
        right: 10px;
      }
      &.wechat{
        left: 10px;
      }
    }
  }

}
</style>
