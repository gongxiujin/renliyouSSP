<template>
	<div style="width: 100%;">
        <!-- 丰富的商业化资源 -->
		<div class="pc">
			<div class="resource-bar">
				<div class="title-bar">
					<h2 class="resource-title heavy-text">{{ data.title.body.static }}</h2>
					<p class="resource-desc normal-text">{{ data.text.body.static }}</p>
				</div>
				<div class="resource-block" >
					<div class="resource-item" v-for="(item, index) in data.content" :key="index">
						<img class="item-img" :src="item.image.body.static" alt="">
						<div class="item-text">
							<p class="text-content medium-text">{{item.title.body.static}}</p>
							<p class="text-desc normal-text">{{ item.text.body.static }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mobile">
			<div class="m-resource-bar">
				<div class="title-bar">
					<h2 class="resource-title heavy-text">{{ data.title.body.static }}</h2>
					<p class="resource-desc normal-text">{{ data.text.body.static }}</p>
				</div>
				<div class="resource-block" >
					<div class="resource-item" v-for="(item, index) in data.content" :key="index">
						<img class="item-img" :src="item.image.body.static" alt="">
						<div class="item-text">
							<p class="text-content medium-text">{{item.title.body.static}}</p>
							<p class="text-desc normal-text">{{ item.text.body.static }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
const data = ref(tm('home').resource);
</script>
<style lang="scss" scoped>
	@media (max-width: $mobile-width) {
		.pc {
			display: none !important;
		}
		.mobile {
			width: 100%;
			display: block !important;
		}
	}
	.mobile {
		display: none;
	}
    .resource-bar {
		width: 100%;
		height: 610px;
		padding-top: 80px;
		background: #F8F8F8;
		.title-bar {
			min-width: 1200px;
			text-align: center;
			.resource-title {
				font-size: 36px;
				font-weight: 900;
				line-height: 38px;
				text-align: center;
				color: #222222;
			}
			.resource-desc {
				margin-top: 14px;
				font-family: Source Han Sans CN;
				font-size: 16px;
				font-weight: normal;
				line-height: 38px;
				color: #777777;
			}
		}
		.resource-block {
			width: 1200px;
			margin: 56px auto 0;
			display: flex;
			flex-wrap: wrap;
			.resource-item {
				width: 592px;
				height: 146px;
				padding: 24px 32px;
				display: flex;
				align-items: center;
				.item-img {
					width: 96px;
					height: 96px;
					min-width: 96px;
				}
				.item-text {
					padding: 16px 0 16px 8px;
					.text-content {
						font-weight: 500;
						font-size: 26px;
						line-height: 26px;
						color: #222;
					}
					.text-desc {
						font-weight: 400;
						font-size: 16px;
						line-height: 24px;
						margin-top: 8px;
						color: #777;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
						overflow: hidden;
						word-break: break-all;
					}
				}
			}
		}
	}
	.m-resource-bar {
		width: 100%;
		height: 657px;
		padding-top: 56px;
		background: #F8F8F8;
		.title-bar {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.resource-title {
				font-size: 24px;
				font-weight: 900;
				line-height: 16px;
				text-align: center;
				color: #222222;
			}
			.resource-desc {
				font-size: 14px;
				font-weight: normal;
				line-height: 38px;
				color: #777777;
			}
		}
		.resource-block {
			width: 100%;
			margin: 15px auto 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.resource-item {
				width: 185px;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 20px;
				.item-img {
					width: 86px;
					height: 86px;
					min-width: 86px;
				}
				.item-text {
					width: 164px;
					text-align: center;
					.text-content {
						font-weight: 700;
						font-size: 18px;
						line-height: 26px;
						color: #222;
					}
					.text-desc {
						font-weight: 400;
						font-size: 13px;
						line-height: 20px;
						margin-top: 4px;
						color: #666;
						text-align: left;
						padding: 0 20px;
					}
				}
			}
		}
	}
</style>
