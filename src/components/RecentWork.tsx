import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function RecentWork() {
  const projects = [
    {
      title: "Local Trade Services Website",
      description:
        "Fast, mobile-responsive website for Warwickshire trades company with local SEO optimization.",
      tech: ["Next.js", "Tailwind CSS", "Local SEO"],
      category: "Business Website",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "eCommerce Platform Integration",
      description:
        "Custom Lightspeed Retail integration with automated inventory sync and payment processing.",
      tech: ["Node.js", "Lightspeed API", "Stripe"],
      category: "eCommerce",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Restaurant Management System",
      description:
        "Complete booking and management system with real-time updates and payment integration.",
      tech: ["Go", "PostgreSQL", "React"],
      category: "Web App",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "SEO Audit Tool",
      description:
        "Automated SEO auditing tool for local businesses with performance tracking and reporting.",
      tech: ["Python", "React", "API Development"],
      category: "Tool",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Recent Work & Case Studies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how I&apos;ve helped local businesses improve their online
            presence and streamline their operations with custom technical
            solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
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
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
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
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
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
