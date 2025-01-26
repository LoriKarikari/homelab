// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
	site: 'https://lorikarikari.github.io',
	base: '/homelab',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [catppuccin()],
		}),
	],
});
