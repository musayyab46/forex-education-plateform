import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  return (
    <nav className="bg-white top-0 z-50 sticky shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">

          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">ForexEdu</a>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 justify-center">
            <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="/LiveRates" className="text-gray-700 hover:text-blue-600">Live Rates</a>
            <a href="/currency" className="text-gray-700 hover:text-blue-600">Currency Converter</a>
          </div>

          {/* Right: Logout & Profile */}
          <div className="flex-1 hidden md:flex items-center justify-end space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-600">Logout</a>
            <div className="flex items-center space-x-2">
              <UserCircleIcon className="w-9 h-9 text-blue-600" />
              <span className="hidden md:inline text-gray-700">John Doe</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button id="menu-toggle" className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
