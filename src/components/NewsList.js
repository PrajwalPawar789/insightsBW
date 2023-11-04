import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <div className="container mx-auto w-[1080px]">
        {/* Check if there are news articles before rendering */}
        {news.length > 0 && (
          <div>
            {/* Display the "Top Story" (second data from the API) */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-4">Top Story</h1>
              <div key={news[1].title} className="relative rounded-lg shadow-lg overflow-hidden">
                {news[1].multimedia && news[1].multimedia.length > 0 && (
                  <img
                    src={news[1].multimedia[0].url}
                    alt={news[1].title}
                    className="w-full h-72 object-cover rounded-t-lg"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                  <h2 className="text-xl text-white font-semibold mt-2">
                    {news[1].title}
                  </h2>
                  <a
                    href={news[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline mt-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Display other top stories, starting from the third data (index 2) */}
            <h1 className="text-2xl font-bold mb-4">Other Top Stories</h1>
            <div className="flex flex-row flex-wrap">
              {news.slice(2).map((article) => (
                <div key={article.title} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="relative rounded-lg shadow-lg overflow-hidden">
                    {article.multimedia && article.multimedia.length > 0 && (
                      <img
                        src={article.multimedia[0].url}
                        alt={article.title}
                        className="w-full h-58 object-cover rounded-t-lg"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                      <h2 className="text-xl text-white font-semibold mt-2">
                        {article.title}
                      </h2>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline mt-2"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
