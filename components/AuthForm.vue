<template>
  <el-link :underline="false" class="reset title bold-text" @click="changeLogin">
    <el-icon class="el-icon--left" :size="22" color="#202020"><arrow-left /></el-icon>
    {{ $t('login.resetPassword') }}
  </el-link>

  <el-form ref="form" :model="resetsform" :rules="newRules">
    <el-form-item>
      <el-input :placeholder="$t('login.emailInput')" v-model="resetsform.email"></el-input>
    </el-form-item>
    <PasswordInput
      v-model:password="resetsform.password"
      v-model:placeholder="newpaswdPlaceholder"
      v-model:prop="newProp"
    />
    <PasswordInput
      v-model:password="resetsform.confirmPassword"
      v-model:placeholder="cpaswdPlaceholder"
      v-model:prop="checkProp"
    />
    <RegistorCode v-model:phoneCode="resetsform.verificationCode" />
    <Agree />
      <el-button
        class="login-btn"
        type="danger"
        @click="handleSubmit('resetPassword')"
        >{{ $t('login.resetButton') }}</el-button
      >
  </el-form>
</template>

<script>
import { validatePassword } from "~/assets/js/base.js";
import { ArrowLeft } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      resetsform: {
        email: "",
        password: "",
        confirmPassword: "",
        verificationCode: "",
      },
      newRules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPassword: [{ validator: this.samePass, trigger: "blur" }],
      },
      agree: false,
      newpaswdPlaceholder: this.$t('login.newPassword'),
      newProp: "password",
      cpaswdPlaceholder: this.$t('login.confirmPassword'),
      checkProp: "checkPassword",
    };
  },
  components: {
    ArrowLeft,
  },
  props: ["formType", "isPhoneLogin"],
  emits: ["update:formType"],
  methods: {
    samePass(rule, value, callback) {
      if (value === "") {
        return callback();
      }
      console.log("+++++", this.resetsform.confirmPassword);
      if (this.resetsform.confirmPassword !== this.resetsform.password) {
        callback(new Error(this.$t('login.differentPassword')));
      } else {
        callback();
      }
    },
    changeLogin() {
      this.$emit("update:formType", "login");
    },
    handleSubmit(type) {
      // 在这里添加表单提交的逻辑
      console.log(this.resetsform, type);
    },
  },
};
</script>
<style lang="scss">

.reset {
  span.el-link__inner {
    color: #202020;
    font-size: 22px;
  }
  margin-bottom: 30px;
}
</style>
