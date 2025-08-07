import { Button } from "@/components/ui/button"
import { 
  ShoppingCart, 
  Search, 
  Code, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  Building,
  Wrench
} from "lucide-react"

export default function Services() {
  const localServices = [
    {
      icon: Smartphone,
      title: "Starter Websites",
      description: "Perfect for trades, services, and local consultants. Get online quickly with everything you need.",
      features: ["Mobile-responsive design", "Contact forms & maps", "Local SEO basics", "Fast 2-week delivery"],
      startingPrice: "£500",
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Trade Websites",
      description: "Specialized sites for plumbers, electricians, builders with emergency contact and service areas.",
      features: ["Emergency contact forms", "Service area mapping", "Before/after galleries", "Quote request forms"],
      startingPrice: "£750",
      color: "blue"
    }
  ]

  const technicalServices = [
    {
      icon: ShoppingCart,
      title: "eCommerce Platforms",
      description: "Enterprise online stores with advanced integrations, inventory management, and payment processing.",
      features: ["Lightspeed Retail integration", "Multi-payment gateways", "Inventory automation", "Performance optimization"],
      startingPrice: "£2,500",
      color: "purple"
    },
    {
      icon: Code,
      title: "API Development",
      description: "Custom REST APIs, third-party integrations, and backend automation for complex business workflows.",
      features: ["Go/Node.js backends", "Database optimization", "Security implementation", "Complete documentation"],
      startingPrice: "£1,200",
      color: "purple"
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Advanced technical SEO, automation tools, and performance optimization for high-traffic sites.",
      features: ["Automated rank tracking", "Core Web Vitals optimization", "Schema markup", "Performance monitoring"],
      startingPrice: "£800",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Services for Every Business Need
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From simple local business websites to complex eCommerce platforms, 
            I provide the right solution for your business size and goals.
          </p>
        </div>

        {/* Local Business Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Building className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">For Local Businesses</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              Fast & Affordable
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {localServices.map((service, index) => (
              <div 
                key={index}
                className="border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-blue-50/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-xl font-bold text-blue-700">
                      From {service.startingPrice}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Technical/Enterprise Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-slate-900">Advanced eCommerce & Technical</h3>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
              Enterprise Solutions
            </span>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {technicalServices.map((service, index) => (
              <div 
                key={index}
                className="border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-purple-50/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-lg font-bold text-purple-700">
                      From {service.startingPrice}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-purple-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm">
                  Discuss Project
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
