
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-400 animate-pulse" />
              Tumy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering people to take control of their digestive health through 
              personalized insights and AI-driven recommendations.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "How it Works", "Success Stories", "Scientific Research"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Community"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-300">hello@tumy.app</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tumy. All rights reserved. Made with love for better gut health.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            FDA Disclaimer: This app is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
