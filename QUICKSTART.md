# Quick Start Guide

## Getting Started

1. **Navigate to the project directory:**
   \`\`\`bash
   cd tinytales-shop
   \`\`\`

2. **Install dependencies** (if not already done):
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

   The app will automatically redirect to the product details page at `/product/1`

## What's Included

✅ **Fully responsive design** - Works perfectly on mobile (393px) and desktop (1440px+)  
✅ **Product carousel** - Swipeable image gallery with thumbnails  
✅ **Interactive controls** - Color selection, quantity adjustment, size/type dropdowns  
✅ **Rating & reviews** - Star ratings with breakdown and expandable reviews  
✅ **Similar products** - Horizontal scrolling carousel  
✅ **Custom theme** - Tailwind CSS v4 with design tokens matching Figma  
✅ **TypeScript** - Full type safety  
✅ **Next.js 14** - Latest App Router with server components  

## Available Pages

- `/` - Home (redirects to product details)
- `/product/1` - Product details page (main implementation)

## Project Structure

\`\`\`
tinytales-shop/
├── app/                    # Next.js app directory
│   ├── product/[id]/      # Dynamic product pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Breadcrumb.tsx
│   ├── ProductCarousel.tsx
│   ├── ProductInfo.tsx
│   ├── RatingReviews.tsx
│   ├── SimilarItems.tsx
│   └── Footer.tsx
├── lib/                   # Utilities
│   └── utils.ts
└── public/               # Static assets
    └── assets/
        ├── images/
        ├── icons/
        └── logos/
\`\`\`

## Key Features Implemented

### 1. Product Carousel
- Multi-image carousel with smooth transitions
- Progress indicators at the top
- Left/right navigation buttons
- Thumbnail grid below with "+2" indicator
- Fully responsive

### 2. Product Information
- Category badge
- Product name and description
- Price with strikethrough original price
- Type and Size dropdowns
- Color swatches with selection
- Quantity controls (+/-)
- Add to Cart button
- Wishlist icon

### 3. Rating & Reviews
- Large 4.5/5 rating display
- Star breakdown with percentage bars
- Total review count (3.0K)
- Review cards with author, date, rating, and comment
- "View More Comments" button
- "Add Comment" button

### 4. Similar Items
- Horizontal scrolling carousel
- Product cards with images
- Discount badges (25% OFF)
- Heart/bag icons for favorites and cart
- Color variant indicators
- Navigation buttons

### 5. Header
- Logo
- Navigation menu (desktop)
- Shopping cart icon
- Wishlist icon
- Language selector
- Mobile menu toggle

### 6. Footer
- Brand logo and description
- Let Us Help links
- Policies links
- Email subscription form
- Social media icons

## Design Tokens

All colors, fonts, spacing, and border radius values match the Figma designs:

- **Primary Color**: #be968e (Rose Tan)
- **Primary Font**: Poppins (400, 500, 600, 700)
- **Secondary Font**: Inter (500)
- **Border Radius**: 10px, 12px, 16px, 20px, 24px

## Development Commands

\`\`\`bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
\`\`\`

## Next Steps

To extend this project:

1. **Add more pages**: Create category, cart, checkout pages
2. **API integration**: Connect to a real backend
3. **State management**: Implement Zustand for cart/wishlist
4. **Authentication**: Add user login/signup
5. **Search**: Implement product search functionality
6. **Filters**: Add filtering by price, size, color, etc.

## Troubleshooting

**Port already in use:**
\`\`\`bash
# Kill the process on port 3000
kill -9 $(lsof -ti:3000)

# Or use a different port
PORT=3001 npm run dev
\`\`\`

**Missing dependencies:**
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

**Build errors:**
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

## Support

For issues or questions, check:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- Embla Carousel: https://www.embla-carousel.com/

---

Enjoy building with Tinytales! 🎉
