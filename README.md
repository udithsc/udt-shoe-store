# UDT Shoe Store

A frontend e-commerce site for a shoe store. Built with React, TypeScript, and Tailwind CSS.

## Pages

- **Home** — hero section, featured products, quality section, special offers, customer reviews, newsletter signup
- **Products** (`/products`) — full product listing with category filters, search, and sort
- **Product Detail** (`/product/:slug`) — individual product page with add-to-cart
- **About** (`/about`) — brand story, stats, values, team
- **Contact** (`/contact`) — contact form, FAQ accordion, contact details
- **Cart** (`/cart`) — cart summary with quantity controls
- **Checkout** (`/checkout`) — order form and summary
- **Sign In** (`/signin`) — login and account creation

## Features

- Light / dark mode toggle (persisted to `localStorage`, respects system preference on first load)
- Shopping cart with item count, quantity updates, and remove
- Client-side routing via React Router v7
- Responsive layout — works on mobile, tablet, and desktop
- Active nav link highlighting with animated underline
- Fixed nav with scroll-aware background blur

## Stack

- React 19
- TypeScript
- Tailwind CSS v4
- React Router DOM v7
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Runs on `http://localhost:5173` by default.

```bash
npm run build   # production build
npm run preview # preview the production build locally
```

## Project Structure

```
src/
├── assets/         # images and icons
├── components/     # shared UI components (Nav, Button, cards)
├── constants/      # static data (products, nav links, reviews)
├── context/        # CartContext, ThemeContext
├── pages/          # page-level components
└── sections/       # homepage sections (Hero, PopularProducts, etc.)
```

## Contact

customer@udt.com
