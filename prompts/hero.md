
**Create a compelling hero section component for this senior software engineer's portfolio website that sits directly below the navbar, with the following comprehensive specifications:**

### Layout & Structure
- **Container**: Full viewport height minus navbar (calc(100vh - 64px)), centered content with max-width of 1200px
- **Grid System**: Two-column layout on desktop (60% text, 40% visual), single column on mobile with text-first priority
- **Vertical Alignment**: Content vertically centered with subtle padding adjustments for visual balance
- **Spacing**: Generous white space, following 8px grid system for consistent spacing

### Content Hierarchy
- **Primary Headline**: Large, bold text (48-64px desktop, 32-40px mobile) - "Senior Software Engineer" or similar
- **Secondary Headline**: Name with unique styling or accent color treatment
- **Value Proposition**: 2-3 line subtitle explaining specialization (e.g., "Building scalable web applications with modern technologies")
- **CTA Buttons**: Primary "View My Work" and secondary "Get In Touch" with distinct styling
- **Social Links**: Subtle GitHub, LinkedIn, Twitter icons with hover animations

### Visual Design
- **Color Scheme**: Continue dark theme - `#0f172a` background, `#cbd5e1` primary text, `#8b5cf6` accent color
- **Typography Scale**: Clear hierarchy with font weights (300, 400, 600, 700) and appropriate line heights (1.2-1.6)
- **Visual Element**: Abstract geometric shapes, code snippets floating in background, or subtle particle animation
- **Background**: Subtle gradient or mesh pattern that doesn't compete with text readability

### Animation Strategy
- **Text Entrance**: Staggered fade-in with upward motion (translate Y from 30px to 0)
- **Timing Sequence**: Name → Title → Description → Buttons → Social links (150ms delays between)
- **Hover States**: Button scale (1.05), glow effects, and smooth color transitions
- **Background Animation**: Subtle floating elements or parallax scroll effect
- **Loading States**: Progressive text reveal, possibly with typewriter effect for name

### Mobile Responsiveness
- **Breakpoint Strategy**: 320px (small), 768px (tablet), 1024px (desktop) with fluid scaling between
- **Text Scaling**: Responsive typography using clamp() for fluid scaling
- **Button Layout**: Stack vertically on mobile with full-width or centered positioning
- **Touch Interactions**: Larger tap targets (minimum 44px), appropriate spacing for thumb navigation
- **Performance**: Reduced animations on mobile for better performance

### Interactive Elements
- **Primary CTA**: Prominent button with gradient background and subtle shadow, leads to projects section
- **Secondary CTA**: Outline button with hover fill animation, opens contact modal or scrolls to contact
- **Social Icons**: Hover states with brand colors and smooth scale transforms
- **Scroll Indicator**: Subtle animated arrow or text suggesting users scroll down
- **Copy-to-clipboard**: Email address with click-to-copy functionality

### Technical Implementation Details
- **Animations**: Use Framer Motion for complex sequences, CSS for simple hover states
- **Performance**: Preload critical fonts, optimize any background videos/animations
- **SEO**: Proper heading hierarchy (h1 for name, h2 for title), meta descriptions
- **Accessibility**: Focus management, reduced motion preferences, proper color contrast ratios
- **Loading Strategy**: Critical CSS inline, non-critical deferred

### Content Tone & Messaging
- **Professional yet approachable**: Confidence without arrogance
- **Specific value proposition**: What makes you different from other senior engineers
- **Action-oriented**: Clear next steps for visitors
- **Personality hints**: Subtle indicators of work style or interests

### Visual Inspiration Direction
- **Style**: Modern, clean, slightly futuristic but not overly flashy
- **Mood**: Professional confidence with creative edge
- **Examples**: Think Stripe's clarity + GitHub's developer focus + personal brand warmth

**Generate a hero section that immediately communicates expertise, invites exploration, and sets the professional tone while maintaining the dark aesthetic and smooth animations established by the navbar. The section should feel premium and load quickly across all devices.**