## Individual Blog Post Page Design Prompt (`/blog/[slug]`)

**Create a comprehensive individual blog post page that provides an exceptional reading experience while maintaining the established dark theme and design system from the blog listing and main portfolio:**

### Layout & Structure
- **Container**: Full-width layout with max-width 800px for optimal reading, consistent padding (80px top/bottom desktop, 60px mobile)
- **Reading Flow**: Post header → featured image → article content → author bio → related posts → navigation
- **Sidebar Option**: Optional right sidebar (25% width) for table of contents on longer posts, hidden on mobile
- **Breadcrumb Navigation**: Home → Blog → Category → Post Title for clear navigation context

### Post Header Design
- **Title Treatment**: Large h1 (36-48px desktop, 28-32px mobile) with `#cbd5e1` color, generous line height
- **Meta Information**: Publish date, read time, category tag, author byline in subtle `#94a3b8` color
- **Category Tag**: Consistent pill design from blog listing with `#8b5cf6` accent and hover states
- **Visual Hierarchy**: Title most prominent, meta info supporting but clear
- **Spacing**: Generous whitespace around header elements following 8px grid system

### Featured Image Treatment
- **Image Size**: Full-width responsive image with 16:9 aspect ratio, max-height 400px
- **Image Overlay**: Subtle dark overlay for text readability if image is used as background
- **Loading Optimization**: Next.js Image component with proper alt tags and responsive sizing
- **Fallback**: Elegant placeholder or gradient background if no featured image
- **Caption Support**: Optional image caption with smaller, muted text styling

### Article Content (MDX Rendering)
- **Typography Scale**: Clear hierarchy with h2, h3, h4 headings using consistent font weights
- **Reading Experience**: 18px base font size, 1.7 line height, max-width ~65 characters per line
- **Content Spacing**: Generous vertical rhythm between paragraphs, headings, and content blocks
- **Color Scheme**: `#e2e8f0` for body text, `#cbd5e1` for headings, maintaining readability contrast

### Code Syntax Highlighting
- **Code Blocks**: Dark theme syntax highlighting (VS Code Dark+ or similar)
- **Background**: `#1e293b` background for code blocks with subtle border
- **Inline Code**: Subtle background `#334155` with rounded corners and padding
- **Copy Button**: Hover-revealed copy button for code blocks
- **Language Labels**: Small language identifier in top-right of code blocks

### Content Elements Styling
- **Blockquotes**: Left border accent (`#8b5cf6`), italic text, increased left padding
- **Lists**: Proper spacing, custom bullet points or numbers matching design theme
- **Links**: `#8b5cf6` color with underline, smooth hover transitions
- **Images**: Responsive images with subtle shadows and rounded corners
- **Tables**: Dark theme table styling with alternating row colors

### Animation Strategy
- **Page Entrance**: Header fades in first, then featured image, then content blocks sequentially
- **Reading Progress**: Subtle progress bar at top showing reading completion
- **Smooth Scrolling**: Anchor links to headings with smooth scroll behavior
- **Hover States**: Link hover effects, image zoom on hover, button interactions
- **Loading States**: Skeleton loading for content while MDX renders

### Mobile Responsiveness
- **Typography Scaling**: Fluid typography using clamp() for optimal mobile reading
- **Touch Interactions**: Appropriate tap targets for links and interactive elements
- **Reading Comfort**: Optimized line length and spacing for mobile screens
- **Navigation**: Mobile-friendly back buttons and navigation elements
- **Performance**: Optimized image loading and reduced animations for mobile

### Author Bio Section
- **Layout**: Horizontal layout with profile image (left) and bio text (right)
- **Profile Image**: 80x80px circular image with subtle border and hover effects
- **Bio Content**: Brief 2-3 sentence bio focusing on expertise relevant to post topic
- **CTA Links**: "View Portfolio" and "Mentoring Services" buttons with accent styling
- **Social Links**: GitHub, LinkedIn, Twitter icons with brand colors on hover

