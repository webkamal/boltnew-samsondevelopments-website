import { Metadata } from 'next';
import ServicesPage from '../components/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services - Construction, Emergency Response & Building Solutions',
  description: 'Comprehensive building services including construction project management, 24/7 emergency response, insurance claim management, demolition, asbestos removal, and building consulting across Sydney and NSW.',
  keywords: [
    'construction project management',
    'emergency disaster response',
    'insurance claim management',
    'building consulting services',
    'demolition and excavation',
    'asbestos removal services',
    'catastrophic event response',
    'restoration services',
    'engineering consulting',
    'building diagnostics'
  ],
  openGraph: {
    title: 'Our Services - Construction, Emergency Response & Building Solutions',
    description: 'Comprehensive building services including construction project management, 24/7 emergency response, insurance claim management, and specialized restoration services.',
    url: 'https://samsondevelopments.com.au/services',
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}