import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Phone, Wrench } from "lucide-react"

export default function LocalBusinessBanner() {
  return (
    <section className="py-12 bg-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                  Local Businesses
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Need a Simple, Professional Website?
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Perfect for trades, services, and consultants in Warwickshire. 
                Get online quickly with a mobile-friendly site that brings in more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started from £500
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Phone className="mr-2 w-4 h-4" />
                  Call for Free Quote
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">Quick Turnaround</h3>
                <p className="text-sm text-slate-600">Most sites live within 2 weeks</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Phone className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">Local Support</h3>
                <p className="text-sm text-slate-600">Direct contact, no call centers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Wrench className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">Trade Focused</h3>
                <p className="text-sm text-slate-600">Built for plumbers, electricians, builders</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ArrowRight className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">More Leads</h3>
                <p className="text-sm text-slate-600">Designed to convert visitors to customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
