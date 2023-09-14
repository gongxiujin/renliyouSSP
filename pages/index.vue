<template>
  <div style="position: relative; z-index: 3">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <!-- <Style type="text/css" children="body { background-color: green; }" /> -->
    </Head>

    <AloneBanner :data="bannerList" />
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
    <!-- 新闻中心 -->
    <!-- <div class="py-1 md:py-8" style="background-color: #fff;">
			<section class="al-container">
				<div class="flex justify-between mb-6">
					<div>
						<h2 class="md:text-4xl md:mb-2" style="color: #333;font-weight: 600;">新闻中心</h2>
						<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic;color: #d6dbe4;">NEWS CENTER</p>
					</div>
					<div class="flex items-center">
						<div class="bar"></div>
						<p class="text-xs md:text-lg text-slate-400">任礼游音讯16年品质保证，值得您信赖的伙伴</p>
					</div>
				</div>
				<div class="md:flex">
					<div class="md:w-1/2 mb-8">
						<img class="rounded-lg w-full h-52 md:h-100" src="http://www.pioneerw.com/3.0/style/image/4.png">
					</div>
					<div class="p-1 md:w-1/2 md:ml-10">
						<ul class="news-list-ul">
							<li class="mb-5 md:mb-10" v-for="(newsItem,index) in newsList" :key="index">
								<h3>
									<Nuxt-link class="text-lg" to="/about">
										<span class="num" style="">{{index+1}}</span>
										{{newsItem.title}}
										<span class="hidden md:block" style="color: #999;float: right;font-weight: normal;font-size: 1rem;">{{newsItem.date}}</span>
									</Nuxt-link>
								</h3>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div> -->
    <!-- 行业解决方案 -->
    <!-- <PageSolution /> -->
    <!-- 产品中心 -->
    <!-- <PageProduct /> -->

  </div>
</template>

<script setup>
import { appStore } from '@/stores'

const useAppStore = appStore()

const title = ref("任我游");
const bannerList = ref([
  {
    title: "这是一个title",
    image: "http://www.pioneerw.com/res/images/banner/213525321.jpg",
  },
  {
    title: "这是一个title",
    image: "http://www.pioneerw.com/res/images/banner/213525321.jpg",
  },
  {
    title: "这是一个title",
    image: "http://www.pioneerw.com/res/images/banner/213525321.jpg",
  },
]);
const newsList = ref([
  {
    title: "任礼游AI转写一体云录音系统",
    date: "2022-11-14",
  },
  {
    title: "2022年人工智能领域发展七大趋势",
    date: "2022-11-12",
  },
  {
    title: "任礼游云录音系统助力铁路行业对讲机、售票窗口录音",
    date: "2022-11-12",
  },
  {
    title: "任礼游音讯应邀参加  2019第四届上海国际人工智能展",
    date: "2022-11-12",
  },
  {
    title: "任礼游音讯中标广铁集团 VAA技术融入铁路行业专网",
    date: "2022-11-12",
  },
  {
    title: "2022年人工智能领域发展七大趋势",
    date: "2022-11-12",
  },
]);
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})
function handleScroll () {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollBottom = document.documentElement.scrollHeight - window.innerHeight - scrollTop;
	// 714是手机端banner高度
	if (scrollTop > 714 && scrollBottom > 10) {
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
