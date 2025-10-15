"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialProps {
  category: string;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonialsData: TestimonialProps[] = [
  {
    category: "professional",
    quote:
      "Amaechi architected our microservices migration, reducing deployment time by 70% while mentoring the entire team through the transition. A true force multiplier.",
    name: "Jane Doe",
    title: "CTO, Innovate Corp",
    image: "/test/one.avif",
  },
  {
    category: "mentoring",
    quote:
      "I went from a retail job to a full-stack developer in 8 months thanks to Amaechi's structured guidance. He didn't just teach me to code; he taught me how to think like an engineer. It completely changed my life.",
    name: "Alex Smith",
    title: "Software Engineer, Tech Solutions",
    image: "/test/two.avif",
  },
  {
    category: "professional",
    quote:
      "His debugging skills are second to none. When our payment system crashed during Black Friday, Amaechi's calm leadership and technical prowess saved us millions in lost revenue.",
    name: "Michael Chen",
    title: "Lead SRE, Data Solutions Inc.",
    image: "/test/three.avif",
  },
  {
    category: "community",
    quote:
      "The best React workshop I've ever attended. The explanations were clear, the hands-on practice was invaluable, and you can feel the genuine care for student success.",
    name: "Sarah Lee",
    title: "Workshop Attendee",
    image: "/test/four.avif",
  },
  {
    category: "mentoring",
    quote:
      "I was stuck in tutorial hell for a year. Amaechi's mentorship gave me the confidence to build real projects and land my dream job at a startup. His patience is incredible.",
    name: "David Kim",
    title: "Frontend Developer",
    image: "/test/five.avif",
  },
  {
    category: "professional",
    quote:
      "The best senior developer I've worked with—not just for his technical skills, but for his ability to elevate everyone around him. He makes the whole team better.",
    name: "Emily Rodriguez",
    title: "Product Manager, Innovate Corp",
    image: "/test/five.avif",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
    className="break-inside-avoid mb-6 flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-violet-500/50 hover:shadow-violet-500/10 hover:-translate-y-1"
  >
    <Quote className="h-8 w-8 text-violet-500" />
    <p className="mt-4 text-slate-300 italic">{`"${testimonial.quote}"`}</p>
    <div className="mt-6 flex items-center space-x-4">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-bold text-slate-200">{testimonial.name}</p>
        <p className="text-sm text-slate-400">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="testimonials"
      ref={ref}
      className="w-full bg-slate-900 py-20 md:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">What People Say</h2>
          <p className="mt-4 text-lg text-slate-400">Professional impact meets life-changing mentorship.</p>
        </motion.div>

        <motion.div
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
