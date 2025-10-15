
"use client";
import { servicesData } from "@/data/serviceData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  const { title, subtitle, development, mentoring } = servicesData;

  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const columnAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.07, duration: 0.5 },
    }),
  };

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-[#0f172a]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-lg text-[#cbd5e1]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Development Services */}
          <motion.div
            variants={columnAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <development.icon className="w-8 h-8 text-[#8b5cf6] mr-4" />
              <h3 className="text-2xl font-bold text-white">
                {development.title}
              </h3>
            </div>
            <p className="text-[#cbd5e1] mb-8">{development.intro}</p>
            <div className="space-y-6">
              {development.services.map((service, i) => (
                <motion.div
                  key={service.name}
                  className="bg-[#1e293b] p-6 rounded-lg border border-transparent hover:border-[#8b5cf6] transition-all duration-300 transform hover:-translate-y-1"
                  custom={i}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
                  <div className="flex justify-between items-center text-sm text-gray-500 ml-12">
                    <span>{service.timeline}</span>
                    <span>{service.pricing}</span>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="mailto:amaechijude178@gmail.com">
                      <Button variant="link" className="text-[#8b5cf6]">
                        {service.link}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mentoring Services */}
          <motion.div
            variants={columnAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <mentoring.icon className="w-8 h-8 text-[#8b5cf6] mr-4" />
              <h3 className="text-2xl font-bold text-white">
                {mentoring.title}
              </h3>
            </div>
            <p className="text-[#cbd5e1] mb-8">{mentoring.intro}</p>
            <div className="space-y-6">
              {mentoring.services.map((service, i) => (
                <motion.div
                  key={service.name}
                  className="bg-[#1e293b] p-6 rounded-lg border border-transparent hover:border-[#8b5cf6] transition-all duration-300 transform hover:-translate-y-1"
                  custom={i}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
                  <div className="flex justify-between items-center text-sm text-gray-500 ml-12">
                    <span>{service.timeline}</span>
                    <span>{service.pricing}</span>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="mailto:amaechijude178@gmail.com">
                      <Button variant="link" className="text-[#8b5cf6]">
                        {service.link}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
      </motion.div>
    </section>
  );
};

export default Services;
