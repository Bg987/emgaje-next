"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-blue-600">Emgage</div>
        <ul className={`md:flex gap-6 ${open ? "flex flex-col absolute top-16 left-0 w-full bg-white p-6" : "hidden"}`}>
          <li><Link href="#" style= {{color: "black"}}>Home</Link></li>
          <li><Link href="#features" style= {{color: "black"}}>Features</Link></li>
          <li><Link href="#testimonials" style= {{color: "black"}}>Testimonials</Link></li>
          <li><Link href="#contact" style= {{color: "black"}}>Contact</Link></li>
        </ul>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="text-2xl font-bold">{open ? "✖" : "☰"}</button>
        </div>
      </div>
    </nav>
  );
}
