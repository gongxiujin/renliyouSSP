// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
	app: {
		head: {
			charset: 'utf-8',
			title: '任礼游-全球广告变现平台-流量变现-广告变现-广告平台',
			meta: [
				{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
				{ name: 'description', content: '任礼游官网' },
				{ name: 'description', content: '任礼游是全球广告变现平台,为媒体提供流量变现、广告变现、用户增长、LTV提升等全生命周期成长服务,目前已帮助超过10万个app在平台内流量变现,超过100万商业PC实现广告变现,也为超过5万广告主提供广告投放解决方案.'},
				{name: 'keywords', content: '任礼游全球广告变现平台,流量变现,广告变现,广告平台'}
			]
		}
	},
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' },
			{ code: 'zh', iso: 'zh-CN', file: 'zh-CN.js', name: '中文' },
		],
		strategy: 'prefix',
		skipSettingLocaleOnNavigate: true,
		defaultLocale: 'zh',
		langDir: 'locales/',
		debug: false,
		detectBrowserLanguage: {
			useCookie: false,
			redirectOn: 'root',  // recommended
		  },
	},
	tailwindcss: {
		config: {
			theme: {
				screens: {
					'sm': '640px',
					// => @media (min-width: 640px) { ... }

					'md': '768px',
					// => @media (min-width: 768px) { ... }

					'lg': '1024px',
					// => @media (min-width: 1024px) { ... }

					'xl': '1280px',
					// => @media (min-width: 1280px) { ... }

					'2xl': '1536px',
					// => @media (min-width: 1536px) { ... }
				},
				extend: {
					height: {
						'100': '25rem',
						'104': '26rem'
					}
				}
			}
		}
	},
	css: [
		'~/assets/style/base.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/style/variable.scss" as *;'
				}
			}
		}
	}
})
