import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amaechiugwu.space';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // TODO: When your blog posts are live, you can generate the routes for them dynamically.
  //
  // import { posts } from '@/lib/blog-data';
  // const blogRoutes = posts.map((post) => {
  //   const slug = post.title.toLowerCase().replace(/\s+/g, '-');
  //   return {
  //     url: `${siteUrl}/blog/${slug}`,
  //     lastModified: new Date(post.date),
  //     changeFrequency: 'monthly',
  //     priority: 0.5,
  //   };
  // });

  return staticRoutes;
}
