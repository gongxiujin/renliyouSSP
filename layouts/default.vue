<template>
  <div style="position: relative;">
    <AppHeader />
    <div class="layer-parallax layer-parallax-homepageCN">
      <div class="parallax-outer" style="height: 100%">
        <div
          class="parallax-inner"
          style="height: 100%"
          :style="{ '--scroll-y': `${scrollY / 3}px` }"
        >
          <img
            class="parallax-svg parallax-svg-left"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzI0IDQzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyNCA0MzAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30KCS5zdDJ7ZmlsbDojRTY1RTI0O30KCS5zdDN7ZmlsbDojRkFGQUZBO30KCS5zdDR7ZmlsbDojRjRGNEY0O30KPC9zdHlsZT4KPGc+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii0zNi45NjUzIiB5MT0iMTYyLjIwNzkiIHgyPSIyMDQuNTAzIiB5Mj0iMjA0LjE3NzgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDE4NjQpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTo1LjAwMDAwMGUtMDIiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2MC43LDIwODR2NjkuN2MwLDEuNS0xLjcsMi41LTMsMS43TC0xMzYuMiwxOTg3Yy0wLjYtMC40LTEtMS0xLTEuN3YtNjkuNmMwLTEuNSwxLjctMi41LDMtMS43bDI5My45LDE2OC40CgkJQzE2MC4zLDIwODIuNywxNjAuNywyMDgzLjMsMTYwLjcsMjA4NHoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTkuMzIwMSIgeTE9IjMzMi45MjMxIiB4Mj0iMTAzLjAxMDIiIHkyPSIzNDcuMzAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAxODY0KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6My4wMDAwMDBlLTAyIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MS43LDIyMDN2NjkuN2MwLDEuNS0xLjcsMi41LTMsMS43bC0xMzIuNy03NmMtMC42LTAuNC0xLTEtMS0xLjdWMjEyN2MwLTEuNSwxLjctMi41LDMtMS43bDEzMi43LDc2CgkJQzgxLjMsMjIwMS43LDgxLjcsMjIwMi4zLDgxLjcsMjIwM3oiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01NS43LDQ4My44djcyYzAsMC44LTAuOCwxLjMtMS41LDAuOWwtMTQ2LjktODQuMmMtMC4zLTAuMi0wLjUtMC41LTAuNS0wLjl2LTcyYzAtMC44LDAuOC0xLjMsMS41LTAuOQoJCWwxNDYuOSw4NC4yQzU1LjUsNDgzLjEsNTUuNyw0ODMuNCw1NS43LDQ4My44eiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc0LjcsMTQ0NHY3NC4zbC03NC41LTQyLjdsLTM3LjItMjEuM1YxMzgwbDM3LjIsMjEuM0w3NC43LDE0NDR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTU3LjcsMTIxLjh2NzJjMCwwLjgtMC44LDEuMy0xLjUsMC45bC0yMDkuMy0xMjBjLTAuMy0wLjItMC41LTAuNS0wLjUtMC45di03MmMwLTAuOCwwLjgtMS4yLDEuNS0wLjkKCQlsMjA5LjMsMTE5LjlDMTU3LjUsMTIxLjEsMTU3LjcsMTIxLjQsMTU3LjcsMTIxLjh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNLTEwOCwzMDY1di03MmMwLTAuOCwwLjgtMS4zLDEuNS0wLjlsMTQ2LjksODQuMmMwLjMsMC4yLDAuNSwwLjUsMC41LDAuOXY3MmMwLDAuOC0wLjgsMS4zLTEuNSwwLjkKCQlsLTE0Ni45LTg0LjJDLTEwNy44LDMwNjUuNy0xMDgsMzA2NS40LTEwOCwzMDY1eiIvPgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTEwMy43LDI3MDkuMnY3MmMwLDAuOC0wLjgsMS4zLTEuNSwwLjlsLTI5NS45LTE2OS41Yy0wLjMtMC4yLTAuNS0wLjUtMC41LTAuOXYtNzJjMC0wLjgsMC44LTEuMywxLjUtMC45CgkJbDI5NS45LDE2OS41QzEwMy41LDI3MDguNSwxMDMuNywyNzA4LjgsMTAzLjcsMjcwOS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc1LjgsMTk5MS40djc0LjNMLTIyMiwxODk1di03NC4zTDc1LjgsMTk5MS40eiIvPgo8L2c+Cjwvc3ZnPgo="
            draggable="false"
          /><img
            class="parallax-svg parallax-svg-right"

            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzI0IDQzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyNCA0MzAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOiMxNDFFMjg7ZmlsbC1vcGFjaXR5OjMuMDAwMDAwZS0wMjt9Cgkuc3Qye2ZpbGw6I0Y0RjRGNDt9Cgkuc3Qze2ZpbGw6I0ZBRkFGQTt9Cgkuc3Q0e2ZpbGw6I0U2NUUyNDt9Cjwvc3R5bGU+CjxnPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5NC41MzcyIiB5MT0iNi42MDUyIiB4Mj0iNTY5Ljk3MzIiIHkyPSI1MzEuMTI1MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgMTg2NCkiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjQuMDAwMDAwZS0wMiIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE5LDIyOTcuOHYtNDA1LjdjMC0xLjUsMS43LTIuNSwzLTEuN0wzOTksMTk5MWwxNDAsNzkuNmMwLjYsMC4zLDEsMSwxLDEuN1YyNDc4YzAsMS41LTEuNywyLjUtMywxLjcKCQlsLTEzOC03OC41bC0xNzktMTAxLjhDMjE5LjQsMjI5OS4xLDIxOSwyMjk4LjUsMjE5LDIyOTcuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00ODUuOSwyNDA4Ljd2NjkuN2MwLDEuNS0xLjcsMi41LTMsMS43TDE4OSwyMzExLjdjLTAuNi0wLjQtMS0xLTEtMS43di02OS43YzAtMS41LDEuNy0yLjUsMy0xLjdMNDg0LjgsMjQwNwoJCUM0ODUuNSwyNDA3LjMsNDg1LjksMjQwNy45LDQ4NS45LDI0MDguN3oiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMTksMTA3OS42di03MmMwLTAuOCwwLjgtMS4zLDEuNS0wLjlsMjk1LjgsMTY5LjVjMC4zLDAuMiwwLjUsMC41LDAuNSwwLjl2NzJjMCwwLjgtMC44LDEuMy0xLjUsMC45CgkJbC0yOTUuOS0xNjkuNUMxMTkuMiwxMDgwLjMsMTE5LDEwODAsMTE5LDEwNzkuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMDAsMzA5LjZ2LTcyYzAtMC44LDAuOC0xLjIsMS41LTAuOWwxNDcuNCw4NC41bDc0LDQyLjRjMC4zLDAuMiwwLjUsMC41LDAuNSwwLjl2NzJjMCwwLjgtMC44LDEuMy0xLjUsMC45CgkJbC03My00MS44bC0xNDguNC04NUMyMDAuMiwzMTAuMywyMDAsMzEwLDIwMCwzMDkuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0yNzUsMzEzMC4ydi03NC4zbDE0OC45LDg1LjN2NzQuM0wyNzUsMzEzMC4yeiIvPgo8L2c+Cjwvc3ZnPgo="
            draggable="false"
          />
        </div>
      </div>
    </div>
    <slot />
    <AloneFooter />
    <el-tooltip placement="left" effect="light">
      <template #content>
        <div class="tooltip-main">
          <div class="phone">
            <img src="/images/phone.png" alt="" />
            <span>{{ $t('callUs') }}:</span>
          </div>
          <div class="phone-num">{{ $t('phoneNum') }}</div>
          <div class="phone">
            <img src="/images/wechat.png" alt="" />
            <span>{{ $t('wechatCode') }}:</span>
          </div>
          <img
            class="wechat-code"
            src="/images/wechat-code.png"
            alt=""
          />
        </div>
      </template>
      <div class="link-us">
        <img src="/images/link.png" alt="" />
        <span>{{ $t('contactUs') }}</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
  import { parallaxOffset } from '@/stores'
  import {storeToRefs} from "pinia";
  import { appStore } from "@/stores"
