import { Metadata } from 'next';
import ThankYouPage from '../components/pages/ThankYouPage';

export const metadata: Metadata = {
  title: 'Thank You - Message Received',
  description: 'Thank you for contacting Samson Developments. We have received your message and will respond within 24 hours during business days.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYou() {
  return <ThankYouPage />;
}