<template>
  <div>
    <el-form-item :rules="[{ validator: validateInput, trigger: 'blur' }]">
      <el-input
        :placeholder="placeholder"
        type="password"
        v-model="localPassword"
        @input="changePassword"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script >
export default {
  props: ["password", "placeholder"],
  emits: ["update:password", "update:placeholder"],
  data() {
    var validateInput = (rule, value, callback) => {
      console.log("callback");
      const lengthValid = value.length >= 8 && value.length <= 20;
      const patterns = [
        /[A-Z]/, // 大写字母
        /[a-z]/, // 小写字母
        /\d/, // 数字
        /\W/, // 特殊字符
      ];
      const matchCount = patterns.reduce(
        (count, pattern) => count + pattern.test(value),
        0
      );

      if (lengthValid && matchCount >= 3) {
        callback();
      } else {
        callback(
          new Error(
            "密码必须包含大写字母、小写字母、数字、特殊符号里的3种格式,长度8-20位"
          )
        );
      }
    }
    return {
      localPassword: this.password,
      // rules: {
      //   localPassword: [{ validator: validateInput, trigger: "blur" }],
      // },
    };
  },
  methods: {
    changePassword() {
      this.$emit("update:password", this.localPassword);
    },
  },
  watch: {
    password(newVal) {
      this.localPassword = newVal;
    },
  },
};
</script>


<style>
</style>
