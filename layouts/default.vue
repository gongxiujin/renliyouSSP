<template>
  <div style="position: relative">
    <AppHeader />
    <slot />
    <AloneFooter />
    <el-tooltip placement="left" effect="light">
      <template #content>
		<div class="tooltip-main">
			<div class="phone">
				<img src="../assets/images/phone.png" alt="">
				<span>联系电话:</span>
			</div>
			<div class="phone-num">17060666669</div>
			<div class="phone">
				<img src="../assets/images/wechat.png" alt="">
				<span>微信扫码:</span>
			</div>
			<img class="wechat-code" src="../assets/images/wechat-code.png" alt="">
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

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .link-us {
    display: none !important;
  }
}
.tooltip-main {
	padding: 20px;
	background: #FFFFFF;
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
