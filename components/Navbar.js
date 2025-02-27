// components/Navbar.js
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Go to Home">
                <span className="text-white font-bold text-lg">My ChatApp</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Home"
                >
                  Home
                </Link>
                <Link
                  href="/chat"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Chat now"
                >
                  Chat now
                </Link>
                <Link
                  href="/forums"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Forums"
                >
                  Forums
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Contact"
                >
                  Contact
                </Link>
                <div className="flex items-center">
                  <UserButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}