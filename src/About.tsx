import { MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">twitter bot</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#about" className="text-orange-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-orange-900 mb-8 text-center">
            Maximize Your Twitter Outreach with Twitter Bot
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
            Automate Engagement, Generate Leads, and Amplify Your Message
          </p>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed mb-8">
              Twitter Bot is your go-to solution for automating your Twitter interactions and maximizing your online presence. Our advanced tool scrapes potential leads, seamlessly interacts with users, and delivers your messages en masse, ensuring your brand message reaches the right audience effortlessly. Designed for businesses looking to enhance their social media strategy, Twitter Bot streamlines your outreach efforts while saving you time and resources.
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-16">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Automated Lead Scraping: Efficiently gather potential leads by targeting specific criteria and keywords, ensuring you connect with audiences relevant to your business.</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Seamless User Engagement: Contact and interact with Twitter users automatically, enhancing your brand's visibility and fostering meaningful connections without manual intervention.</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Mass Messaging Capability: Deliver your message to a large audience with just a few clicks, ensuring consistent communication and maximizing your outreach potential.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}