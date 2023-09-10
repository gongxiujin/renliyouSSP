<template>
	<!-- 移动变现 -->
	<div>
		<div class="banner-top"></div>
		<!-- 移动APP -->
		<ProductAppSlide></ProductAppSlide>
		<!-- 移动WAP站 -->
		<ProductWap></ProductWap>
		<!-- 安全高效的生态体系，免除后顾之忧 -->
		<ProductSystem></ProductSystem>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
  .banner-top {
    min-width: 100% !important;
  }
}
	.banner-top {
		width: 100%;
		min-width: 1200px;
		height: 434px;
		background-image: url('../../assets/images/product/appBanner.png');
		background-size: 100% 100%;
		position: relative;
	}

	.yuyue-btn {
		background-color: #17e5e0;
		color: #12205B;
		padding: 5px;
		padding: 8px 25px;
		border-radius: 20px;
	}

	.td-box {
		background-color: #fff;
		padding:3rem 2rem;
		box-shadow: 0px 4px 14px 0px #0b28741a;
		overflow: hidden;
		color: #6F748A;
		line-height: 1.75;
		border-radius: 5px;

		.title {
			color: #12205B;
			font-weight: bold;
			font-size: 20px;
			margin: 1rem 0;
		}
	}
	.sec-top{
		position: relative;
		padding-left: 20px;
		color: #888;
		font-size: 14px;
		.title{
			color: #12205B;
			font-weight: bold;
			font-size: 1.6rem;
			margin-bottom: 5px;
		}
		&:before{
			content: '';
			background-color: #17E5E0;
			display: block;
			width: 10px;
			height: 4rem;
			border-radius: 50px;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
