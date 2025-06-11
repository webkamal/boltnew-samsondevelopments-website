import { Metadata } from 'next';
import ProjectsPage from '../components/pages/ProjectsPage';

export const metadata: Metadata = {
  title: 'Our Projects - Construction & Restoration Portfolio',
  description: 'Explore our portfolio of successful construction, restoration, and emergency response projects across Sydney and NSW. From heritage building restoration to commercial construction management.',
  keywords: [
    'construction projects Sydney',
    'building restoration portfolio',
    'emergency response projects',
    'commercial construction',
    'heritage building restoration',
    'insurance repair projects',
    'demolition projects',
    'asbestos removal projects',
    'disaster recovery projects',
    'construction case studies'
  ],
  openGraph: {
    title: 'Our Projects - Construction & Restoration Portfolio',
    description: 'Explore our portfolio of successful construction, restoration, and emergency response projects across Sydney and NSW.',
    url: 'https://samsondevelopments.com.au/projects',
  },
  alternates: {
    canonical: 'https://samsondevelopments.com.au/projects',
  },
};

export default function Projects() {
  return <ProjectsPage />;
}