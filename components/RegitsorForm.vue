<template>
  <!-- 注册表单 -->
  <el-form ref="form" :model="registorform" :rules="rules">
    <el-form-item v-if="isPhoneLogin">
      <el-input
        v-model="registorform.phone"
        class="pc"
        :placeholder="$t('login.phoneInput')"
      >
      </el-input>
      <el-input
        v-model="registorform.phone"
        :placeholder="$t('login.phoneInput')"
        class="input-with-select mobile"
      >
        <template #prepend>
          <el-select
            v-model="registorform.code"
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
    <RegistorCode
      v-if="isPhoneLogin"
      v-model:formType="registorform.registerCode"
    />
    <el-form-item v-if="!isPhoneLogin">
      <el-input
        :placeholder="$t('login.emailInput')"
        v-model="registorform.email"
      ></el-input>
    </el-form-item>
    <PasswordInput
      v-if="!isPhoneLogin"
      v-model:password="registorform.password"
      v-model:placeholder="paswdPlaceholder"
      v-model:prop="pwdProp"
    />
    <Agree />
    <el-button
      class="login-btn"
      type="danger"
      @click="handleSubmit('register')"
      >{{ $t("login.registorButon") }}</el-button
    >
    <div class="other" style="margin-top: 24px">
      <el-link class="pc" @click="changeFormType">{{ $t("login.returnLogin") }}</el-link>
      <el-link class="mobile" @click="changeFormType">{{ $t("login.loginButton") }}</el-link>
    </div>
  </el-form>
</template>

<script>
import { validatePassword } from "~/assets/js/base.js";
export default {
  // setup(){
  //   const paswdPlaceholder = "密码";
  // },
  data() {
    return {
      registorform: {
        phone: "",
        registerCode: "",
        email: "",
        password: "",
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
      },
      agree: false, // 是否同意用户协议
      // paswdPlaceholder: "密码",
      paswdPlaceholder: this.$t("login.password"),
      pwdProp: "password",
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  props: ["formType", "isPhoneLogin"],
  emits: ["update:formType"],
  methods: {
    handleSubmit(type) {
      // 在这里添加表单提交的逻辑
      console.log(this.loginform, type);
    },
    changeFormType() {
      this.$emit("update:formType", "login");
    },
  },
};
</script>

<style scoped>
.other {
  bottom: 160px;
  justify-content: flex-start !important;
}
</style>
