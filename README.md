# UDT Shoe Store

A responsive e-commerce shoe store built with Next.js, React, TypeScript, and Tailwind CSS. Product and order APIs are implemented with Next.js route handlers and local JSON storage for a small-store prototype.

## Pages

- **Home** — hero section, featured products, quality section, special offers, customer reviews, newsletter signup
- **Products** (`/products`) — full product listing with category filters, search, and sort
- **Product Detail** (`/product/[slug]`) — individual product page with size selection and add-to-cart
- **About** (`/about`) — brand story, stats, values, team
- **Contact** (`/contact`) — contact form, FAQ accordion, contact details
- **Cart** (`/cart`) — cart summary with quantity controls
- **Checkout** (`/checkout`) — order form and summary
- **Sign In** (`/signin`) — login and account creation

## Features

- Light / dark mode toggle persisted to `localStorage`
- Shopping cart with item count, quantity updates, and remove
- Next.js API routes for products and orders
- Browser-local cart plus server-side JSON order storage
- Responsive layout — works on mobile, tablet, and desktop
- Active nav link highlighting with animated underline
- Fixed nav with scroll-aware background blur

## Stack

- React 19
- Next.js 16
- TypeScript
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

Runs on `http://localhost:3000` by default.

```bash
npm run build # production build
npm start     # run the production server
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages and API routes
├── assets/         # images and icons
├── components/     # shared UI components (Nav, Button, cards)
├── constants/      # static data (products, nav links, reviews)
├── context/        # CartContext, ThemeContext
├── lib/            # server-side data helpers
├── views/          # page-level UI components
└── sections/       # homepage sections (Hero, PopularProducts, etc.)
data/
├── products.json   # product inventory used by API routes
└── orders.json     # saved orders for the local prototype
```

## Contact

customer@udt.com
