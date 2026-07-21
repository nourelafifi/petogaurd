import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Petovital | Precision Bio-Available Veterinary Nutrition',
  description: 'Clinical grade liquid lipid tonic for rapid post-operative animal recovery and mucosal absorption.',
  openGraph: {
    title: 'Petovital - Rapid Cellular Recovery & Vitality',
    description: 'Delivering 98.4% bio-availability directly into the mucosal lining without digestive delay.',
    images: ['/hero-product.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/icon.png'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