### Related Posts Section
- **Section Header**: "Related Articles" or "You Might Also Like" with consistent styling
- **Card Layout**: 2-3 related post cards in horizontal layout (single column mobile)
- **Card Design**: Consistent with blog listing cards - thumbnail, title, excerpt, date
- **Selection Logic**: Posts from same category or similar tags
- **Visual Consistency**: Maintain blog listing card hover states and animations

### Social Sharing Integration
- **Share Buttons**: Twitter, LinkedIn, Facebook with platform brand colors
- **Copy Link**: One-click URL copying with success feedback
- **Position Options**: Floating sidebar on desktop, bottom of post on mobile
- **Share Data**: Proper Open Graph data for rich social media previews
- **Analytics**: Track sharing engagement for popular content insights

### Navigation Elements
- **Back to Blog**: Clear "← Back to Blog" link maintaining design consistency
- **Next/Previous**: Navigation between posts with post titles and thumbnails
- **Scroll to Top**: Smooth scroll to top button appearing after scrolling
- **Table of Contents**: Auto-generated TOC for longer posts (desktop sidebar)
- **Breadcrumbs**: Clickable breadcrumb navigation for context

### SEO & Meta Optimization
- **Dynamic Meta Tags**: Post-specific title, description, keywords, Open Graph data
- **Structured Data**: BlogPosting schema with author, publish date, content details
- **Canonical URLs**: Proper canonical URL for each post
- **Reading Time**: Auto-calculated reading time based on word count
- **Last Updated**: Display last modified date for updated content

### Technical Implementation
- **MDX Processing**: Proper MDX component rendering with custom component overrides
- **Syntax Highlighting**: Server-side syntax highlighting for performance
- **Image Optimization**: Automatic image optimization and responsive loading
- **Performance**: Code splitting, lazy loading for non-critical elements
- **Error Handling**: Graceful 404 handling for non-existent posts

### Interactive Features
- **Reading Progress**: Visual indicator of reading completion
- **Anchor Links**: Clickable heading anchors for sharing specific sections
- **Comment Integration**: Optional comment system (if desired) matching dark theme
- **Bookmark**: Optional "save for later" functionality
- **Print Styles**: Optimized print CSS for article printing

### Content Enhancement
- **Callout Boxes**: Special styling for tips, warnings, notes with appropriate colors
- **Image Galleries**: Support for multiple images with lightbox functionality
- **Embedded Content**: YouTube, CodePen, GitHub gists with dark theme integration
- **Newsletter Signup**: Subtle in-content or end-of-post newsletter subscription
- **Related Projects**: Link blog posts to relevant portfolio projects

### Performance Considerations
- **Core Web Vitals**: Optimize for LCP, FID, CLS metrics
- **Image Loading**: Progressive image enhancement and lazy loading
- **Font Loading**: Optimize web font loading to prevent layout shift
- **Critical CSS**: Inline critical post styling for above-the-fold content
- **Analytics**: Track reading time, scroll depth, engagement metrics

### Integration with Portfolio Brand
- **Consistent Navigation**: Maintain main portfolio navbar with "Blog" active state
- **Cross-Promotion**: Subtle CTAs connecting technical posts to relevant portfolio projects
- **Mentoring Integration**: Link career-focused posts to mentoring services
- **Contact Integration**: Easy access to contact form for post-related inquiries
- **Brand Consistency**: Maintain color scheme, typography, and animation patterns

### Content-Specific Adaptations
- **Technical Posts**: Enhanced code block styling, GitHub integration, project links
- **Mentoring Posts**: Success story highlighting, testimonial integration, CTA emphasis
- **Tutorial Content**: Step-by-step formatting, progress indicators, downloadable resources
- **Opinion Pieces**: Author voice emphasis, discussion prompts, social sharing focus

**Generate an individual blog post page that transforms your technical writing and mentoring insights into an engaging, readable experience while maintaining the premium dark aesthetic and smooth user experience established throughout your portfolio. The page should encourage deep engagement with your content while providing clear pathways to your professional services and mentoring programs.**