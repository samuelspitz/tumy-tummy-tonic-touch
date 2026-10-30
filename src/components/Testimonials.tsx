
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content: "After years of stomach issues, Tumy helped me identify that gluten was my main trigger. I'm now symptom-free for 6 months!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "The AI analysis was incredibly accurate. It spotted patterns I never noticed and gave me a clear path to healing.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    content: "Tumy's personalized meal plans and progress tracking have completely transformed my digestive health. Highly recommend!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 scroll-mt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Stories from
            <span className="block text-emerald-600">Real People</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of people who have transformed their digestive health with Tumy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-200 group-hover:text-emerald-300 transition-colors duration-300" />
                
                <div className="flex items-center mb-6">
                  <div
                    aria-hidden="true"
                    className="flex w-16 h-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 text-lg font-bold text-white border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
