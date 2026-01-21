# FeaturedSection Component

## Overview

A modern, high-conversion SaaS website section with split-screen layout, glassmorphism effects, and GSAP animations.

## Features

- ✨ **Split-screen layout**: Bold typography on left, video on right
- 🎨 **Dark mode aesthetic**: Deep charcoal (#111827) with electric blue accents
- 💎 **Glassmorphism effects**: Backdrop blur with hover animations
- 🎬 **GSAP animations**: Smooth staggered reveals and transitions
- 📱 **Fully responsive**: Adapts beautifully to all screen sizes
- 🎥 **Video support**: Auto-playing loop with fallback gradient

## Usage

```tsx
import { FeaturedSection } from '@/components/sections';

export default function Page() {
  return (
    <>
      <FeaturedSection />
    </>
  );
}
```

## Customization

### Update Content

Edit `/public/data/featured-section.json`:

```json
{
  "section": {
    "heading": "Your Headline",
    "subheading": "Your description text...",
    "cta_text": "Your CTA",
    "media_src": "/videos/your-video.mp4"
  },
  "features": [
    {
      "title": "Feature Title",
      "description": "Feature description"
    }
  ]
}
```

### Styling

The component uses Tailwind CSS with:

- Background: `bg-[#111827]`
- Blue accent: `bg-blue-600`, `hover:bg-blue-500`
- Glassmorphism: `bg-white/5 backdrop-blur-md border border-white/10`

### Adding Video

Place your video file in `/public/videos/demo-clip.mp4` or update the path in the JSON file.

Video formats supported:

- MP4 (recommended)
- WebM
- OGG

For best results, use:

- Resolution: 1920x1080 or higher
- Format: MP4 (H.264)
- Frame rate: 30fps
- Duration: 10-30 seconds (looping)

## Animation Details

GSAP timeline sequence:

1. Text elements fade in from bottom (staggered)
2. Media container scales up and fades in
3. Feature cards slide in from left (staggered)

Customize timing in the component's `useGSAP` hook.
