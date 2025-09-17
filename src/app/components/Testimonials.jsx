"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Startup",
    message: "Emgage transformed our HR operations! The HRMS and virtual support are seamless.",
    avatar: "/DP/HK.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "HR Manager",
    message: "Seamless HRMS and support. Our team productivity increased significantly.",
    avatar: "/DP/raj.png",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Founder, TechCo",
    message: "Great platform! Employee self-service and HR helpdesk saved us a lot of time.",
    avatar: "/DP/a.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="text-gray-700 mt-4 italic">"{t.message}"</p>
            <h4 className="font-semibold mt-4">{t.name}</h4>
            <p className="text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
