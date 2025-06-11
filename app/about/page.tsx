import { Metadata } from 'next';
import AboutPage from '../components/pages/AboutPage';

export const metadata: Metadata = {
  title: 'About Us - Expert Building Solutions Team',
  description: 'Learn about Samson Developments - over 10 years of experience in construction management, emergency response, and building restoration. Meet our expert team and discover our mission and values.',
  keywords: [
    'about Samson Developments',
    'construction company Sydney',
    'building restoration experts',
    'emergency response team',
    'construction management experience',
    'building consulting team',
    'licensed builders Sydney',
    'certified asbestos removalists',
    'construction company history',
    'building solutions experts'
  ],
  openGraph: {
    title: 'About Us - Expert Building Solutions Team',
    description: 'Learn about Samson Developments - over 10 years of experience in construction management, emergency response, and building restoration.',
    url: 'https://samsondevelopments.com.au/about',
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au/about',
  },
};

export default function About() {
  return <AboutPage />;
}