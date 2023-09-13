<template>
  <div style="position: relative">
    <AppHeader />
    <div class="layer-parallax layer-parallax-homepageCN">
      <div class="parallax-outer" style="height: 100%">
        <div class="parallax-inner" style="height: 100%">
          <img
            class="parallax-svg parallax-svg-left"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjQzMDAiIHZpZXdCb3g9IjAgMCAzMjQgNDMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzI0IiBoZWlnaHQ9IjQzMDAiPgo8cGF0aCBkPSJNMzI0IDBIMFY0MzAwSDMyNFYwWiIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTE2MC43IDE3ODEuMzRWMTg1MS4wM0MxNjAuNyAxODUyLjU3IDE1OS4wMzkgMTg1My41MyAxNTcuNzA1IDE4NTIuNzdMLTEzNi4xNDUgMTY4NC40MUMtMTM2Ljc2NyAxNjg0LjA1IC0xMzcuMTUgMTY4My4zOSAtMTM3LjE1IDE2ODIuNjdWMTYxMi45OEMtMTM3LjE1IDE2MTEuNDUgLTEzNS40ODkgMTYxMC40OCAtMTM0LjE1NiAxNjExLjI1TDE1OS42OTQgMTc3OS42MUMxNjAuMzE2IDE3NzkuOTYgMTYwLjcgMTc4MC42MiAxNjAuNyAxNzgxLjM0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNODEuNyAxOTAwLjM0VjE5NzAuMDNDODEuNyAxOTcxLjU3IDgwLjAzOTEgMTk3Mi41MyA3OC43MDU3IDE5NzEuNzdMLTUzLjk5NDMgMTg5NS43NEMtNTQuNjE2MyAxODk1LjM4IC01NSAxODk0LjcyIC01NSAxODk0VjE4MjQuMzFDLTU1IDE4MjIuNzggLTUzLjMzOTEgMTgyMS44MSAtNTIuMDA1NyAxODIyLjU4TDgwLjY5NDMgMTg5OC42MUM4MS4zMTYzIDE4OTguOTYgODEuNyAxODk5LjYyIDgxLjcgMTkwMC4zNFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTU1LjcwMDQgNDgzLjc2MVY1NTUuNzU2QzU1LjcwMDQgNTU2LjUyNCA1NC44Njk5IDU1Ny4wMDYgNTQuMjAzMiA1NTYuNjI0TC05Mi43MjE3IDQ3Mi40NDVDLTkzLjAzMjggNDcyLjI2NiAtOTMuMjI0NiA0NzEuOTM1IC05My4yMjQ2IDQ3MS41NzdWMzk5LjU4MkMtOTMuMjI0NiAzOTguODE0IC05Mi4zOTQxIDM5OC4zMzIgLTkxLjcyNzUgMzk4LjcxNEw1NS4xOTc1IDQ4Mi44OTNDNTUuNTA4NSA0ODMuMDcyIDU1LjcwMDQgNDgzLjQwMyA1NS43MDA0IDQ4My43NjFaIiBmaWxsPSIjRkYwMDE3Ii8+CjxwYXRoIGQ9Ik03NC42OTM3IDIwMDkuMjdWMjA4My41N0wwLjIzMTI0NyAyMDQwLjlMLTM3IDIwMTkuNTdWMTk0NS4yN0wwLjIzMTI0NyAxOTY2LjZMNzQuNjkzNyAyMDA5LjI3WiIgZmlsbD0iI0ZGMDAxNyIvPgo8cGF0aCBkPSJNMTU3LjcgMTIxLjc2MVYxOTMuNzU2QzE1Ny43IDE5NC41MjQgMTU2Ljg3IDE5NS4wMDYgMTU2LjIwMyAxOTQuNjI0TC01My4xNDcgNzQuNjc4OEMtNTMuNDU4IDc0LjUwMDYgLTUzLjY0OTkgNzQuMTY5NiAtNTMuNjQ5OSA3My44MTExVjEuODE2MThDLTUzLjY0OTkgMS4wNDc4NSAtNTIuODE5NCAwLjU2NjU0NCAtNTIuMTUyOCAwLjk0ODVMMTU3LjE5NyAxMjAuODkzQzE1Ny41MDggMTIxLjA3MiAxNTcuNyAxMjEuNDAzIDE1Ny43IDEyMS43NjFaIiBmaWxsPSIjRkFGQUZBIi8+CjxwYXRoIGQ9Ik0tMTA4IDM2MzAuMzRWMzU1OC4zNUMtMTA4IDM1NTcuNTggLTEwNy4xNyAzNTU3LjEgLTEwNi41MDMgMzU1Ny40OEw0MC40MjIxIDM2NDEuNjZDNDAuNzMzMiAzNjQxLjg0IDQwLjkyNSAzNjQyLjE3IDQwLjkyNSAzNjQyLjUzVjM3MTQuNTJDNDAuOTI1IDM3MTUuMjkgNDAuMDk0NSAzNzE1Ljc3IDM5LjQyNzkgMzcxNS4zOUwtMTA3LjQ5NyAzNjMxLjIxQy0xMDcuODA4IDM2MzEuMDMgLTEwOCAzNjMwLjcgLTEwOCAzNjMwLjM0WiIgZmlsbD0iI0Y0RjRGNCIvPgo8cGF0aCBkPSJNMTAzLjcgMzI3NC41VjMzNDYuNUMxMDMuNyAzMzQ3LjI2IDEwMi44NjkgMzM0Ny43NSAxMDIuMjAzIDMzNDcuMzZMLTE5My42NDggMzE3Ny44NkMtMTkzLjk1OSAzMTc3LjY4IC0xOTQuMTUgMzE3Ny4zNSAtMTk0LjE1IDMxNzYuOTlWMzEwNUMtMTk0LjE1IDMxMDQuMjMgLTE5My4zMiAzMTAzLjc1IC0xOTIuNjUzIDMxMDQuMTNMMTAzLjE5NyAzMjczLjYzQzEwMy41MDggMzI3My44MSAxMDMuNyAzMjc0LjE0IDEwMy43IDMyNzQuNVoiIGZpbGw9IiNGNEY0RjQiLz4KPHBhdGggZD0iTTc1Ljg1IDI1NTYuNjVWMjYzMC45NUwtMjIyIDI0NjAuM1YyMzg2TDc1Ljg1IDI1NTYuNjVaIiBmaWxsPSIjRkYwMDE3Ii8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ii0xNy4xNTA0IiB5MT0iMTYwOS41MyIgeDI9IjIyNC4zMTgiIHkyPSIxNjUxLjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iMC4wNzQ3MDI1IiB5MT0iMTgyMC44NiIgeDI9IjExMi40MDUiIHkyPSIxODM1LjI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuMDMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
            draggable="false"
          /><img
            class="parallax-svg parallax-svg-right"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjQzMDAiIHZpZXdCb3g9IjAgMCAzMjQgNDMwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzI0IiBoZWlnaHQ9IjQzMDAiPgo8cGF0aCBkPSJNMzI0IDBIMFY0MzAwSDMyNFYwWiIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTIxOSAxOTk1LjA2VjE1ODkuMzJDMjE5IDE1ODcuNzkgMjIwLjY1NSAxNTg2LjgyIDIyMS45ODggMTU4Ny41OEwzOTkgMTY4OC4yMUw1MzkuMDA3IDE3NjcuODFDNTM5LjYzMiAxNzY4LjE2IDU0MC4wMTkgMTc2OC44MyA1NDAuMDE5IDE3NjkuNTVWMjE3NS4yOEM1NDAuMDE5IDIxNzYuODIgNTM4LjM2MyAyMTc3Ljc4IDUzNy4wMyAyMTc3LjAyTDM5OSAyMDk4LjU1TDIyMC4wMTEgMTk5Ni44QzIxOS4zODYgMTk5Ni40NCAyMTkgMTk5NS43OCAyMTkgMTk5NS4wNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTQ4NS44NSAyOTcxLjM2VjMwNDEuMDVDNDg1Ljg1IDMwNDIuNTkgNDg0LjE4OSAzMDQzLjU1IDQ4Mi44NTYgMzA0Mi43OEwxODkuMDA2IDI4NzQuNDNDMTg4LjM4NCAyODc0LjA3IDE4OCAyODczLjQxIDE4OCAyODcyLjY5VjI4MDNDMTg4IDI4MDEuNDYgMTg5LjY2MSAyODAwLjUgMTkwLjk5NCAyODAxLjI3TDQ4NC44NDQgMjk2OS42MkM0ODUuNDY2IDI5NjkuOTggNDg1Ljg1IDI5NzAuNjQgNDg1Ljg1IDI5NzEuMzZaIiBmaWxsPSIjMTQxRTI4IiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPHBhdGggZD0iTTExOSAxOTQ0Ljk5VjE4NzNDMTE5IDE4NzIuMjMgMTE5LjgzIDE4NzEuNzUgMTIwLjQ5NyAxODcyLjEzTDQxNi4zNDcgMjA0MS42M0M0MTYuNjU4IDIwNDEuODEgNDE2Ljg1IDIwNDIuMTQgNDE2Ljg1IDIwNDIuNVYyMTE0LjVDNDE2Ljg1IDIxMTUuMjYgNDE2LjAyIDIxMTUuNzUgNDE1LjM1MyAyMTE1LjM2TDExOS41MDMgMTk0NS44NkMxMTkuMTkyIDE5NDUuNjggMTE5IDE5NDUuMzUgMTE5IDE5NDQuOTlaIiBmaWxsPSIjRjRGNEY0Ii8+CjxwYXRoIGQ9Ik0yMDAgMzA5LjYwMlYyMzcuNjA3QzIwMCAyMzYuODM5IDIwMC44MyAyMzYuMzU4IDIwMS40OTcgMjM2Ljc0TDM0OC45MjUgMzIxLjIwN0w0MjIuODg1IDM2My41ODFDNDIzLjE5NiAzNjMuNzU5IDQyMy4zODggMzY0LjA5IDQyMy4zODggMzY0LjQ0OVY0MzYuNDQ0QzQyMy4zODggNDM3LjIxMiA0MjIuNTU3IDQzNy42OTQgNDIxLjg5IDQzNy4zMTJMMzQ4LjkyNSAzOTUuNTA3TDIwMC41MDMgMzEwLjQ3QzIwMC4xOTIgMzEwLjI5MiAyMDAgMzA5Ljk2MSAyMDAgMzA5LjYwMloiIGZpbGw9IiNGQUZBRkEiLz4KPHBhdGggZD0iTTI3NSAzNjkyLjkyVjM2MTguNjJMNDIzLjkyNSAzNzAzLjk1VjM3NzguMjVMMjc1IDM2OTIuOTJaIiBmaWxsPSIjRkYwMDE3Ii8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEzNC4yODciIHkxPSIxNTMxLjkiIHgyPSI2MDkuNzIzIiB5Mj0iMjA1Ni40MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjA0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
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

<script></script>

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
    position: absolute;
    padding-top: 440px;
    pointer-events: none;
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
}
@media (max-width: $mobile-width) {
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
