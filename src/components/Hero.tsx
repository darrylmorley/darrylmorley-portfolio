import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 mb-6 text-sm text-slate-300">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Warwickshire & Surrounding Areas</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>5+ Years Experience</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional eCommerce &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {" "}API Development
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
            Specialized freelance developer delivering enterprise-grade eCommerce solutions, 
            custom API integrations, and high-performance websites for growing businesses.
          </p>

          {/* Clear pricing */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <p className="text-lg font-semibold mb-2">eCommerce & API Development</p>
            <p className="text-3xl font-bold text-emerald-400">
              Starting from £1,200
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Complete platforms from £2,500
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3"
            >
              View Technical Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
