'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

export default function TermsOfService() {
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
              Terms of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Service
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
              Please read these terms carefully before using our website and services.
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

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h3>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  By accessing and using SixtyPlusUSA ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-gray-700 font-medium">
                    <strong>Important:</strong> These terms apply to all visitors, users, and others who access or use the Service.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Use of Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Use of Service</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Permitted Uses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Access health information for personal use</li>
                    <li>• Share information with family members</li>
                    <li>• Contact us with questions or feedback</li>
                    <li>• Use our resources for educational purposes</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Prohibited Uses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use for commercial purposes without permission</li>
                    <li>• Attempt to hack or damage our systems</li>
                    <li>• Share false or misleading information</li>
                    <li>• Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Medical Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Medical Disclaimer</h3>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Important Medical Notice</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>The information on this website is for educational purposes only and is not intended as medical advice.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Always consult with a qualified healthcare provider before making any medical decisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Do not delay seeking professional medical advice because of information on this website.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>In case of a medical emergency, call 911 or your local emergency number immediately.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Intellectual Property</h3>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of SixtyPlusUSA and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Our Rights</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• All content is owned by SixtyPlusUSA</li>
                      <li>• Trademarks are protected</li>
                      <li>• Design elements are proprietary</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Your Rights</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Personal, non-commercial use only</li>
                      <li>• Share with family members</li>
                      <li>• Print for personal reference</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Limitation of Liability</h3>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  In no event shall SixtyPlusUSA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-gray-700 font-medium">
                    <strong>Note:</strong> This limitation applies to the fullest extent permitted by law and does not affect your rights as a consumer.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Changes to Terms</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>We will notify users of significant changes via email or website notice</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-green-50 rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About These Terms?</h3>
              <p className="text-gray-700 text-lg mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:legal@sixtyplususa.com"
                  className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Email Legal Team
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
                  <a href="/terms-of-service" className="text-blue-400 font-semibold text-lg">
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
