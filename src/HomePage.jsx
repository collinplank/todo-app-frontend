export function HomePage() {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   {/* Hero Section */}
    //   <section className="pt-24 pb-20 bg-gradient-to-b from-slate-800 to-slate-700 text-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Organize Your Life with Todo App</h1>
    //       <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up delay-200">
    //         Simple, effective task management for everyone
    //       </p>
    //     </div>
    //   </section>

    //   {/* Features Section */}
    //   <section className="py-16">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid md:grid-cols-3 gap-8">
    //         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
    //           <h3 className="text-xl font-semibold mb-4">Easy Organization</h3>
    //           <p className="text-gray-600">Keep all your tasks organized in one place</p>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
    //           <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
    //           <p className="text-gray-600">Monitor your task completion and productivity</p>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
    //           <h3 className="text-xl font-semibold mb-4">Set Deadlines</h3>
    //           <p className="text-gray-600">Never miss important deadlines again</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA Section */}
    //   <section className="py-16 bg-indigo-50">
    //     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
    //       <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
    //       <p className="text-xl text-gray-600 mb-8">Sign up or log in to start creating your todo lists today!</p>
    //       <div className="flex justify-center space-x-4">
    //         <a
    //           href="/signup"
    //           className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
    //         >
    //           Sign Up
    //         </a>
    //         <a
    //           href="/login"
    //           className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-transform transform hover:scale-105"
    //         >
    //           Log In
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="min-h-screen bg-gradient-to-r animate-gradient-animation bg-[length:400%_400%]">
      {/* Hero Section */}
      <section className="pt-24 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Organize Your Life with Todo App
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up delay-200">
            Simple, effective task management for everyone
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Easy Organization Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:bg-indigo-50 animate-card-slide-up">
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up">
                Easy Organization
              </h3>
              <p className="text-gray-600 animate-fade-in-up delay-100">
                Keep all your tasks organized in one place
              </p>
            </div>

            {/* Track Progress Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:bg-indigo-50 animate-card-slide-up delay-200">
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up">
                Track Progress
              </h3>
              <p className="text-gray-600 animate-fade-in-up delay-300">
                Monitor your task completion and productivity
              </p>
            </div>

            {/* Set Deadlines Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:bg-indigo-50 animate-card-slide-up delay-400">
              <h3 className="text-xl font-semibold mb-4 animate-fade-in-up">
                Set Deadlines
              </h3>
              <p className="text-gray-600 animate-fade-in-up delay-500">
                Never miss important deadlines again
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sign up or log in to start creating your todo lists today!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-transform transform hover:scale-105"
            >
              Log In
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
