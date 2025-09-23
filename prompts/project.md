**Create a compelling "Featured Projects" section that showcases 3-4 best projects with detailed case studies, maintaining the established dark theme and animation patterns:**

### Layout & Structure
- **Container**: Full-width section with max-width 1200px, generous vertical padding (120px top/bottom desktop, 80px mobile)
- **Section Header**: "Featured Projects" or "Selected Work" with consistent h2 styling and subtitle like "Showcasing solutions to complex engineering challenges"
- **Grid System**: 2-column grid desktop (2x2), single column mobile with card stacking
- **Card Layout**: Each project card ~500x600px desktop, full-width mobile with consistent aspect ratios
- **Spacing**: 32px gaps between cards desktop, 24px mobile with breathing room

### Individual Project Card Design
- **Visual Hierarchy**: Project image/mockup (40% height) → title → tech stack → description → links
- **Background**: `#1e293b` (slate-800) with subtle border (`#334155`) and hover elevation
- **Image Treatment**: High-quality project screenshots or mockups with subtle overlay on hover
- **Content Padding**: 24px internal padding with consistent spacing throughout
- **Aspect Ratio**: 16:10 for project images, maintain consistency across all cards

### Project Content Structure
- **Project Title**: h3 with `#cbd5e1` color, 20-24px font size
- **Tech Stack**: Pill-style badges with `#8b5cf6` accent color for primary tech, muted for secondary
- **Description**: 2-3 sentences focusing on problem solved and impact (80-120 words)
- **Key Metrics**: 1-2 quantifiable achievements (performance improvement, user growth, etc.)
- **Link Hierarchy**: Primary "View Project" CTA button + secondary "View Code" text link

### Animation & Interactions
- **Card Entrance**: Staggered fade-in on scroll (top-left → top-right → bottom-left → bottom-right)
- **Timing**: 200ms delays between cards, triggered when 25% visible
- **Hover States**: Card elevation increase (8px shadow), image subtle zoom (1.05 scale)
- **Button Animations**: CTA buttons with gradient shift and scale on hover
- **Tech Stack**: Pills with subtle bounce or color shift on hover
- **Loading States**: Skeleton cards while content loads

### Mobile Responsiveness
- **Breakpoint Strategy**: Single column below 768px, 2-column at 768px+, maintain desktop grid above 1024px
- **Card Sizing**: Full-width mobile with 16px side margins, height auto-adjusting
- **Image Optimization**: Responsive images using next/image with appropriate breakpoints
- **Touch Interactions**: Larger tap targets (48px minimum), appropriate spacing for thumb navigation
- **Performance**: Lazy load non-visible cards, optimize images for mobile

### Project Selection Strategy
- **Project 1**: Most technically impressive (complex architecture, innovative solution)
- **Project 2**: Business impact focused (measurable results, user growth)
- **Project 3**: Full-stack showcase (demonstrates range of skills)
- **Project 4**: Open source or personal project (shows passion and initiative)

### Technical Implementation Details
- **Performance**: Intersection Observer for scroll animations, optimized images, minimal layout shift
- **Accessibility**: Focus management, keyboard navigation, alt text for project images
- **SEO**: Structured data for projects, proper heading hierarchy, meaningful URLs
- **Links**: External links open in new tabs, proper rel attributes for security

### Content Guidelines
- **Problem-Solution Focus**: Lead with the challenge, then your approach and solution
- **Avoid Generic Descriptions**: Skip "built a website" - focus on specific technical challenges solved
- **Quantifiable Impact**: Include metrics where possible (50% performance improvement, 10k users, etc.)
- **Technology Justification**: Briefly explain why you chose specific tech stack for each project
- **Team Context**: Mention if solo project vs team collaboration, your specific role

### Visual Elements
- **Project Images**: High-quality screenshots, mockups, or architecture diagrams
- **Tech Stack Display**: Clean pill design with consistent brand colors
- **Status Indicators**: "Live," "In Development," "Open Source" badges where relevant
- **Link Icons**: Consistent iconography for external links, GitHub, live demos

### Call-to-Action Strategy
- **Primary CTA**: "View Project" leads to detailed case study page
- **Secondary CTA**: "View Code" (GitHub) with external link icon
- **Section CTA**: "View All Projects" button at bottom leading to full portfolio
- **Contact Integration**: Subtle "Interested in similar work?" prompt

### Card Hover States Detail
- **Transform**: translateY(-8px) with smooth 0.3s ease-out transition
- **Shadow**: Increase from 4px to 16px blur with reduced opacity
- **Image**: Subtle 1.05 scale transform with overflow hidden
- **Border**: Accent color glow or border highlight
- **Button States**: Primary CTA color intensification

### Integration Patterns
- **Spacing Consistency**: Maintain 8px grid system established in previous sections
- **Color Application**: Consistent use of `#8b5cf6` for interactive elements and highlights
- **Typography**: Continue established font weights and sizes from About section
- **Animation Continuity**: Similar easing curves (ease-out) and timing patterns

**Generate a Featured Projects section that transforms a typical portfolio grid into engaging project stories that demonstrate both technical expertise and business impact. Each card should feel like a compelling preview that makes visitors want to dive deeper into your work, while maintaining the premium dark aesthetic and smooth user experience established in previous sections.**