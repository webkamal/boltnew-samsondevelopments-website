'use client';

import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import CallToAction from '../CallToAction';
import ClientLayout from '../ClientLayout';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Emergency Response Best Practices: What Property Owners Need to Know",
    excerpt: "Learn essential emergency response protocols that can minimize damage and ensure safety during building emergencies.",
    content: "When disaster strikes, the first few hours are critical. Our emergency response team has developed proven protocols that can significantly reduce damage and protect lives. This comprehensive guide covers immediate response steps, when to call professionals, and how to prepare your property for potential emergencies.",
    author: "John Smith",
    date: "2024-01-15",
    category: "Emergency Response",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    readTime: "5 min read",
    tags: ["Emergency", "Safety", "Property Management"]
  },
  {
    id: 2,
    title: "Navigating Insurance Claims: A Complete Guide for Property Damage",
    excerpt: "Understanding the insurance claim process can save you time, money, and stress when dealing with property damage.",
    content: "Insurance claims can be complex and overwhelming, especially when you're dealing with property damage. Our experts share insider knowledge on how to navigate the claims process effectively, what documentation you need, and how to ensure you receive fair compensation for your losses.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    category: "Insurance",
    image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
    readTime: "7 min read",
    tags: ["Insurance", "Claims", "Documentation"]
  },
  {
    id: 3,
    title: "The Future of Construction: Sustainable Building Practices in 2024",
    excerpt: "Explore the latest trends in sustainable construction and how they're shaping the future of the building industry.",
    content: "Sustainability is no longer optional in construction—it's essential. From green building materials to energy-efficient systems, we explore the latest innovations that are transforming how we build. Learn about the benefits of sustainable construction and how it can add value to your property.",
    author: "Michael Zhang",
    date: "2024-01-05",
    category: "Construction",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
    readTime: "6 min read",
    tags: ["Sustainability", "Innovation", "Green Building"]
  },
  {
    id: 4,
    title: "Asbestos Safety: What Every Property Owner Should Know",
    excerpt: "Understanding asbestos risks and safe removal procedures is crucial for property owners, especially in older buildings.",
    content: "Asbestos remains a significant concern in many Australian buildings constructed before 1990. This comprehensive guide covers identification, health risks, legal requirements, and safe removal procedures. Learn when to call professionals and how to protect yourself and others from asbestos exposure.",
    author: "Emma Thompson",
    date: "2023-12-28",
    category: "Safety",
    image: "https://images.pexels.com/photos/5119200/pexels-photo-5119200.jpeg",
    readTime: "8 min read",
    tags: ["Asbestos", "Safety", "Compliance"]
  },
  {
    id: 5,
    title: "Storm Season Preparation: Protecting Your Property",
    excerpt: "Prepare your property for storm season with these essential maintenance tips and emergency preparedness strategies.",
    content: "Australia's storm season can bring devastating weather that damages properties and disrupts lives. Our experts share essential preparation strategies, from routine maintenance checks to emergency planning. Learn how to protect your property and minimize storm damage before severe weather strikes.",
    author: "David Wilson",
    date: "2023-12-20",
    category: "Maintenance",
    image: "https://images.pexels.com/photos/3807317/pexels-photo-3807317.jpeg",
    readTime: "6 min read",
    tags: ["Storm Preparation", "Maintenance", "Prevention"]
  },
  {
    id: 6,
    title: "Heritage Building Restoration: Preserving Australia's Architectural Legacy",
    excerpt: "Discover the specialized techniques and considerations involved in restoring heritage buildings while maintaining their historical integrity.",
    content: "Heritage buildings require specialized restoration techniques that balance modern safety requirements with historical preservation. Our team shares insights into the unique challenges of heritage restoration, from sourcing authentic materials to navigating heritage regulations and compliance requirements.",
    author: "Lisa Chen",
    date: "2023-12-15",
    category: "Restoration",
    image: "https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg",
    readTime: "9 min read",
    tags: ["Heritage", "Restoration", "Preservation"]
  }
];

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    // Initialize fade-in animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <ClientLayout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              News & Insights
            </h1>
            <p className="text-xl text-white/80">
              Stay informed with the latest industry news, expert insights, and best practices from our team
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-light">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
              <h2 className="section-title">Featured Article</h2>
            </div>

            <div className="fade-in">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <Image 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-dark rounded-full mr-3">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-sm text-gray">{filteredPosts[0].readTime}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">{filteredPosts[0].title}</h3>
                  <p className="mb-4 text-gray">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center mb-6 text-sm text-gray">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{filteredPosts[0].author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray rounded">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn btn-primary self-start group">
                    Read Full Article
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle">
              Expert insights and industry updates from our team
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.slice(1).map((post) => (
              <div key={post.id} className="fade-in">
                <article className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-dark rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-gray">
                      <User size={16} className="mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-primary hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-gray text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray">{post.readTime}</span>
                      <button className="text-accent hover:text-primary transition-colors duration-300 font-medium text-sm">
                        Read More →
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray rounded">
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-white mb-4">Stay Updated</h2>
            <p className="section-subtitle text-gray-300 mb-8">
              Subscribe to our newsletter for the latest industry insights and company updates
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:max-w-md sm:mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn bg-accent text-dark hover:bg-accent/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </ClientLayout>
  );
};

export default NewsPage;