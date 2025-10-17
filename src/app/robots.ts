import { MetadataRoute } from 'next';

const siteUrl = 'https://www.amaechiugwu.space';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
