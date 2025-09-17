"use client"; // needed if you use useState, useEffect, or Framer Motion
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition"
    >
      {/* Next.js Image requires width and height */}
      <Image src={icon} alt={title} width={100} height={100} />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
}
