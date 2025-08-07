import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Search,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "eCommerce Development",
      description:
        "Custom online stores with payment integrations, inventory management, and performance optimization.",
      features: [
        "Lightspeed Retail integration",
        "Stripe/Worldpay setup",
        "Mobile-responsive design",
        "SEO optimization",
      ],
      startingPrice: "£1,500",
      color: "emerald",
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description:
        "Technical SEO audits, page speed optimization, and structured data implementation.",
      features: [
        "Core Web Vitals optimization",
        "Schema markup",
        "Meta tag optimization",
        "Performance monitoring",
      ],
      startingPrice: "£300",
      color: "blue",
    },
    {
      icon: Code,
      title: "API Development",
      description:
        "Custom REST APIs, third-party integrations, and backend automation solutions.",
      features: [
        "Go/Node.js backends",
        "Database design",
        "Security implementation",
        "Documentation",
      ],
      startingPrice: "£800",
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Business Websites",
      description:
        "Modern, fast-loading websites for local trades, services, and consultants.",
      features: [
        "Mobile-first design",
        "Content management",
        "Local SEO",
        "Google integration",
      ],
      startingPrice: "£500",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technical Solutions That Drive Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From simple business websites to complex eCommerce platforms, I
            deliver fast, SEO-optimized solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(
                    service.color
                  )}`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-2xl font-bold text-slate-900">
                    From {service.startingPrice}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
