import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo */}
          <a href="/dashboard" className="text-2xl font-bold text-blue-600">
            ForexEdu
          </a>

          {/* Center: Nav Links (absolute center) */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="/LiveRates" className="text-gray-700 hover:text-blue-600">Live Rates</a>
            <a href="/currency" className="text-gray-700 hover:text-blue-600">Currency Converter</a>
          </div>

          {/* Right: Profile & Dropdown */}
          <div className="hidden md:flex items-center space-x-4 relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
              <UserCircleIcon className="w-8 h-8 text-blue-600" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-md border">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 space-y-2 rounded-md shadow">
            <a href="/dashboard" className="block text-gray-700 hover:text-blue-600">Home</a>
            <a href="/courses" className="block text-gray-700 hover:text-blue-600">Courses</a>
            <a href="/LiveRates" className="block text-gray-700 hover:text-blue-600">Live Rates</a>
            <a href="/currency" className="block text-gray-700 hover:text-blue-600">Converter</a>
            <button onClick={handleLogout} className="block text-gray-600 hover:text-blue-600">Logout</button>
            <div className="flex items-center space-x-2 pt-2 border-t">
              <UserCircleIcon className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">John Doe</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
