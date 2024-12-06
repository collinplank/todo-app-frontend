export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 animate-gradient-animation bg-[length:400%_400%]">
      {/* Hero Section */}
      <section className="pt-24 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-8xl font-bold mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Organize Your Life with Todo App
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up delay-200">
            Simple, effective task management for everyone
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-300">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-400/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="animate-fade-in-up">
              <h3 className="text-4xl font-bold text-purple-400">10k+</h3>
              <p className="mt-2 text-gray-400">Active Users</p>
            </div>
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-4xl font-bold text-purple-400">50k+</h3>
              <p className="mt-2 text-gray-400">Tasks Completed</p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-4xl font-bold text-purple-400">99%</h3>
              <p className="mt-2 text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 border border-purple-500/20">
              <div className="text-purple-400 mb-4 text-3xl">✨</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Easy Organization
              </h3>
              <p className="text-gray-400">
                Keep all your tasks organized in one place
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 border border-purple-500/20 delay-100">
              <div className="text-purple-400 mb-4 text-3xl">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Track Progress
              </h3>
              <p className="text-gray-400">
                Monitor your task completion and productivity
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 border border-purple-500/20 delay-200">
              <div className="text-purple-400 mb-4 text-3xl">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Set Goals
              </h3>
              <p className="text-gray-400">
                Achieve your objectives with structured planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20"
              >
                <p className="text-gray-300 mb-4">
                  "This app has completely transformed how I manage my daily
                  tasks. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-400"></div>
                  <div className="ml-3">
                    <p className="text-white font-medium">User Name</p>
                    <p className="text-gray-400 text-sm">Position</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
