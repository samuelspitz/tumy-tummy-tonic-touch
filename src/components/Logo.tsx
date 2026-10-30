import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo = ({ className, light = false }: LogoProps) => (
  <Link to="/" className={cn("flex items-center gap-2 font-bold text-xl", className)}>
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 shadow-md">
      <Leaf className="h-5 w-5 text-white" />
    </span>
    <span className={light ? "text-white" : "text-gray-900"}>Tumy</span>
  </Link>
);

export default Logo;
