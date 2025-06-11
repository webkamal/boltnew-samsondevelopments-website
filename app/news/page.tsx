import { Metadata } from 'next';
import NewsPage from '../components/pages/NewsPage';

export const metadata: Metadata = {
  title: 'News & Insights - Construction Industry Updates',
  description: 'Stay informed with the latest construction industry news, expert insights, and best practices from Samson Developments. Emergency response tips, insurance guidance, and building safety updates.',
  keywords: [
    'construction industry news',
    'building safety insights',
    'emergency response tips',
    'insurance claim guidance',
    'construction best practices',
    'building maintenance tips',
    'asbestos safety information',
    'storm preparation guide',
    'heritage restoration insights',
    'construction industry updates'
  ],
  openGraph: {
    title: 'News & Insights - Construction Industry Updates',
    description: 'Stay informed with the latest construction industry news, expert insights, and best practices from Samson Developments.',
    url: 'https://samsondevelopments.com.au/news',
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au/news',
  },
};

export default function News() {
  return <NewsPage />;
}