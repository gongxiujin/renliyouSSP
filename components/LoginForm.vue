<template>
  <span class="title bold-text" v-if="formType === 'login'">{{
    $t("login.login")
  }}</span>
  <span class="title bold-text" v-if="formType === 'register'">{{
    $t("login.registor")
  }}</span>
  <el-tabs
    v-if="formType !== 'resetPassword'"
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane :label="$t('login.loginByPhone')" name="phone"></el-tab-pane>
    <el-tab-pane :label="$t('login.loginByEmail')" name="email"></el-tab-pane>
  </el-tabs>
  <!-- 登录表单 -->
  <el-form
    class="form"
    ref="form"
    :model="loginform"
    v-if="formType === 'login'"
  >
    <el-form-item v-if="isPhoneLogin">
      <el-input
        v-model="loginform.phone"
        class="pc"
        :placeholder="$t('login.phoneInput')"
      >
      </el-input>
      <el-input
        v-model="loginform.phone"
        :placeholder="$t('login.phoneInput')"
        class="input-with-select mobile"
      >
        <template #prepend>
          <el-select
            v-model="loginform.code"
            filterable
            placeholder="CN+86"
            popper-class="code-select"
            class="code-select"
          >
            <el-option
              v-for="(key, index) in selectCode"
              :label="key.label"
              :value="key.value"
              :key="index"
            ></el-option>
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <RegistorCode v-if="isPhoneLogin" v-model:phoneCode="loginform.phoneCode" />
    <el-form-item v-if="!isPhoneLogin">
      <el-input
        v-model="loginform.email"
        :placeholder="$t('login.emailInput')"
      ></el-input>
    </el-form-item>
    <PasswordInput
      v-if="!isPhoneLogin"
      v-model:password="loginform.password"
      v-model:placeholder="paswdPlaceholder"
      v-model:prop="pwdProp"
    />
    <Agree />
    <el-button class="login-btn" type="danger" @click="handleSubmit('login')">{{
      $t("login.loginButton")
    }}</el-button>
    <div class="other link-other" style="justify-content: flex-end">
      <el-link
        v-if="!isPhoneLogin"
        class="forget-pwd"
        @click="formType = 'resetPassword'"
        >{{ $t("login.forgetPassword") }}</el-link
      >
      <el-link v-if="isPhoneLogin" class="pc" @click="formType = 'register'">{{
        $t("login.registorNow")
      }}</el-link>
      <el-link class="mobile" v-if="isPhoneLogin" @click="formType = 'register'">{{ $t("login.loginButton") }}</el-link>
    </div>
    <div class="other wechat">
      <span style="font-size: 12px; line-height: 12px"
        >{{ $t("login.otherWay") }}
        <el-link><img src="/images/wechat.png" alt="wechat" /></el-link
      ></span>
    </div>
  </el-form>
  <!-- 注册表单 -->
  <RegitsorForm
    v-if="formType === 'register'"
    v-model:form-type="formType"
    v-model:isPhoneLogin="isPhoneLogin"
  />
  <!--忘记密码-->
  <AuthForm
    v-if="formType === 'resetPassword'"
    v-model:form-type="formType"
    v-model:isPhoneLogin="isPhoneLogin"
  />
</template>

<script>
import { validatePassword } from "~/assets/js/base.js";
import { useI18n } from "vue-i18n";
export default {
  setup(props) {
    const { t } = useI18n();
    const title = ref(t("login.pageTitle"));
    const { action } = toRefs(props);
    //
    useHead({
      title: title.value,
      meta: [{ name: "description", content: "注册登录页面" }],
    });

    return {
      title,
      action,
    };
  },
  data() {
    return {
      isPhoneLogin: true, // 是否是手机号登录
      agree: false, // 是否同意用户协议
      codeBtnText: this.$t("login.sendCode"), // 验证码按钮的文本
      paswdPlaceholder: this.$t("login.password"),
      pwdProp: "password",
      activeName: "phone",
      selectCode: [
        {
          label: "CN+86",
          value: "+86",
        },
        {
          label: "AF+93",
          value: "+93",
        },
        {
          label: "CA+1",
          value: "+1",
        },
      ],
      formType: this.action,
      loginform: {
        code: "+86",
        phone: "",
        phoneCode: "",
        email: "",
        password: "",
      },
    };
  },
  props: {
    action: String,
  },
  // action： 'login', 'register'、 'resetPassword'
  // props: ["action"],
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
    switchForm(_action) {
      formType.value = type;
    },
  },
};
</script>

<style lang="scss">
.mobile {
  display: none;
}
@media (max-width: $mobile-width) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
}
.el-select .el-input {
  width: 108px;
  background-color: #f0f0f0;
}
.input-with-select .el-input-group__prepend {
  background-color: #f0f0f0;
}
.index-form,
.login-form {
  font-family: SourceHans-normal;
  span {
    color: #a1a1a1;
    a.el-link {
      top: -2.2px;
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
}
a.el-link {
  --el-link-hover-text-color: none;
}
.el-tabs__active-bar {
  height: 3px;
}
.el-tabs__nav {
  margin-top: 30px;
  height: 24px;
  .el-tabs__item {
    font-size: 16px;
    line-height: 16px;
    height: 16px;
    &:hover {
      color: "#202020";
    }
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
  width: 218px;
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
      background: #e65e24;
      position: absolute;
      bottom: 100px;
      width: 80%;
      height: 50px;
    }
    button.el-button.is-link {
      padding: 0;
      width: auto;
      bottom: unset;
      top: unset;
    }
    .other {
      position: absolute;

      width: 45%;
      justify-content: center;
      &.link-other {
        left: 10%;
        bottom: 160px;
        justify-content: flex-start !important;
      }
      &.wechat {
        bottom: 48px;
        width: 100%;
        left: 10px;
        img {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
}
</style>
