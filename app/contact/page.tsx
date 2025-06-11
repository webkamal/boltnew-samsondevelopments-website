import { Metadata } from 'next';
import ContactPage from '../components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us - Get Expert Building Solutions',
  description: 'Contact Samson Developments for construction management, emergency response, and building restoration services. 24/7 emergency line: 1300 888 777. Located in Burwood, NSW.',
  keywords: [
    'contact Samson Developments',
    'building services contact',
    'emergency response contact',
    'construction quote request',
    'building consultation',
    'Burwood construction company',
    '24/7 emergency building services',
    'insurance claim assistance',
    'building restoration contact',
    'construction management inquiry'
  ],
  openGraph: {
    title: 'Contact Us - Get Expert Building Solutions',
    description: 'Contact Samson Developments for construction management, emergency response, and building restoration services. 24/7 emergency response available.',
    url: 'https://samsondevelopments.com.au/contact',
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}