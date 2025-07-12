import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">

          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-blue-600">ForexEdu</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="/LiveRates" className="text-gray-700 hover:text-blue-600">Live Rates</a>
            <a href="/currency" className="text-gray-700 hover:text-blue-600">Currency Converter</a>
            <a href="/" className="text-gray-600 hover:text-blue-600">Logout</a>
            <div className="flex items-center space-x-2">
              <UserCircleIcon className="w-8 h-8 text-blue-600" />
              <span className="text-gray-700">John Doe</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 mt-2 space-y-3">
            <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="/LiveRates" className="text-gray-700 hover:text-blue-600">Live Rates</a>
            <a href="/currency" className="text-gray-700 hover:text-blue-600">Currency Converter</a>
            <a href="/" className="text-gray-600 hover:text-blue-600">Logout</a>
            <div className="flex items-center space-x-2 pt-2 border-t mt-2">
              <UserCircleIcon className="w-7 h-7 text-blue-600" />
              <span className="text-gray-700">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
