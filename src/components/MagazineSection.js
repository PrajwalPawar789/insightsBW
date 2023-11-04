import React from 'react';
import data from '../data'; // Assuming data is exported from a separate file
import Navbar from './Navbar';
import Footer from './Footer';

const Magazine = () => {
  const imglink = "https://cdn.thecodehelp.in/Agra.jpeg";
  return (
    <div>
      <Navbar/>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4 text-center">Explore Our Magazine</h1>
      <p className="mb-6 text-lg text-center text-gray-600">
        Dive into a world of knowledge and inspiration with our collection of articles and features.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <img src={imglink} alt={item.title} className="w-full h-44 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla dui at lectus posuere, a tincidunt tortor vulputate.
            </p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Magazine;
