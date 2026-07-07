export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-white/10 bg-transparent py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        {/* LEFT */}
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} JoharyPortfolio. All rights reserved.
        </div>

        {/* CENTER */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
        </div>

        {/* RIGHT */}
        <div className="text-sm text-gray-400">Built with React</div>
      </div>
    </footer>
  );
}
