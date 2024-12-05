import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; 2024 Todo App. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/login"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
