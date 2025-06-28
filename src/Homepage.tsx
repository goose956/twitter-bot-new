import { ArrowRight, Star, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">twitter bot</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-orange-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Welcome to twitter bot
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your Twitter Engagement with Precision
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Twitter Bot revolutionizes your social media strategy by automating lead scraping, user contact, and mass messaging on Twitter. Ideal for businesses aiming to expand their reach, engage with potential customers, and boost their brand presence, our service ensures you connect with the right audience through targeted interactions. Experience seamless automation that saves time and enhances productivity, allowing you to focus on crafting compelling content and closing deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center group transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-200 hover:border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose twitter bot?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the powerful features that make us the preferred choice for professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Lead Scraping: Efficiently gather and organize potential leads from Twitter, ensuring you never miss an opportunity to connect with key prospects.</h3>
                <p className="text-gray-600 leading-relaxed">Experience the power of professional-grade solutions designed to elevate your business performance.</p>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-2bd1b4b25c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Advanced Lead Scraping: Efficiently gather and organize potential leads from Twitter, ensuring you never miss an opportunity to connect with key prospects."
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated User Contact: Reach out to targeted Twitter users with personalized messages, fostering genuine relationships and increasing your engagement rates.</h3>
                <p className="text-gray-600 leading-relaxed">Experience the power of professional-grade solutions designed to elevate your business performance.</p>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Automated User Contact: Reach out to targeted Twitter users with personalized messages, fostering genuine relationships and increasing your engagement rates."
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mass Messaging Capabilities: Deliver impactful messages to a large audience simultaneously, maximizing your reach and ensuring your brand message resonates.</h3>
                <p className="text-gray-600 leading-relaxed">Experience the power of professional-grade solutions designed to elevate your business performance.</p>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mass Messaging Capabilities: Deliver impactful messages to a large audience simultaneously, maximizing your reach and ensuring your brand message resonates."
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 bg-gradient-to-r from-orange-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="Alex Johnson"
                className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-xl"
              />
            </div>
            <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
              "Twitter Bot has transformed how we interact with our audience. The automated messaging and lead scraping features have significantly increased our outreach and engagement, allowing us to focus on creating quality content and strategic planning."
            </blockquote>
            <div className="text-orange-200">
              <div className="font-semibold text-xl text-white">Alex Johnson</div>
              <div className="text-lg">Digital Marketing Specialist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Contact us today and discover how twitter bot can transform your business
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Email Us</h3>
                <p className="text-orange-700 text-lg">info@twitterbot.com</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Call Us</h3>
                <p className="text-purple-700 text-lg">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}