
import { ArrowRight, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full animate-[pulse_3s_ease-in-out_infinite_2s]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <Smartphone className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Digestive Health?</span>
          </h2>
          
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join over 50,000 people who have found relief from stomach issues. 
            Download Tumy today and start your personalized healing journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Free App
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Start Web Version
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-emerald-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Free 14-day trial</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
