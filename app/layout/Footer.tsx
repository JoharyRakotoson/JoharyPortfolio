export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white py-8 mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>

        {/* CENTER */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </div>

        {/* RIGHT */}
        <div className="text-sm text-gray-400">
          Built with React 
        </div>

      </div>
    </footer>
  );
}