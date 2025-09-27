'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { BlogPostMeta } from '../lib/blog-client';

interface HomeClientProps {
  blogPosts: BlogPostMeta[];
}

export default function HomeClient({ blogPosts }: HomeClientProps) {
  const latestPosts = blogPosts.slice(0, 3);

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
              <h1 className="text-2xl font-bold text-gray-800">SixtyPlusUSA</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6"
            >
              <a href="/about" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/blog" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </a>
              <a href="#health-focus" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Health Topics
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
              Helping Americans 60+ Live{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Healthier, Happier Lives
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
              Empowering seniors to stay active, informed, and independent through trusted health resources 
              and wellness guidance tailored specifically for Americans over 60.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <Shield className="w-6 h-6 text-green-600" />
              <span>Trusted Information</span>
            </div>
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <Users className="w-6 h-6 text-blue-600" />
              <span>Community Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Focus Cards */}
      <section id="health-focus" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Health Focus Areas
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our specialized health resources designed specifically for seniors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prostate Health Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <a 
                href="https://prostate.sixtyplususa.com"
                className="block bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    Prostate Health
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Essential information about prostate health, screening, and wellness for men over 60.
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold text-lg group-hover:text-blue-700">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Placeholder for future cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group"
            >
              <div className="block bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200 opacity-60">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-600 mb-4">
                    Coming Soon
                  </h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    More health focus areas will be added soon.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group"
            >
              <div className="block bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200 opacity-60">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-600 mb-4">
                    Coming Soon
                  </h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    More health focus areas will be added soon.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {latestPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Latest Health Insights
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay informed with our latest articles on health, wellness, and senior living.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {format(new Date(post.date), 'MMM dd')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readingTime} min
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                      <a href={`/blog/${post.slug}`} className="block">
                        {post.title}
                      </a>
                    </h4>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mt-12"
            >
              <a
                href="/blog"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-xl font-bold">SixtyPlusUSA</h5>
              </div>
              <p className="text-gray-300 text-lg">
                Your trusted partner in senior health and wellness.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#health-focus" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Health Topics
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Legal</h6>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Terms of Service
                  </a>
                </li>
              </ul>
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