'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, ArrowRight } from 'lucide-react';
import { filterPostsByTag, searchPostsClient, BlogPostMeta } from '../../lib/blog-client';
import { BlogGrid, BlogFilters, FeaturedPost } from '../../components/blog/BlogComponents';

interface BlogPageClientProps {
  allPosts: BlogPostMeta[];
  allTags: string[];
}

export default function BlogPageClient({ allPosts, allTags }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const featuredPosts = allPosts.filter(post => post.featured);

  // Filter posts based on search and tag
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (searchQuery) {
      posts = searchPostsClient(posts, searchQuery);
    }

    if (selectedTag) {
      posts = filterPostsByTag(posts, selectedTag);
    }

    return posts;
  }, [allPosts, searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">SixtyPlusUSA Blog</h1>
                <p className="text-sm text-gray-600">Health & Wellness Insights</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6"
            >
              <a href="/" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/contact" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Health & Wellness{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Insights & Tips
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Discover expert advice, health tips, and wellness strategies specifically 
              designed for Americans 60 and over.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span>Expert Articles</span>
            </div>
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <Users className="w-6 h-6 text-blue-600" />
              <span>Community Focused</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h3>
              <FeaturedPost post={featuredPosts[0]} />
            </motion.div>
          )}

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BlogFilters
              tags={allTags}
              selectedTag={selectedTag}
              onTagChange={setSelectedTag}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedTag ? `${selectedTag} Articles` : 'All Articles'}
              </h3>
              <span className="text-gray-500">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              </span>
            </div>
            
            <BlogGrid posts={filteredPosts} />
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Health Tips
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest health and wellness insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">SixtyPlusUSA</h5>
                  <p className="text-sm text-gray-300">Health & Wellness Blog</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Your trusted source for health information and wellness guidance.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Important Notice</h6>
              <p className="text-gray-300 text-lg">
                This blog is for informational purposes only and should not replace 
                professional medical advice. Always consult with your healthcare provider.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © {new Date().getFullYear()} SixtyPlusUSA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
