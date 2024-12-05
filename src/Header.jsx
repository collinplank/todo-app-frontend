import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-slate-800 shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-200">
              Home
            </a>
            <a href="/categories" className="text-white hover:text-blue-400 transition-colors duration-200">
              Categories
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/login" className="text-white hover:text-blue-400 transition-colors duration-200">
              Login
            </a>
            <a href="/signup" className="text-white hover:text-blue-400 transition-colors duration-200">
              <Link to="/signup">Signup</Link>
            </a>
            <LogoutLink />
          </div>
        </div>
      </nav>
    </header>
  );
}
