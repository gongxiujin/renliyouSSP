<template>
  <!-- 注册表单 -->
  <el-form
    ref="form"
    :model="registorform"
    :rules="rules"
  >
    <el-form-item v-if="isPhoneLogin">
      <el-input placeholder="手机号" v-model="registorform.phone"></el-input>
    </el-form-item>
    <RegistorCode
      v-if="isPhoneLogin"
      v-model:formType="registorform.registerCode"
    />
    <el-form-item v-if="!isPhoneLogin">
      <el-input placeholder="邮箱" v-model="registorform.email"></el-input>
    </el-form-item>
    <PasswordInput
      v-if="!isPhoneLogin"
      v-model:password="registorform.password"
      v-model:placeholder="paswdPlaceholder"
      v-model:prop="pwdProp"
    />
    <el-checkbox v-model="agree" class="agree-check"
        >我已阅读并同意<el-link type="danger" href="/">用户协议</el-link
        >和<el-link type="danger" href="/">隐私政策</el-link>
      </el-checkbox>
    <el-button class="login-btn" type="danger" @click="handleSubmit('register')"
      >注册</el-button
    >
    <div class="other" style="margin-top: 24px">
      <el-link @click="changeFormType">已有账号,去登录</el-link>
    </div>
  </el-form>
</template>

<script>
import { validatePassword } from "~/assets/js/base.js";
export default {
  // setup(){
  //   const paswdPlaceholder = "密码";
  // },
  data(){
    return {
      registorform: {
        phone: "",
        registerCode: "",
        email: "",
        password: "",
      },
      agree: false, // 是否同意用户协议
      paswdPlaceholder: "密码",
      pwdProp: "password",
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    }
  },
  props: ["formType", "isPhoneLogin"],
  emits: ["update:formType"],
  methods: {
    handleSubmit(type) {
      // 在这里添加表单提交的逻辑
      console.log(this.loginform, type);
    },
    changeFormType() {
      this.$emit("update:formType", 'login');
    },
  },
}

</script>



<style>

</style>
