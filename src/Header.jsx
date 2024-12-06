import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [email, setEmail] = useState(localStorage.getItem("email"));

  useEffect(() => {
    const checkAuth = () => {
      setEmail(localStorage.getItem("email"));
    };
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

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
              to="/categories"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Categories
            </Link>
            <Link
              to="/calendar"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Calendar
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {email ? (
              <>
                <span className="text-gray-300">{email}</span>
                <LogoutLink />
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
