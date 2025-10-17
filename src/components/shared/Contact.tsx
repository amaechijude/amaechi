import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-slate-900 py-20 md:py-32"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether you need a senior developer or want to become one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Professional Track */}
          <div
            className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10"
          >
            <div className="flex items-center space-x-4">
              <Briefcase className="h-8 w-8 text-violet-400" />
              <h3 className="text-2xl font-bold text-slate-200">
                Let&apos;s Work Together
              </h3>
            </div>
            <p className="mt-4 flex-1 text-slate-400">
              Have a challenging project that needs senior expertise? I
              specialize in scalable architecture and building high-performance
              web applications.
            </p>
            <div className="mt-6 space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-violet-600 text-white hover:bg-violet-700"
              >
                <a href="mailto:amaechijude178@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Project Inquiry
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <Link
                  href="https://www.linkedin.com/in/amaechi-ugwu/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>

          {/* Mentoring Track */}
          <div
            className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10"
          >
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-8 w-8 text-violet-400" />
              <h3 className="text-2xl font-bold text-slate-200">
                Start Your Journey
              </h3>
            </div>
            <p className="mt-4 flex-1 text-slate-400">
              Ready to accelerate your development career? Join the 50+
              developers I&apos;ve helped transition into high-paying tech
              roles.
            </p>
            <div className="mt-6 space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-transparent border border-violet-500 text-violet-400 hover:bg-violet-500/10"
              >
                <a href="mailto:amaechijude178@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Mentoring Request
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;