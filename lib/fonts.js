// lib/fonts.js
import { Cormorant_Garamond, Inter } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant', // Still useful for CSS variable access
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});