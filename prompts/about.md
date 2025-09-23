**Create an engaging "About Me" section that maintains the established dark theme and animation patterns, positioned after the hero section to build personal connection and credibility:**

### Layout & Structure
- **Container**: Full-width section with max-width 1200px, generous vertical padding (120px top/bottom desktop, 80px mobile)
- **Grid System**: Two-column layout desktop (40% image/visual, 60% content), single column mobile with image-first
- **Section Header**: "About Me" or "My Story" with consistent h2 styling and fade-in animation
- **Content Flow**: Personal narrative → technical philosophy → current focus → personal interests (subtle)

### Visual Design
- **Color Scheme**: Continue `#0f172a` background, `#1e293b` for card/image backgrounds, `#cbd5e1` text, `#8b5cf6` accents
- **Typography**: Mix of paragraph text (16-18px) and highlighted quotes or key phrases with accent colors
- **Profile Element**: Professional photo with rounded corners and subtle glow, OR abstract geometric representation
- **Background**: Subtle code snippets or architectural diagrams as very low-opacity background elements
- **Visual Hierarchy**: Clear distinction between main narrative and supporting details

### Content Strategy & Tone
- **Opening Hook**: Personal story that led to software engineering (avoid generic "passionate about coding")
- **Technical Philosophy**: How you approach problem-solving, what drives your architectural decisions
- **Professional Growth**: Key moments that shaped your expertise without being a chronological resume
- **Current Focus**: What you're excited about building/learning right now
- **Personality Glimpse**: 1-2 subtle personal interests that make you memorable (music, hiking, etc.)
- **Word Count**: 150-250 words total - concise but substantial

### Animation & Interactions
- **Text Entrance**: Paragraph-by-paragraph fade-in on scroll with slight upward motion (20px translate)
- **Image/Visual**: Parallax effect or subtle zoom on scroll
- **Highlighted Text**: Accent color phrases that animate in slightly after main text
- **Hover Effects**: Subtle glow or color shift on profile image
- **Scroll Timing**: Triggered when section is 30% visible, staggered by 200ms intervals

### Mobile Responsiveness
- **Image Sizing**: Square aspect ratio on mobile (280x280px), rectangular on desktop (400x500px)
- **Text Reflow**: Single column with image above text, maintaining readability
- **Spacing Adjustments**: Tighter padding on mobile (60px vertical), larger line height for readability
- **Touch Interactions**: No essential hover states, all content accessible without hover

### Interactive Elements
- **Downloadable Resume**: Subtle CTA button "Download Resume" with download icon
- **Skills Highlights**: Inline text with subtle underlines or background highlights for key technologies
- **Quote Treatment**: Pull-quote styling for your engineering philosophy or key belief
- **Social Proof**: Brief mention of years of experience or notable achievements (without bragging)

### Technical Implementation
- **Performance**: Optimize profile image with next/image, lazy load background elements
- **Accessibility**: Proper alt text for images, semantic HTML structure, focus indicators
- **SEO**: Rich snippets potential with structured data for professional profile
- **Animation Library**: Continue Framer Motion for scroll-triggered animations

### Content Examples/Direction
**Opening Style Options:**
- "I've been solving complex problems with code for [X] years, but my journey started..."
- "What fascinates me about software engineering isn't just the code—it's..."
- "I believe the best software solutions come from understanding both the technical and human sides..."

**Technical Philosophy Examples:**
- Approach to scalable architecture
- Belief in clean, maintainable code
- Team collaboration and mentorship philosophy
- Continuous learning mindset

### Visual Hierarchy
- **Main Content**: 60% width desktop, full width mobile
- **Supporting Elements**: Code snippets, achievement callouts, or timeline markers
- **White Space**: Generous breathing room around text blocks
- **Reading Flow**: Natural left-to-right reading pattern with visual breaks

### Integration with Overall Design
- **Spacing Consistency**: Maintain 8px grid system established in navbar/hero
- **Color Usage**: Consistent accent color application for CTAs and highlights
- **Animation Continuity**: Similar easing curves and timing as previous sections
- **Typography Scale**: Consistent with hero section hierarchy

**Generate an About Me section that transforms the typical "bio dump" into a compelling narrative that builds trust, showcases personality, and smoothly bridges between the hero's promise and the upcoming project demonstrations. The section should feel personal yet professional, with just enough vulnerability to be memorable while maintaining senior-level credibility.**