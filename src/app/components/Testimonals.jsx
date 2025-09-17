"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Cook",
    role: "CEO, haly - a Food sstartup",
    message: "Emgage transformed our HR operations!",
    avatar: "/DP/chandani.jpg",
  },
  {
    id: 2,
    name: "Smith H",
    role: "HR Manager",
    message: "Seamless HRMS and support.",
    avatar: "/DP/raj.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <Image src={t.avatar} alt={t.name} width={80} height={80} className="mx-auto rounded-full" />
            <p className="text-gray-700 mt-4">"{t.message}"</p>
            <h4 className="font-semibold mt-2">{t.name}</h4>
            <p className="text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
