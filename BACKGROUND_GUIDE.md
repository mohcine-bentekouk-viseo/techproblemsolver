# Background Image Implementation Guide

## 📁 Asset Folder Structure

```
public/
├── images/
│   ├── backgrounds/
│   │   ├── hero-bg.jpg          ← Main hero background
│   │   ├── tech-pattern.svg     ← Tech pattern overlay
│   │   └── gradient-mesh.png    ← Gradient mesh texture
│   ├── icons/
│   └── logos/
```

## 🎨 Background Implementation Options

### Option 1: CSS Background Image (Recommended)

```tsx
<div
  className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(/images/backgrounds/hero-bg.jpg)" }}
>
  {/* Content */}
</div>
```

### Option 2: Background with Overlay

```tsx
<div className="relative isolate px-6 pt-14 lg:px-8">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
    style={{ backgroundImage: "url(/images/backgrounds/hero-bg.jpg)" }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>

  {/* Content */}
  <div className="relative z-10">{/* Your content here */}</div>
</div>
```

### Option 3: Next.js Image Component

```tsx
import Image from "next/image";

<div className="relative isolate px-6 pt-14 lg:px-8">
  <Image
    src="/images/backgrounds/hero-bg.jpg"
    alt="Background"
    fill
    className="object-cover opacity-10"
    priority
  />

  <div className="relative z-10">{/* Your content here */}</div>
</div>;
```

### Option 4: Tailwind Background Classes

```tsx
<div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
  {/* Content */}
</div>
```

## 📝 Best Practices

1. **Image Optimization**: Use WebP or AVIF formats for better performance
2. **File Size**: Keep background images under 500KB
3. **Responsive**: Provide different images for different screen sizes
4. **Accessibility**: Ensure text contrast remains good with background
5. **Loading**: Use `priority` prop for above-the-fold images

## 🎯 Recommended Background Types

- **Hero Sections**: Subtle textures, gradients, or abstract patterns
- **Tech Sites**: Circuit patterns, grid backgrounds, or geometric shapes
- **Professional**: Minimal gradients or solid colors with subtle textures

## 🔧 Implementation Steps

1. Add your background image to `public/images/backgrounds/`
2. Choose one of the implementation options above
3. Test on different screen sizes
4. Adjust opacity and overlays as needed
5. Ensure text readability
