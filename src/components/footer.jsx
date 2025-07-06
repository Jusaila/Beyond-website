import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 md:px-12 font-mersad h-auto flex flex-col items-center md:items-end">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 text-center md:text-left">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <a href="/" className="text-[#0000FF] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[190px] font-bold leading-none">
              <span className="text-[#0000FF]">.</span>beyond
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 text-gray-600">
            <a href="/about" className="hover:text-gray-900">
              About Us
            </a>
            <a href="/services" className="hover:text-gray-900">
              Services
            </a>
            <a href="#" className="hover:text-gray-900">
              Career
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Copyright © 2025. Beyond. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://instagram.com" className="text-black hover:text-gray-900">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://facebook.com" className="text-black hover:text-gray-900">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com" className="text-black hover:text-gray-900">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com" className="text-black hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
