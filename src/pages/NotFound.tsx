import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 px-4">
      <Logo />
      <div className="text-center animate-fade-in">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! We couldn't find that page.</p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
