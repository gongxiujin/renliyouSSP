<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ $t("language") }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="dropdown-item"
          @click="dropdownClick(locale.code)"
        >
          {{ locale.name || locale.code }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
import { useCookies } from "vue3-cookies";
export default {
  setup() {
    const { cookies } = useCookies();
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();

    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });
    return {
      cookies,
      switchLocalePath,
      availableLocales
    };
  },
  components: {
    ArrowDown,
  },
  methods: {
    dropdownClick(lang) {
      this.$i18n.locale = lang;
      switchLocalePath(locale.code);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  color: #222222;
  font-size: 14px;
  line-height: 22px;
  &:hover {
    color: $primary-color;
  }
  &:focus {
    outline: none;
  }
}
.el-menu-item {
  font-size: 1rem !important;
}
</style>
