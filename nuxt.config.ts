// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
	app: {
		head: {
			charset: 'utf-8',
			title: '任礼游',
			meta: [
				{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
				{ name: 'description', content: '任礼游官网' }
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
