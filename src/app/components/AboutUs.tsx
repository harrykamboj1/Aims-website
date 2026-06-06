"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Simran Preet Kaur",
    role: "Co-Founder & CEO",
    description:
      "Leads AIMS with a clear vision for student success, quality coaching, and consistent growth across every program.",
    image: "/profile_image2.png",
  },
  {
    name: "Harnoor Singh",
    role: "IT Head & Managing Director",
    description:
      "Drives technology and operations, ensuring smooth digital systems, innovation, and reliable support for learners.",
    image: "/profle_image1.png",
  },
  {
    name: "Bhavna",
    role: "CELPIP Expert",
    description:
      "Specializes in CELPIP preparation, helping learners build confidence and reach their target scores.",
    image: "/profle3.png",
  },
  {
    name: "Komal",
    role: "IELTS Expert",
    description:
      "Guides students through IELTS with focused practice, clear strategies, and personalized feedback.",
    image: "/profile4.png",
  },
  {
    name: "Aman",
    role: "French Expert",
    description:
      "Supports French learners with structured lessons and practical skills for exams and real-world use.",
    image: "/profle3.png",
  },
  {
    name: "Simran",
    role: "French Expert",
    description:
      "Helps students excel in French with engaging instruction tailored to their goals and level.",
    image: "/profile4.png",
  },
];

const AboutUs = () => (
  <section id="about" className="section-padding bg-white">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <div className="section-label justify-center mb-4">
          <span>About AIMS</span>
        </div>
        <h2 className="heading-display text-3xl md:text-5xl mb-4">
          Meet the Team Behind Your Success
        </h2>
        <p className="text-muted-foreground text-lg">
          Dedicated educators and immigration experts committed to helping you achieve your academic and career goals.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.article
            key={`${member.name}-${member.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="card-elevated overflow-hidden group hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-navy">{member.name}</h3>
              <p className="text-accent text-sm font-semibold mt-1">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{member.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
