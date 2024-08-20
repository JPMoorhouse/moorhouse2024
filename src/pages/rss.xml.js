import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: "MoorHouse Coating",
		description: "Moorhouse Coating is a professional painting contractor Serving the Southwest with roots in Park City, Summit County Utah. For over 20 years we have provided",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
