# Multi-Image Project Gallery

## How to Use Multiple Images

You can now add multiple images to any project! Here's how:

### Single Image (Current Format)
```jsx
{
  id: 1,
  title: "My Project",
  image: "/images/projects/project-main.png", // Single image
  // ... other properties
}
```

### Multiple Images (New Format)
```jsx
{
  id: 1,
  title: "My Project",
  images: [                                    // Array of images
    "/images/projects/project-homepage.png",
    "/images/projects/project-dashboard.png", 
    "/images/projects/project-mobile.png",
    "/images/projects/project-admin.png"
  ],
  // ... other properties
}
```

## Features

### 🖱️ **Navigation Options**
- **Click Image**: Click anywhere on the image to cycle to next
- **Arrow Buttons**: Hover to reveal left/right navigation arrows  
- **Dot Indicators**: Click dots at bottom to jump to specific image
- **Image Counter**: Shows current position (e.g., "2 / 4")

### 📱 **Mobile Friendly**
- Touch-friendly navigation buttons
- Swipe gestures work naturally
- Responsive design

### 🎨 **Visual Features**
- Smooth transitions between images
- Hover effects reveal navigation
- Active dot highlights current image
- Image counter in top-right corner

## Example Implementation

```jsx
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with multiple views",
    images: [
      "/images/projects/ecommerce-home.png",
      "/images/projects/ecommerce-product.png", 
      "/images/projects/ecommerce-cart.png",
      "/images/projects/ecommerce-checkout.png"
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://my-ecommerce.com",
    githubUrl: "https://github.com/user/ecommerce"
  },
  {
    id: 2, 
    title: "Simple Game",
    image: "/images/projects/game-screenshot.png", // Single image still works
    technologies: ["Unity", "C#"],
    liveUrl: "https://itch.io/my-game"
  }
]
```

## File Organization Suggestion

```
public/images/projects/
├── ecommerce/
│   ├── homepage.png
│   ├── product-page.png
│   ├── shopping-cart.png
│   └── checkout.png
├── game/
│   └── screenshot.png
└── portfolio/
    ├── desktop-view.png
    └── mobile-view.png
```

Then reference like:
```jsx
images: [
  "/images/projects/ecommerce/homepage.png",
  "/images/projects/ecommerce/product-page.png",
  "/images/projects/ecommerce/shopping-cart.png",
  "/images/projects/ecommerce/checkout.png"
]
```
