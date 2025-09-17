export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Emgage</h3>
          <p>Comprehensive HR solutions for MSMEs, startups, and growing businesses in India.</p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>📍 123 Corporate houes,Vishakhapatnam, India</p>
          <p>📧 Team@emgage.work</p>
          <p>📞 +91 98765 01234</p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400">
        © 2025 Emgage. All rights reserved.
      </div>
    </footer>
  );
}
