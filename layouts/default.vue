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
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzI0IDQzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyNCA0MzAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQzRDNEM0O2ZpbHRlcjp1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyKTt9DQoJLnN0MXttYXNrOnVybCgjbWFzazBfMV8pO30NCgkuc3Qye2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDN7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9DQoJLnN0NHtmaWxsOiNFNjVFMjQ7fQ0KCS5zdDV7ZmlsbDojRkFGQUZBO30NCgkuc3Q2e2ZpbGw6I0Y0RjRGNDt9DQo8L3N0eWxlPg0KPGRlZnM+DQoJPGZpbHRlciBpZD0iQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTIyMiIgeT0iMC44IiB3aWR0aD0iMzgyLjciIGhlaWdodD0iMjg0Ni43Ij4NCgkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4NCgk8L2ZpbHRlcj4NCjwvZGVmcz4NCjxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9Ii0yMjIiIHk9IjAuOCIgd2lkdGg9IjM4Mi43IiBoZWlnaHQ9IjI4NDYuNyIgaWQ9Im1hc2swXzFfIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzI0LDBIMHY0MzAwaDMyNFYweiIvPg0KPC9tYXNrPg0KPGcgY2xhc3M9InN0MSI+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTM2Ljk2NiIgeTE9IjI1NzYuNDYzNCIgeDI9IjIwNC41MDIzIiB5Mj0iMjUzNC40OTM0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNDMwMCkiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTo1LjAwMDAwMGUtMDIiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE2MC43LDE3ODEuM3Y2OS43YzAsMS41LTEuNywyLjUtMywxLjdsLTI5My45LTE2OC40Yy0wLjYtMC40LTEtMS0xLTEuN1YxNjEzYzAtMS41LDEuNy0yLjUsMy0xLjcNCgkJbDI5My45LDE2OC40QzE2MC4zLDE3ODAsMTYwLjcsMTc4MC42LDE2MC43LDE3ODEuM3oiLz4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItOS4zMjMiIHkxPSIyNDA1LjcyOTIiIHgyPSIxMDMuMDA3MyIgeTI9IjIzOTEuMzQ5NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQzMDApIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6My4wMDAwMDBlLTAyIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik04MS43LDE5MDAuM3Y2OS43YzAsMS41LTEuNywyLjUtMywxLjdsLTEzMi43LTc2Yy0wLjYtMC40LTEtMS0xLTEuN3YtNjkuN2MwLTEuNSwxLjctMi41LDMtMS43bDEzMi43LDc2DQoJCUM4MS4zLDE4OTksODEuNywxODk5LjYsODEuNywxOTAwLjN6Ii8+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTU1LjcsNDgzLjh2NzJjMCwwLjgtMC44LDEuMy0xLjUsMC45bC0xNDYuOS04NC4yYy0wLjMtMC4yLTAuNS0wLjUtMC41LTAuOXYtNzJjMC0wLjgsMC44LTEuMywxLjUtMC45DQoJCWwxNDYuOSw4NC4yQzU1LjUsNDgzLjEsNTUuNyw0ODMuNCw1NS43LDQ4My44eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik03NC43LDExNDEuM3Y3NC4zbC03NC41LTQyLjdsLTM3LjItMjEuM3YtNzQuM2wzNy4yLDIxLjNMNzQuNywxMTQxLjN6Ii8+DQoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTE1Ny43LDEyMS44djcyYzAsMC44LTAuOCwxLjMtMS41LDAuOUwtNTMuMSw3NC43Yy0wLjMtMC4yLTAuNS0wLjUtMC41LTAuOXYtNzJjMC0wLjgsMC44LTEuMiwxLjUtMC45DQoJCWwyMDkuMywxMTkuOUMxNTcuNSwxMjEuMSwxNTcuNywxMjEuNCwxNTcuNywxMjEuOHoiLz4NCgk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNLTEwOCwyNzYyLjN2LTcyYzAtMC44LDAuOC0xLjMsMS41LTAuOWwxNDYuOSw4NC4yYzAuMywwLjIsMC41LDAuNSwwLjUsMC45djcyYzAsMC44LTAuOCwxLjMtMS41LDAuOQ0KCQlsLTE0Ni45LTg0LjJDLTEwNy44LDI3NjMtMTA4LDI3NjIuNy0xMDgsMjc2Mi4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0xMDMuNywyNDA2LjV2NzJjMCwwLjgtMC44LDEuMy0xLjUsMC45bC0yOTUuOS0xNjkuNWMtMC4zLTAuMi0wLjUtMC41LTAuNS0wLjl2LTcyYzAtMC44LDAuOC0xLjMsMS41LTAuOQ0KCQlsMjk1LjksMTY5LjVDMTAzLjUsMjQwNS44LDEwMy43LDI0MDYuMSwxMDMuNywyNDA2LjV6Ii8+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTc1LjgsMTY4OC43djc0LjNMLTIyMiwxNTkyLjNWMTUxOEw3NS44LDE2ODguN3oiLz4NCjwvZz4NCjwvc3ZnPg0K"
            draggable="false"
          /><img
            class="parallax-svg parallax-svg-right"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzI0IDQzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyNCA0MzAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQzRDNEM0O2ZpbHRlcjp1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyKTt9DQoJLnN0MXttYXNrOnVybCgjbWFzazBfMV8pO30NCgkuc3Qye2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDN7ZmlsbDojMTQxRTI4O2ZpbGwtb3BhY2l0eTozLjAwMDAwMGUtMDI7fQ0KCS5zdDR7ZmlsbDojRjRGNEY0O30NCgkuc3Q1e2ZpbGw6I0ZBRkFGQTt9DQoJLnN0NntmaWxsOiNFNjVFMjQ7fQ0KPC9zdHlsZT4NCjxkZWZzPg0KCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjExOSIgeT0iMjM2LjYiIHdpZHRoPSI0MjEiIGhlaWdodD0iMjY3Ni4yIj4NCgkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4NCgk8L2ZpbHRlcj4NCjwvZGVmcz4NCjxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjExOSIgeT0iMjM2LjYiIHdpZHRoPSI0MjEiIGhlaWdodD0iMjY3Ni4yIiBpZD0ibWFzazBfMV8iPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjQsMEgwdjQzMDBoMzI0VjB6Ii8+DQo8L21hc2s+DQo8ZyBjbGFzcz0ic3QxIj4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5NC41NDciIHkxPSIyNzMyLjA3ODkiIHgyPSI1NjkuOTgzIiB5Mj0iMjIwNy41NTg4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNDMwMCkiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTo0LjAwMDAwMGUtMDIiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTIxOSwxOTk1LjF2LTQwNS43YzAtMS41LDEuNy0yLjUsMy0xLjdsMTc3LDEwMC42bDE0MCw3OS42YzAuNiwwLjMsMSwxLDEsMS43djQwNS43YzAsMS41LTEuNywyLjUtMywxLjcNCgkJbC0xMzgtNzguNWwtMTc5LTEwMS44QzIxOS40LDE5OTYuNCwyMTksMTk5NS44LDIxOSwxOTk1LjF6Ii8+DQoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTQ4NS45LDIxMDZ2NjkuN2MwLDEuNS0xLjcsMi41LTMsMS43TDE4OSwyMDA5Yy0wLjYtMC40LTEtMS0xLTEuN3YtNjkuN2MwLTEuNSwxLjctMi41LDMtMS43bDI5My44LDE2OC40DQoJCUM0ODUuNSwyMTA0LjYsNDg1LjksMjEwNS4yLDQ4NS45LDIxMDZ6Ii8+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTExOSwxMDc5LjZ2LTcyYzAtMC44LDAuOC0xLjMsMS41LTAuOWwyOTUuOCwxNjkuNWMwLjMsMC4yLDAuNSwwLjUsMC41LDAuOXY3MmMwLDAuOC0wLjgsMS4zLTEuNSwwLjkNCgkJbC0yOTUuOS0xNjkuNUMxMTkuMiwxMDgwLjMsMTE5LDEwODAsMTE5LDEwNzkuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjAwLDMwOS42di03MmMwLTAuOCwwLjgtMS4yLDEuNS0wLjlsMTQ3LjQsODQuNWw3NCw0Mi40YzAuMywwLjIsMC41LDAuNSwwLjUsMC45djcyYzAsMC44LTAuOCwxLjMtMS41LDAuOQ0KCQlsLTczLTQxLjhsLTE0OC40LTg1QzIwMC4yLDMxMC4zLDIwMCwzMTAsMjAwLDMwOS42eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0yNzUsMjgyNy41di03NC4zbDE0OC45LDg1LjN2NzQuM0wyNzUsMjgyNy41eiIvPg0KPC9nPg0KPC9zdmc+DQo="
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
            <img src="../assets/images/phone.png" alt="" />
            <span>联系电话:</span>
          </div>
          <div class="phone-num">17060666669</div>
          <div class="phone">
            <img src="../assets/images/wechat.png" alt="" />
            <span>微信扫码:</span>
          </div>
          <img
            class="wechat-code"
            src="../assets/images/wechat-code.png"
            alt=""
          />
        </div>
      </template>
      <div class="link-us">
        <img src="../assets/images/link.png" alt="" />
        <span>联系我们</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss">
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
    padding-top: 940px;
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
.tooltip-main {
  padding: 20px;
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
    margin-bottom: 21px;
  }
  .wechat-code {
    width: 74px;
    height: 74px;
    margin-left: 20px;
  }
}
.link-us {
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
