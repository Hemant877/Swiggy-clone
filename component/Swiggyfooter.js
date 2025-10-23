import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SwiggyFooter() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-12 mt-15">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Swiggy</h2>
          <p className="text-gray-100">
            Order food online from your favorite restaurants and get it delivered fast at your doorstep.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="#" className="hover:text-gray-300 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Swiggy One</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Restaurant Signup</a></li>
          </ul>
        </div>

        {/* Social & App */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-300 transition-colors"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FaYoutube size={20} /></a>
          </div>
          <h3 className="font-semibold text-lg mb-2">Download App</h3>
          <div className="flex space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} Swiggy. All rights reserved.
      </div>
    </footer>
  );
}
