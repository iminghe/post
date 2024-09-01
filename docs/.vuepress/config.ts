import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
	bundler: viteBundler({
		viteOptions: {
			server: {
				host: 'localhost',
				port: 33001,
			},
		},
	}),
	theme: defaultTheme(),

	lang: 'zh-CN',
	title: '博客文章',
});
