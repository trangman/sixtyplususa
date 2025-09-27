'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, CheckCircle, Star, Clock, Zap, Target, TrendingUp, Award } from 'lucide-react';
import { ProstaViveLink } from '../components/UTMLink';
import { useUTMConversion } from '../components/UTMTracker';
import UTMAnalytics from '../components/UTMAnalytics';

export default function Home() {
  const { trackConversionEvent } = useUTMConversion();

  const handleCTAClick = (ctaName: string) => {
    trackConversionEvent(`cta_click_${ctaName}`, undefined, undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
                <h1 className="text-2xl font-bold text-gray-800">Prostate Health</h1>
                <p className="text-sm text-gray-600">by SixtyPlusUSA</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6"
            >
              <a href="#benefits" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Benefits
              </a>
              <a href="#ingredients" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Ingredients
              </a>
              <a href="#testimonials" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              #1 Rated Prostate Health Supplement
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              The Most Potent, Fast-Acting Formula for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Prostate Health & Strong Flow
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
              Thousands of men of all ages are supporting healthy, youthful prostates along with strong urine flow, 
              an active sex life and deep, satisfying sleep every night...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <Shield className="w-6 h-6 text-green-600" />
              <span>All-Natural Ingredients</span>
            </div>
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <Clock className="w-6 h-6 text-blue-600" />
              <span>Fast-Acting Results</span>
            </div>
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <Users className="w-6 h-6 text-purple-600" />
              <span>Thousands of Happy Customers</span>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8"
          >
            <ProstaViveLink 
              source="sixtyplususa"
              medium="bridge_page"
              campaign="prostavive_hero"
              content="primary_cta"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => handleCTAClick('hero_primary')}
            >
              <Zap className="w-6 h-6 mr-3" />
              Get ProstaVive Now - Limited Time Offer
              <ArrowRight className="w-6 h-6 ml-3" />
            </ProstaViveLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-sm text-gray-500"
          >
            <p>✓ 180-Day Money-Back Guarantee ✓ Free Shipping ✓ No Auto-Ship</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experience Powerful Transformation with Life-Changing Benefits
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ProstaVive&apos;s unique formula floods your body with natural, blood-boosting nutrients 
              that support your circulatory system and prostate health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Healthy Prostate</h4>
              <p className="text-gray-600">Support optimal prostate function and maintain healthy prostate size</p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Strong Urine Flow</h4>
              <p className="text-gray-600">Improve bladder control and maintain healthy urinary function</p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Increased Energy</h4>
              <p className="text-gray-600">Boost natural energy levels and feel more vibrant throughout the day</p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Better Sleep</h4>
              <p className="text-gray-600">Enjoy deeper, more satisfying sleep every night</p>
            </motion.div>
          </div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <ProstaViveLink 
              source="sixtyplususa"
              medium="bridge_page"
              campaign="prostavive_benefits"
              content="secondary_cta"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
              onClick={() => handleCTAClick('benefits_secondary')}
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Your Transformation Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </ProstaViveLink>
          </motion.div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Powerful Natural Ingredients
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked, unique nutrients from the purest sources that combine to create a powerful synergistic effect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ingredient 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">Boron</h4>
              <p className="text-gray-600 mb-4">Helps optimize detoxification, supports healthy inflammation response and brain function.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Prostate Booster
              </div>
            </motion.div>

            {/* Ingredient 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">Tongkat Ali</h4>
              <p className="text-gray-600 mb-4">Used for centuries to boost sexual function and prostate health with powerful antioxidant properties.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Sexual Performance
              </div>
            </motion.div>

            {/* Ingredient 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">Ashwagandha</h4>
              <p className="text-gray-600 mb-4">Ancient herb that promotes lean muscle mass, burns fat, and optimizes prostate detoxification.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Energy & Vitality
              </div>
            </motion.div>

            {/* Ingredient 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">Panax Ginseng</h4>
              <p className="text-gray-600 mb-4">Supports healthy blood flow in the prostate, cognition, and immune function.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Blood Flow Support
              </div>
            </motion.div>

            {/* Ingredient 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">Maca Root</h4>
              <p className="text-gray-600 mb-4">Ancient Peruvian plant that boosts prostate function, sex drive and energy levels.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Libido Enhancement
              </div>
            </motion.div>

            {/* Ingredient 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">Nettle Root</h4>
              <p className="text-gray-600 mb-4">Supports healthy sex hormone levels and urinary tract health in men.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Hormone Balance
              </div>
            </motion.div>
          </div>

          {/* Tertiary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-12"
          >
            <ProstaViveLink 
              source="sixtyplususa"
              medium="bridge_page"
              campaign="prostavive_ingredients"
              content="tertiary_cta"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              onClick={() => handleCTAClick('ingredients_tertiary')}
            >
              <Star className="w-5 h-5 mr-2" />
              Get ProstaVive with Special Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </ProstaViveLink>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their prostate health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                &ldquo;After just 3 weeks of taking ProstaVive, I noticed a significant improvement in my flow and energy levels. 
                I sleep better and feel more confident than I have in years!&rdquo;
              </p>
              <div className="font-semibold text-gray-800">- Michael R., 67</div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                &ldquo;I was skeptical at first, but ProstaVive has been a game-changer. My doctor even commented on my improved 
                prostate health during my last checkup. Highly recommended!&rdquo;
              </p>
              <div className="font-semibold text-gray-800">- David L., 71</div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                &ldquo;The natural ingredients give me peace of mind, and the results speak for themselves. 
                Better sleep, more energy, and improved intimacy with my wife. Thank you ProstaVive!&rdquo;
              </p>
              <div className="font-semibold text-gray-800">- Robert K., 64</div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Prostate Health?</h4>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of men who have already experienced the life-changing benefits of ProstaVive
              </p>
              <ProstaViveLink 
                source="sixtyplususa"
                medium="bridge_page"
                campaign="prostavive_testimonials"
                content="final_cta"
                className="inline-flex items-center bg-white text-blue-600 font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                onClick={() => handleCTAClick('testimonials_final')}
              >
                <Zap className="w-6 h-6 mr-3" />
                Order ProstaVive Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </ProstaViveLink>
              <p className="text-sm mt-4 opacity-75">
                ✓ 180-Day Money-Back Guarantee ✓ Free Shipping ✓ No Auto-Ship
              </p>
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
                  <h5 className="text-xl font-bold">Prostate Health</h5>
                  <p className="text-sm text-gray-300">by SixtyPlusUSA</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Your trusted source for prostate health information and natural solutions.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <ProstaViveLink 
                    source="sixtyplususa"
                    medium="bridge_page"
                    campaign="prostavive_footer"
                    content="footer_link"
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                    onClick={() => handleCTAClick('footer_link')}
                  >
                    Order ProstaVive
                  </ProstaViveLink>
                </li>
                <li>
                  <a href="https://sixtyplususa.com/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://sixtyplususa.com" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Back to SixtyPlusUSA
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Important Notice</h6>
              <p className="text-gray-300 text-lg">
                This information is for educational purposes only. Always consult with your healthcare provider 
                before starting any supplement regimen. Results may vary.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © {new Date().getFullYear()} SixtyPlusUSA. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Statements on this website have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </div>
        </div>
      </footer>
      
      {/* UTM Analytics Dashboard */}
      <UTMAnalytics />
    </div>
  );
}