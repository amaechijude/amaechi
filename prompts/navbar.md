
**Create a mobile-first responsive navigation bar for a senior software engineer's portfolio website  with the following specifications:**

### Visual Design
- **Color Scheme**: Dark theme with `#0f172a` (slate-900) background, `#1e293b` (slate-800) for elevated states, `#cbd5e1` (slate-300) text, and `#8b5cf6` (purple) accent color
- **Typography**: Clean, modern font with subtle fade-in animations on page load
- **Height**: Fixed height around 64-72px for desktop, 56-64px for mobile
- **Backdrop**: Semi-transparent with backdrop blur effect for modern glass-morphism feel

### Mobile Responsiveness (Priority)
- **Breakpoint Strategy**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- **Mobile Navigation**: Hamburger menu that slides in from right or transforms into full-screen overlay
- **Touch Targets**: Minimum 44px tap targets for mobile accessibility
- **Gesture Support**: Swipe gestures to close mobile menu

### Navigation Structure
- **Left Side**: Logo/name with subtle hover animation
- **Right Side Desktop**: Horizontal menu items (Home, About, Projects, Blog, Contact)
- **Right Side Mobile**: Hamburger icon that transforms to X when opened
- **Active States**: Underline or background highlight for current page
- **Hover Effects**: Smooth color transitions and subtle scale transforms

### Interactive Elements
- **Menu Items**: Fade-in stagger animation (each item appears 100ms after previous)
- **Mobile Menu**: Slide-in with backdrop fade, menu items animate in sequence
- **Logo**: Subtle pulse or glow effect on hover
- **Scroll Behavior**: Sticky navbar that becomes more opaque on scroll, with smooth shadow addition

### Technical Requirements
- **Performance**: Use CSS transforms for animations, avoid layout thrashing
- **Accessibility**: ARIA labels, keyboard navigation support, focus management
- **SEO**: Proper semantic HTML structure with nav element
- **Loading States**: Skeleton loader or progressive enhancement approach

### Animation Details
- **Entrance**: Logo and menu items fade in with slight upward motion (20px translate)
- **Timing**: 0.3s ease-out transitions, staggered by 0.1s intervals
- **Micro-interactions**: Button hover states with 0.2s transitions
- **Mobile Menu**: 0.4s slide animation with easing curve

Generate a navbar that feels premium, performs smoothly across all devices, and establishes the professional yet creative tone for a senior developer's portfolio.