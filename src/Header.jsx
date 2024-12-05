import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-slate-950 shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/todos"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Todos
            </Link>
            <Link
              to="/calendar"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Calendar
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Signup
            </Link>
            <LogoutLink />
          </div>
        </div>
      </nav>
    </header>
  );
}
