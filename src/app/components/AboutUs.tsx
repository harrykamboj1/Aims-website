"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Simran Preet Kaur",
    role: "Co-Founder and CEO",
    description:
      "Simran leads AIMS with a clear vision for student success, quality coaching, and consistent growth across every program.",
    image: "/profile_image2.png",
  },
  {
    name: "Harnoor Singh",
    role: "IT Head and Managing Director",
    description:
      "Harnoor drives technology and operations, ensuring smooth digital systems, innovation, and reliable support for learners.",
    image: "/profle_image1.png",
  },
  {
    name: "Bhavna",
    role: "CELPIP Expert",
    description:
      "Bhavna specializes in CELPIP preparation, helping learners build confidence and reach their target scores.",
    image: "/profle3.png",
  },
  {
    name: "Komal",
    role: "IELTS Expert",
    description:
      "Komal guides students through IELTS with focused practice, clear strategies, and personalized feedback.",
    image: "/profile4.png",
  },
  {
    name: "Aman",
    role: "French Expert",
    description:
      "Aman supports French learners with structured lessons and practical skills for exams and real-world use.",
    image: "/profle3.png",
  },
  {
    name: "Simran",
    role: "French Expert",
    description:
      "Simran helps students excel in French with engaging instruction tailored to their goals and level.",
    image: "/profile4.png",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-white to-primary/5"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the leaders behind AIMS who are dedicated to helping students
            achieve their academic and career goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.article
              key={`${member.name}-${member.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
