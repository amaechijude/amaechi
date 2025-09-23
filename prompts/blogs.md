## Blog Homepage Design Prompt (`/blog`)

**Create a sophisticated blog homepage that serves as the content hub for technical writing and mentoring insights, maintaining the established dark theme and design system from the main portfolio:**

### Layout & Structure
- **Container**: Full-width layout with max-width 1200px, consistent vertical padding (80px top/bottom desktop, 60px mobile)
- **Page Header**: "Technical Insights & Mentoring Wisdom" with subtitle "Sharing knowledge from the trenches of software development"
- **Four-Section Layout**: Featured Post (hero) → Recent Posts Grid → Categories/Topics Sidebar → Archive/Search Footer
- **Visual Hierarchy**: Featured content prominent, supporting elements complement without competing

### Featured/Recent Posts Section (Primary Focus)
- **Hero Featured Post**: Large card showcasing latest or most popular article
  - **Image Treatment**: Featured image with dark overlay for text readability
  - **Card Size**: 100% width, 400px height on desktop, responsive scaling on mobile
  - **Content Preview**: Title, excerpt (150 characters), publish date, read time, category tag
  - **Visual Elements**: Author badge, featured post indicator, engagement metrics (views/comments if available)

- **Recent Posts Grid**: 2x3 grid on desktop, single column on mobile
  - **Card Design**: `#1e293b` background with subtle borders, hover elevation effects
  - **Card Content**: Thumbnail image, title, excerpt (100 characters), date, category, read time
  - **Grid Spacing**: 32px gaps desktop, 24px mobile with consistent card heights

### Categories/Topics Section (Sidebar)
- **Layout Position**: Right sidebar on desktop (25% width), full-width section on mobile
- **Visual Treatment**: Clean category cards with post counts and icon representations
- **Category Examples**: 
  - Frontend Development (React, Next.js insights)
  - Architecture & Scaling (System design, performance)
  - Career Mentoring (Transition stories, skill building)
  - Team Leadership (Code reviews, mentoring tips)
  - Industry Insights (Tech trends, tools reviews)

- **Interactive Elements**: Hover states with category color themes, smooth transitions
- **Post Counts**: Display number of posts per category with subtle styling

### Search Functionality
- **Search Bar Position**: Top of page, integrated into header area
- **Design**: Dark theme input with `#1e293b` background, `#8b5cf6` focus states
- **Functionality**: Real-time search with dropdown suggestions, filter by category/tags
- **Mobile Adaptation**: Expandable search on mobile, full-width when active
- **Search Results**: Dedicated results page maintaining blog design system

### Archive & "View All" Options
- **Archive Navigation**: Monthly/yearly archive links in sidebar or footer
- **Pagination**: "Load More" or traditional pagination for post listings
- **View All CTA**: Prominent button leading to complete post archive
- **Filtering Options**: Sort by date, popularity, category with URL parameter updates

### Visual Design System
- **Color Scheme**: Continue `#0f172a` background, `#1e293b` for cards, `#cbd5e1` text, `#8b5cf6` accents
- **Typography**: Consistent with portfolio - clear hierarchy for titles, excerpts, meta information
- **Card Treatments**: Consistent elevation, borders, and hover states matching portfolio design
- **Image Handling**: Optimized thumbnails with lazy loading, consistent aspect ratios
- **Category Colors**: Subtle accent colors for different topics while maintaining overall dark theme

### Animation Strategy
- **Page Entrance**: Featured post fades in first, then recent posts grid animates in rows
- **Scroll Animations**: Cards fade in as they become visible, staggered timing
- **Hover Interactions**: Card elevation, image scaling, smooth color transitions
- **Search Interactions**: Smooth expand/contract animations, real-time result updates
- **Loading States**: Skeleton cards while content loads, smooth transitions

### Mobile Responsiveness
- **Layout Adaptation**: Single column with featured post → recent posts → categories → search/archive
- **Card Sizing**: Full-width cards on mobile, optimized for thumb navigation
- **Touch Interactions**: Appropriate tap targets, swipe gestures for category navigation
- **Performance**: Lazy load images, optimize for mobile bandwidth
- **Reading Experience**: Comfortable text sizes, adequate line spacing

### Content Strategy & Structure

### **Featured Post Selection Criteria:**
- Latest technical deep-dive or popular mentoring story
- High engagement content (comments, shares, time on page)
- Evergreen content that showcases your expertise
- Visual appeal with strong featured image

### **Recent Posts Content Types:**
- **Technical Tutorials**: "Building Scalable React Components"
- **Mentoring Stories**: "From Bartender to Full-Stack Developer: A Success Story"
- **Industry Insights**: "Why Senior Developers Should Mentor"
- **Architecture Deep-Dives**: "Designing APIs That Scale"
- **Career Advice**: "Navigating Your First Senior Developer Role"

### **Category Organization:**
- Clear categorization that matches your dual expertise (technical + mentoring)
- Consistent naming convention and visual treatment
- Balanced content distribution across categories

### Interactive Elements
- **Social Sharing**: Share buttons for individual posts and categories
- **Reading Progress**: Subtle progress indicators for longer content
- **Related Content**: "You might also like" suggestions based on category/tags
- **Newsletter Signup**: Subtle CTA for content updates and new post notifications
- **Comment Integration**: If using comments, integrate with existing design system

### SEO & Performance Optimization
- **Meta Tags**: Dynamic meta descriptions, Open Graph tags for social sharing
- **URL Structure**: Clean, SEO-friendly URLs with category and post slug
- **Loading Strategy**: Critical CSS inline, lazy load below-the-fold content
- **Image Optimization**: Next.js Image component with proper alt tags and responsive sizing
- **Site Speed**: Optimize for Core Web Vitals, fast page loads

### Navigation Integration
- **Header Navigation**: Consistent navbar from main portfolio with "Blog" active state
- **Breadcrumbs**: Clear navigation path (Home → Blog → Category → Post)
- **Footer Links**: Connect back to main portfolio sections, social media, contact
- **Cross-Promotion**: Subtle links to mentoring services and portfolio projects within relevant content

### Technical Implementation
- **CMS Integration**: Structure for easy content management (MDX files, headless CMS, etc.)
- **Search Implementation**: Client-side search with indexed content or server-side search API
- **Analytics**: Track blog performance, popular content, user engagement
- **RSS Feed**: Provide RSS/JSON feed for subscribers and content syndication

### Content Loading & States
- **Initial Load**: Featured post and first 6 recent posts for fast perceived performance
- **Infinite Scroll**: Or pagination for additional content loading
- **Empty States**: Attractive "no results" pages for searches or empty categories
- **Loading Skeletons**: Maintain layout while content loads, consistent with portfolio design

### Call-to-Action Integration
- **Mentoring CTAs**: Subtle prompts in relevant posts about available mentoring
- **Portfolio Links**: Connect technical posts back to relevant projects
- **Social Proof**: Integrate success stories and testimonials where appropriate
- **Contact Integration**: Easy way for readers to reach out about topics discussed

**Generate a blog homepage that establishes you as a thought leader in both technical development and mentoring, while maintaining the premium dark aesthetic and smooth user experience from your main portfolio. The page should feel like a natural extension of your personal brand, making it easy for visitors to discover and consume your content while providing clear pathways back to your professional services.**