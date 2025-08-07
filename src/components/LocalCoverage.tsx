import { MapPin, Clock, Shield } from "lucide-react";

export default function LocalCoverage() {
  const locations = [
    "Warwick",
    "Leamington Spa",
    "Coventry",
    "Rugby",
    "Stratford-upon-Avon",
    "Kenilworth",
    "Nuneaton",
    "Banbury",
    "Daventry",
    "Shipston-on-Stour",
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Serving Warwickshire & Beyond
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Local expertise with personal service. I work with businesses across
            Warwickshire and surrounding areas, providing reliable technical
            support and digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Presence</h3>
            <p className="text-slate-600">
              Based in Warwickshire with deep understanding of local business
              needs
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
            <p className="text-slate-600">
              Fast turnaround times and responsive communication for urgent
              needs
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
            <p className="text-slate-600">
              Ongoing maintenance and support to keep your business running
              smoothly
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">
            Areas I Serve:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-emerald-300 transition-colors"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
