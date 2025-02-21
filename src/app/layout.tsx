import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import NavBar from './navbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'CAP@UVA',
  description: 'Live Capacity Tracker for UVA Buildings',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grid min-h-screen`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
