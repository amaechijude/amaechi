import { servicesData } from "@/data/serviceData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  const { title, subtitle, development, mentoring } = servicesData;

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-400">{title}</h2>
          <p className="mt-4 text-lg text-[#cbd5e1]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Development Services */}
          <div>
            <div className="flex items-center mb-6">
              <development.icon className="w-8 h-8 text-[#8b5cf6] mr-4" />
              <h3 className="text-2xl font-bold text-white">
                {development.title}
              </h3>
            </div>
            <p className="text-[#cbd5e1] mb-8">{development.intro}</p>
            <div className="space-y-6">
              {development.services.map((service) => (
                <div
                  key={service.name}
                  className="bg-[#1e293b] p-6 rounded-lg border border-transparent hover:border-[#8b5cf6] hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start mb-4">
                    <service.icon className="w-8 h-8 text-[#8b5cf6] mr-4 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-[#cbd5e1]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-12">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center text-sm ml-12">
                    <span className="text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                      {service.timeline}
                    </span>
                    <span className="text-violet-300 bg-violet-900/30 px-3 py-1 rounded-full border border-violet-700/50 font-medium">
                      {service.pricing}
                    </span>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="mailto:amaechijude178@gmail.com">
                      <Button 
                        variant="link" 
                        className="text-violet-400 hover:text-violet-300 hover:bg-violet-900/20 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
                      >
                        {service.link}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentoring Services */}
          <div>
            <div className="flex items-center mb-6">
              <mentoring.icon className="w-8 h-8 text-[#8b5cf6] mr-4" />
              <h3 className="text-2xl font-bold text-white">
                {mentoring.title}
              </h3>
            </div>
            <p className="text-[#cbd5e1] mb-8">{mentoring.intro}</p>
            <div className="space-y-6">
              {mentoring.services.map((service) => (
                <div
                  key={service.name}
                  className="bg-[#1e293b] p-6 rounded-lg border border-transparent hover:border-[#8b5cf6] hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start mb-4">
                    <service.icon className="w-8 h-8 text-[#8b5cf6] mr-4 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-[#cbd5e1]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-12">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center text-sm ml-12">
                    <span className="text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                      {service.timeline}
                    </span>
                    <span className="text-violet-300 bg-violet-900/30 px-3 py-1 rounded-full border border-violet-700/50 font-medium">
                      {service.pricing}
                    </span>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="mailto:amaechijude178@gmail.com">
                      <Button 
                        variant="link" 
                        className="text-violet-400 hover:text-violet-300 hover:bg-violet-900/20 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
                      >
                        {service.link}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-white mb-6">How I Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">
                Development Process
              </h4>
              <p className="text-gray-400">
                Discovery → Planning → Development → Launch → Support
              </p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">
                Mentoring Process
              </h4>
              <p className="text-gray-400">
                Assessment → Roadmap → Learning → Practice → Job Ready
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="mailto:amaechijude178@gmail.com">
            <Button size="lg" className="bg-[#8b5cf6] hover:bg-[#7c4ee3]">
              Schedule Free Consultation
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            I&apos;ll respond within 24 hours to all inquiries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
