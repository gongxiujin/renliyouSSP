<template>
  <div style="position: relative; z-index: 3">
    <AloneBanner :path="banner" />
    <!-- 丰富的商业化资源 -->
    <IndexResource></IndexResource>
    <!-- 多样化的接入方式 -->
    <IndexAccess></IndexAccess>
	<!-- 强大的产品能力 -->
	<IndexAbility></IndexAbility>
	<!-- 专业的解决方案 -->
	<IndexSolution></IndexSolution>
	<!-- 立即加入我们，助力你获得收益 -->
	<IndexJoinUs></IndexJoinUs>
  </div>
</template>

<script setup>
import { parallaxOffset } from '@/stores'
import { appStore } from '@/stores'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const banner = ref('home.banner');
const useAppStore = appStore()
const background = parallaxOffset()
background.height="1040px";
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})
function handleScroll () {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - scrollTop;
	// 714是手机端banner高度
	if (scrollTop > 14 && scrollBottom > 10) {
		useAppStore.isShowMobileBlock = true
	} else {
		useAppStore.isShowMobileBlock = false
	}
}
</script>

<style lang="scss" scoped>
.num {
  color: #fff;
  font-weight: normal;
  padding: 2px 12px;
  font-size: 1rem;
  margin-right: 5px;
  background-color: #a9a5a5;
  border-radius: 1px;
}
.news-list-ul li:nth-child(1) .num {
  background-color: #fb0d0d;
}
.news-list-ul li:nth-child(2) .num {
  background-color: #fb9c0d;
}
.news-list-ul li:nth-child(3) .num {
  background-color: #15acd9;
}
</style>