export default {
  data() {
    return {
      scrollY: 0,
    };
  },
  setup(){
    const { height } = storeToRefs(parallaxOffset())
    const useAppStore = appStore()
    return {
      height,
      useAppStore
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    })
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - scrollTop;
      // 714是手机端banner高度
      if (scrollTop > 14 && scrollBottom > 10) {
        this.useAppStore.isShowMobileBlock = true
      } else {
        this.useAppStore.isShowMobileBlock = false
      }
    },
  },
};
</script>

<style lang="scss">
@media (min-width: $mobile-width) {
  body {
    min-width: 1200px;
  }
}
.layer-parallax {
  position: absolute;
  top: -165px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
  .parallax-svg {
    z-index: 2;
    width: 325px;
    position: absolute;
    padding-top: v-bind(height);
    pointer-events: none;
    transform: translateY(var(--scroll-y, 0px));

    &.parallax-svg-right {
      right: 0;
    }
  }
}
@media (max-width: $mobile-width) {
  .layer-parallax {
    display: none;
  }
}

.main {
  background: #fff;
  width: 100%;
  @media (min-width: $mobile-width) {
    min-width: 1366px;
  }
  .link-us {
    display: none !important;
  }
}
li.dropdown-item {
  &:hover {
    background-color: f4f4f4 !important;
    color: $primary-color !important;
  }
  &:focus {
    background-color: f4f4f4 !important;
    color: $primary-color !important;
  }
}
.el-sub-menu__title:hover{
  background-color: #fff !important;
}
.el-sub-menu__title{
  &:focus{
    background-color: f4f4f4 !important;
  }
  &:active {
    background-color: f4f4f4 !important;
  }

}
.tooltip-main {
  padding: 20px;
  width: 180px;
  height: 200px;
  background: #ffffff;
  .phone {
    display: flex;
    margin-bottom: 9px;
    font-family: 思源黑体;
    font-size: 14px;
    font-weight: normal;
    line-height: 14px;
    color: #212121;
    img {
      width: 15px;
      height: 15px;
      margin-right: 7px;
    }
  }
  .phone-num {
    padding-left: 20px;
    font-family: HarmonyOS Sans;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    color: #777777;
    margin-bottom: 19px;
  }
  .wechat-code {
    width: 74px;
    height: 74px;
    margin-left: 20px;
  }
}
.link-us {
  @media (max-width: $mobile-width) {
    display: none !important;
  }
  position: fixed;
  right: 32px;
  bottom: 64px;
  width: 34px;
  height: 120px;
  padding: 10px 9px;
  z-index: 1000;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.16);
  font-family: 思源黑体;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  text-align: center;
  color: #212121;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    margin-bottom: 10px;
  }
}
</style>
