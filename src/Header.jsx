export function Header() {
  return (
    <header className="bg-slate-800 shadow-md fixed w-full top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </a>
        </div>
      </nav>
    </header>
  );
}
