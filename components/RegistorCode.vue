<template>
  <el-form-item>
    <el-input
      v-model="localPhoneCode"
      :placeholder="$t('login.code')"
      @input="changePhoneCode"
    ></el-input>
    <el-button
      class="bind_code_gain"
      :disabled="isCodeBtnDisabled"
      @click="sendCode"
      link
      >{{ codeBtnText }}</el-button
    >
  </el-form-item>
</template>

<script>
export default {
  props: ["phoneCode"],
  emits: ["update:phoneCode"],
  data() {
    return {
      localPhoneCode: this.phoneCode,
      isCodeBtnDisabled: false,
      codeBtnText: "",
      defaultCodeBtnText: this.$t('login.sendCode'),
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
<style lang="scss">
.bind_code_gain {
  position: absolute;
  top: calc(50% - 9px);
  right: 10px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #20aee5;
  line-height: 18px;
  cursor: pointer;
  padding-left: 10px;
  border-left: 1px solid #d8d8d8;
  span {
    line-height: 14px;
    color: #999999;
  }
}
</style>
