"use client"

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function RecentWork() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      title: "Local Trade Services Website",
      description:
        "Fast, mobile-responsive website for Warwickshire trades company with local SEO optimization and lead generation forms.",
      tech: ["Next.js", "Tailwind CSS", "Local SEO"],
      category: "Local Business",
      type: "local",
      liveUrl: "#",
      featured: true,
      results: "300% increase in online enquiries"
    },
    {
      title: "Multi-Vendor eCommerce Platform",
      description:
        "Enterprise eCommerce solution with Lightspeed Retail integration, automated inventory sync, and multi-payment gateway support.",
      tech: ["Next.js", "Node.js", "Lightspeed API", "Stripe", "PostgreSQL"],
      category: "eCommerce Platform",
      type: "technical",
      githubUrl: "#",
      featured: true,
      results: "40% reduction in order processing time"
    },
    {
      title: "Restaurant Booking System",
      description:
        "Complete booking and table management system with real-time availability, payment integration, and customer notifications.",
      tech: ["Go", "PostgreSQL", "React", "Stripe"],
      category: "Web Application",
      type: "technical",
      liveUrl: "#",
      featured: false,
      results: "Streamlined operations for 50+ table restaurant"
    },
    {
      title: "Local Plumber Website",
      description:
        "Professional website for local plumbing services with emergency contact forms, service area mapping, and mobile-first design.",
      tech: ["Next.js", "Tailwind CSS", "Google Maps"],
      category: "Local Business",
      type: "local",
      liveUrl: "#",
      featured: false,
      results: "250% increase in call bookings"
    },
    {
      title: "SEO Automation API",
      description:
        "Advanced SEO auditing and rank tracking API with automated reporting, competitive analysis, and performance monitoring.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      category: "API Development",
      type: "technical",
      githubUrl: "#",
      featured: false,
      results: "Automated SEO reporting for 100+ websites"
    },
    {
      title: "Consultant Portfolio Site",
      description:
        "Professional portfolio and lead generation website for business consultant with integrated CRM and booking system.",
      tech: ["Next.js", "Tailwind CSS", "CRM Integration"],
      category: "Local Business", 
      type: "local",
      liveUrl: "#",
      featured: false,
      results: "5x increase in qualified leads"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "local", label: "Local Business", count: projects.filter(p => p.type === "local").length },
    { id: "technical", label: "eCommerce & Technical", count: projects.filter(p => p.type === "technical").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Recent Work & Case Studies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            See how I&apos;ve helped both local businesses and enterprise clients 
            achieve their digital goals with tailored solutions.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-slate-200 relative">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                  {/* Results Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                      {project.results}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.type === "local" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-purple-100 text-purple-700"
                    }`}>
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="outline" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* More Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    project.type === "local" 
                      ? "bg-blue-100 text-blue-700" 
                      : "bg-purple-100 text-purple-700"
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-3">
                  {project.description}
                </p>
                
                {/* Results */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {project.results}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
