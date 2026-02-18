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
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
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
    description: "The Nike Air Jordan-01 is a classic sneaker that combines style and comfort. Perfect for casual wear or sports activities, it features a durable sole and a breathable upper."
  },
  {
    imgURL: shoe5,
    name: 'UDT Air Jordan-10',
    price: '$210.20',
    slug: 'udt-air-jordan-10',
    description: "Step up your game with the Nike Air Jordan-10. Designed for performance, this shoe offers superior cushioning and support for all-day wear."
  },
  {
    imgURL: shoe6,
    name: 'UDT Air Jordan-100',
    price: '$220.20',
    slug: 'udt-air-jordan-100',
    description: "Experience the future of footwear with the Nike Air Jordan-100. Innovative design meets premium materials for a shoe that stands out from the crowd."
  },
  {
    imgURL: shoe7,
    name: 'UDT Air Jordan-001',
    price: '$230.20',
    slug: 'udt-air-jordan-001',
    description: "The Nike Air Jordan-001 is a timeless classic. With its sleek silhouette and iconic branding, it's a must-have for any sneakerhead."
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
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
