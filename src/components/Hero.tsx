
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[pulse_4s_ease-in-out_infinite_2s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-emerald-500 mr-2 animate-pulse" />
            <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
              Revolutionary Stomach Care
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Say Goodbye to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 animate-[fade-in_1s_ease-out_0.5s_both]">
              Stomach Issues
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_1s_both]">
            Tumy uses advanced AI and personalized nutrition science to help you identify triggers, 
            track symptoms, and create a custom healing plan for your digestive health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fade-in_1s_ease-out_1.5s_both]">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/signup">
                Start Your Healing Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 bg-white/60 text-gray-700 px-8 py-6 text-lg font-semibold rounded-full hover:bg-white transition-all duration-300">
              <a href="#features">See How It Works</a>
            </Button>
          </div>
          
          <div className="mt-12 animate-[fade-in_1s_ease-out_2s_both]">
            <p className="text-sm text-gray-500 mb-4">Trusted by over 50,000 people worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-medium text-gray-600">
              {["14-day free trial", "No credit card required", "Cancel anytime"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
