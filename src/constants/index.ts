import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons';

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imgURL: shoe4,
    name: 'UDT Air Jordan-01',
    price: '$200.20',
    slug: 'udt-air-jordan-01',
    description: "A clean, versatile silhouette that works as well off the court as on it. The Air Jordan-01 has been a go-to since day one — solid build, comfortable fit, holds up well over time."
  },
  {
    imgURL: shoe5,
    name: 'UDT Air Jordan-10',
    price: '$210.20',
    slug: 'udt-air-jordan-10',
    description: "The Air Jordan-10 is built for people who are on their feet all day. Good ankle support, cushioning that actually lasts, and a profile that doesn't look out of place anywhere."
  },
  {
    imgURL: shoe6,
    name: 'UDT Air Jordan-100',
    price: '$220.20',
    slug: 'udt-air-jordan-100',
    description: "The Air Jordan-100 pushes things forward a bit — lighter materials, updated sole geometry, and a look that's a bit more modern without going overboard."
  },
  {
    imgURL: shoe7,
    name: 'UDT Air Jordan-001',
    price: '$230.20',
    slug: 'udt-air-jordan-001',
    description: "The Air Jordan-001 keeps it simple. Low-profile, clean lines, available in colourways that actually work. If you want one pair that goes with everything, this is it."
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Free shipping on all orders, no minimum spend.',
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext: 'All payments are processed securely. We support cards, PayPal, and bank transfer.',
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Got a question? Reach out — we usually get back within a few hours.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'Really happy with these. The quality is noticeably better than what I was buying before, and they arrived faster than expected.',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      'Fit is true to size and the sole has held up well after a few months of daily wear. Already ordered another pair.',
  },
];


export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'UDT Waffle Racer', link: '/' },
      { name: 'UDT Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@udt.com', link: 'mailto:customer@udt.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
