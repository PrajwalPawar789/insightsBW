import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center mb-4 sm:w-1/4">
          <h2 className="text-2xl font-semibold">Welcome to InsightsBW</h2>
          <p className="text-sm opacity-80 mt-2">
            Your Gateway to Technology and Business Insights
          </p>
        </div>
        <div className="sm:w-1/4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-2 space-y-2">
              <li>About Us</li>
              <li>Advertise With Us</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-red-400 hover:text-red-600">
                <i className="fab fa-youtube"></i> YouTube
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-600">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()}, InsightsBW | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
