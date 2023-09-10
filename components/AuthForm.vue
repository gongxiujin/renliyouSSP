<template>
  <div>
    <!-- 注册表单 -->
    <div v-if="formType === 'register'">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input placeholder="手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <RegistorCode v-model:formType="form.registerCode" />
        <el-form-item>
          <el-input placeholder="邮箱" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码"
            type="password"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('register')"
            >注册</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button @click="changeFormType('login')">已有账号去登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 重置密码表单 -->
    <div v-if="formType === 'resetPassword'">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input placeholder="邮箱" v-model="form.email"></el-input>
        </el-form-item>
        <!-- <el-form-item label="新密码">
          <el-input type="password" v-model="form.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="form.confirmPassword"></el-input>
        </el-form-item> -->
        <PasswordInput v-model:password="form.newPassword" v-model:placeholder="paswdPlaceholder" />
        <PasswordInput v-model:password="form.confirmPassword" v-model:placeholder="cpaswdPlaceholder" />
        <RegistorCode v-model:phoneCode="form.registerCode" />
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('resetPassword')"
            >重置密码</el-button
          >
          <el-button @click="changeFormType('login')">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["formType"],
  emits: ["update:formType"],
  data() {
    return {
      paswdPlaceholder: "新密码",
      cpaswdPlaceholder: "确认密码",
      form: {
        phone: "",
        registerCode: "",
        email: "",
        password: "",
        newPassword: "",
        confirmPassword: "",
        verificationCode: "",
      },
    };
  },
  methods: {
    changeFormType(newFormType) {
      this.$emit("update:formType", newFormType);
    },
    handleSubmit(type) {
      // 提交表单的逻辑
      console.log(this.form, type);
    },
  },
};
</script>

<style>
/* 你的样式 */
</style>
