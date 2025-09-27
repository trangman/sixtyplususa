'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Lock, Eye, Database, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Link href="/" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
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
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Policy
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
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Information We Collect</h3>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Contact information (name, email address) when you reach out to us</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Health-related questions or concerns you share with us</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Any feedback or comments you provide</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Website usage data (pages visited, time spent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Device information (browser type, operating system)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>IP address and general location information</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">How We Use Your Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Primary Uses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Respond to your inquiries and provide support</li>
                    <li>• Improve our website and services</li>
                    <li>• Send important updates about our services</li>
                    <li>• Ensure website security and prevent fraud</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">We Do NOT</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sell your personal information to third parties</li>
                    <li>• Use your information for marketing without consent</li>
                    <li>• Share health information without your permission</li>
                    <li>• Track you across other websites</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Data Protection & Security</h3>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We take the security of your information seriously and implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Security Measures</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure servers and databases</li>
                      <li>• Regular security updates</li>
                      <li>• Limited access to personal data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Data Retention</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• We retain data only as long as necessary</li>
                      <li>• Contact information: 3 years</li>
                      <li>• Website analytics: 2 years</li>
                      <li>• You can request data deletion anytime</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Your Privacy Rights</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">You Have the Right To:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Delete your personal data</li>
                    <li>• Object to data processing</li>
                    <li>• Data portability</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">How to Exercise Rights</h4>
                  <p className="text-gray-700 mb-3">Contact us at:</p>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>privacy@sixtyplususa.com</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    We will respond to your request within 30 days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Cookies & Tracking</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We use cookies and similar technologies to improve your experience on our website. These help us understand how you use our site and make it more user-friendly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                    <p className="text-gray-700 text-sm">Required for website functionality</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-700 text-sm">Help us improve our website</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Preference Cookies</h4>
                    <p className="text-gray-700 text-sm">Remember your settings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-blue-50 rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About This Policy?</h3>
              <p className="text-gray-700 text-lg mb-6">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:privacy@sixtyplususa.com"
                  className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Email Privacy Team
                </a>
              </div>
            </motion.div>
          </div>
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
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
                    About Us
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
                  <a href="/privacy-policy" className="text-blue-400 font-semibold text-lg">
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
