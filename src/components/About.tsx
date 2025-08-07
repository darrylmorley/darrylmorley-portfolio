export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto md:mx-0 mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DM</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a freelance developer with a passion for creating
              practical, maintainable solutions that solve real business
              problems. My focus is on helping small-to-medium businesses
              leverage technology to improve their operations and customer
              experience.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With extensive experience in eCommerce platforms like Lightspeed
              Retail and modern web technologies like Next.js and Tailwind CSS,
              I specialize in building robust integrations that streamline
              business processes and enhance digital presence.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, well-documented code that stands the
              test of time. Whether it&apos;s deploying self-hosted
              infrastructure, building custom APIs with Go and Node.js, or
              implementing automated SEO tracking systems, I approach every
              project with attention to detail and a commitment to quality.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 5 years of experience serving local businesses in
              Warwickshire and beyond, I understand the unique challenges facing
              small trades, consultants, and service providers in today&apos;s
              digital landscape.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Go",
                  "Node.js",
                  "PostgreSQL",
                  "Lightspeed Retail",
                  "Caddy",
                  "NGINX",
                  "HashiCorp Vault",
                  "Temporal",
                  "REST APIs",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
