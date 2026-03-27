// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kb.systemly.io',
	integrations: [
		starlight({
			title: 'Systemly Knowledge Base',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start Here',
					autogenerate: { directory: 'start-here' },
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
			],
		}),
	],
});
