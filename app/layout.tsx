import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { JsonLd } from './components/JsonLd';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://samsondevelopments.com.au'),
  title: {
    default: 'Samson Developments | Integrated Building Solutions',
    template: '%s | Samson Developments'
  },
  description: 'Samson Developments delivers integrated building solutions from initial quote to final sign-off, specializing in emergency and insurance work, demolition, asbestos removal, and technical reporting.',
  keywords: [
    'construction management',
    'emergency response',
    'insurance claims',
    'building restoration',
    'demolition services',
    'asbestos removal',
    'Sydney construction',
    'building consulting',
    'disaster response',
    'property restoration'
  ],
  authors: [{ name: 'Samson Developments' }],
  creator: 'Samson Developments',
  publisher: 'Samson Developments',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://samsondevelopments.com.au',
    siteName: 'Samson Developments',
    title: 'Samson Developments | Integrated Building Solutions',
    description: 'Professional construction management, emergency response, and building restoration services across Sydney and NSW.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Samson Developments - Professional Building Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samson Developments | Integrated Building Solutions',
    description: 'Professional construction management, emergency response, and building restoration services across Sydney and NSW.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F2C59" />
        <meta name="msapplication-TileColor" content="#0F2C59" />
      </head>
      <body className="font-body text-dark">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}