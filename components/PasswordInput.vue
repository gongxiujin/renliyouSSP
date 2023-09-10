<template>
  <div>
    <el-form-item :prop="prop">
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
  props: ["password", "placeholder", "prop"],
  emits: ["update:password"],
  data() {
    return {
      localPassword: this.password,
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
