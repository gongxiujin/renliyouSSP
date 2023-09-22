<template>
	<nav class="nav-bar">
		<ul class="nav">
			<li v-for="(nav, index) in navList" :key="index">
				<div class="nav-item">
					<div class="nav-item-title">
						<nuxt-link :class="{ 'active': routePath == nav.link }" :to="nav.link">
							{{ $t('navList.'+nav.key) }}</nuxt-link>
					</div>
					<!-- 下拉菜单 -->
					<div v-if="nav.children" class="dropdown-content">
						<div class="dropdown-menu">
							<div v-for="(navChildren, navChildrenIndex) in nav.children" class="menuItem"
								:key="navChildrenIndex">
								<nuxt-link :to="navChildren.link">{{ $t('navList.'+navChildren.key) }}</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<!-- 移动端 -->
		<!-- <ul class="nav-m" :class="{ 'collapse': isCollapse }">
			<li v-for="(nav, index) in data" :key="index">
				<nuxt-link :class="{ 'active': routePath == nav.link }" :to="nav.link">{{ nav.name }}
				</nuxt-link>
			</li>
		</ul>
		<button @click="isCollapse ? isCollapse = false : isCollapse = true">三</button> -->
	</nav>
</template>

<script setup>
const route = useRoute()
const {
	data
} = defineProps(['data'])
const navList = ref([
  { name: "首页", link: "/", key: "home" },
  {
    name: "产品中心",
    link: "#",
    key: "proCenter",
    children: [
      { name: "移动变现", link: "/products/app", key: "app" },
      { name: "PC变现", link: "/products/pc", key: "pc" },
      { name: "数据增长", link: "/products/dataGrowth", key: "dataGrowth" },
    ],
  },
  { name: "解决方案", link: "/solutions", key: "solutions" },
  { name: "关于我们", link: "/aboutUs", key:  "aboutUs"},
]);

const routePath = ref('')
watch(() => route.path, (path) => {
	routePath.value = path
})
onMounted(() => {
	routePath.value = route.path
})
</script>

<style lang="scss" scoped>
@media (max-width: $mobile-width) {
	.nav-bar {
		.nav {
			display: none !important;
		}

		.nav-m {
			display: block !important;
		}

		button {
			display: block !important;
		}
	}
}

.nav-m {
	position: absolute;
	z-index: 99;
	background-color: #fff;
	left: 0;
	right: 0;
	top: $header-height;
	padding: 1rem;
	overflow: hidden;

	a {
		padding: 0.8rem 1rem;
		display: inline-block;
	}

	.active {
		color: $primary-color;
	}
}

.nav-bar {
	.nav-m {
		display: none;
	}

	button {
		display: none;
	}
}

.nav {
	position: relative;
	display: flex;
	width: 100%;
	// height: $header-height;
	line-height: $header-height;

	.nav-item {
		position: relative;
		margin: 0 20px;
		cursor: pointer;

		// transition: all 0.3s linear;
		a {
			display: block;
		}

		.nav-item-title {
			font-size: 0.875rem;
			position: relative;
			display: block;
			height: inherit;
			width: inherit;
			white-space: nowrap;

			.active {
				color: $primary-color;
			}

			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				left: -5px;
				right: -5px;
				height: 2px;
				// width: 100%;
				background-color: $primary-color;
				transform: scale(0);
				transition: all 0.4s linear;
			}

			&:hover {
				color: $primary-color;

				&::before {
					transform: scale(1);
				}
			}
		}

		&:hover .dropdown-content {
			height: 300px;
		}
	}

	// 下拉菜单
	.dropdown-content {
		position: absolute;
		top: $header-height; // 为导航栏高度
		left: 0; // 设置为0, 不然会直接定位到父元素下方
		// width: 300px;
		height: 0; // 下拉初始高度
		overflow: hidden;
		transition: 0.6s;

		.dropdown-menu {
			width: 113px;
			padding: 10px 0px 15px;
			color: #fff;
			background-color: #fff;
			border-radius: 4px;
			box-shadow: 0px 0px 12px 0px rgba(102, 132, 179, 0.3);
			.menuItem {
				width: 100%;
				height: 42px;
				white-space: nowrap;
				padding: 0 16px;
				font-size: 0.875rem;
				line-height: 42px;
				color: #333;
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				border-radius: 4px;

				&:hover {
					background: #F4F4F4;
					color: $primary-color;;
				}
			}
		}
	}
}
</style>
