<template>
  <el-form-item>
    <el-input
      v-model="localPhoneCode"
      placeholder="验证码"
      @input="changePhoneCode"
    >
      <template #append>
        <el-button
          type="primary"
          :disabled="isCodeBtnDisabled"
          @click="sendCode"
          text
          >{{ codeBtnText }}</el-button
        >
      </template>
    </el-input>
  </el-form-item>
</template>

<script lang="ts">
export default {
  props: ["phoneCode"],
  emits: ["update:phoneCode"],
  data() {
    return {
      localPhoneCode: this.phoneCode,
      isCodeBtnDisabled: false,
      codeBtnText: "",
      defaultCodeBtnText: "发送验证码",
    };
  },
  created() {
    this.codeBtnText = this.defaultCodeBtnText;
  },
  methods: {
    changePhoneCode() {
      this.$emit("update:phoneCode", this.localPhoneCode);
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
          this.codeBtnText = this.defaultCodeBtnText;
        }
      }, 1000);
    },
  },
  watch: {
    phoneCode(newVal) {
      this.localPhoneCode = newVal;
    },
  },
};
</script>
