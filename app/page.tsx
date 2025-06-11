import { Metadata } from 'next';
import HomePage from './components/pages/HomePage';

export const metadata: Metadata = {
  title: 'Samson Developments | Integrated Building Solutions',
  description: 'Professional construction management, emergency response, and building restoration services. 24/7 emergency response, insurance claim management, and expert building consulting across Sydney and NSW.',
  keywords: [
    'construction management Sydney',
    'emergency building response',
    'insurance claim management',
    'building restoration services',
    'demolition services NSW',
    'asbestos removal Sydney',
    '24/7 emergency response',
    'building consulting',
    'disaster response team',
    'property restoration'
  ],
  openGraph: {
    title: 'Samson Developments | Integrated Building Solutions',
    description: 'Professional construction management, emergency response, and building restoration services across Sydney and NSW.',
    url: 'https://samsondevelopments.com.au',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Samson Developments - Professional Building Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au',
  },
};

export default function Home() {
  return <HomePage />;
}