import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog-data';
import { siteUrl } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const blogRoutes = posts.map((post) => {
    const slug = post.title.toLowerCase().replace(/\s+/g, '-');
    return {
      url: `${siteUrl}/blog/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}