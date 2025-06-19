
import { Brain, Calendar, Target, TrendingUp, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze your symptoms and eating patterns to identify personal triggers and patterns.",
    color: "text-purple-600"
  },
  {
    icon: Calendar,
    title: "Smart Symptom Tracking",
    description: "Easy-to-use daily logging that learns from your habits and provides intelligent reminders.",
    color: "text-blue-600"
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Custom nutrition and lifestyle recommendations tailored to your specific digestive needs.",
    color: "text-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Progress Insights",
    description: "Visual analytics showing your improvement over time with actionable insights for continued healing.",
    color: "text-orange-600"
  },
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Access to certified nutritionists and gastroenterologists for professional support when needed.",
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Quick Relief Tips",
    description: "Immediate relief strategies and emergency protocols for sudden symptom flare-ups.",
    color: "text-teal-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-emerald-600">Heal Your Gut</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and features designed by health experts to address the root causes of your digestive issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color} group-hover:animate-pulse`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
