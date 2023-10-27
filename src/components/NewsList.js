import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const apiKey = 'yZI9SnIBWUsEiEByn9NO4VWlrfIAFqSf'; // Replace with your API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setNews(data.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="bg-black p-4">
        <ul className="flex space-x-8 cursor-pointer text-white font-semibold justify-center text-[20px]">
          <li>Home</li>
          <li>Magazine</li>
          <li>Leadership</li>
          <li>News</li>
          <li>Sports</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="container mx-auto w-[1080px] height-[580px]">
        <h1 className="text-2xl font-bold mb-4">New York Times Top Stories</h1>
        <Slider {...settings}>
          {news.map((article) => (
            <div
              key={article.title}
              className="relative rounded-lg shadow-lg overflow-hidden"
            >
              {article.multimedia && article.multimedia.length > 0 && (
                <img
                  src={article.multimedia[0].url}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                <h2 className="text-xl text-white font-semibold mt-2">
                  {article.title}
                </h2>
                <p className="text-gray-300 mt-2">{article.abstract}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Publishing Date: {article.published_date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsList;