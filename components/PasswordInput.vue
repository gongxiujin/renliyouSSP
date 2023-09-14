<template>
  <div>
    <el-form-item :prop="prop">
      <el-input
        :placeholder="placeholder"
        v-model="localPassword"
        @input="changePassword"
        show-password
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
