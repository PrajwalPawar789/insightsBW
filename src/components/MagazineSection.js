import React, { useState, useEffect } from 'react';

const MagazineSection = () => {
  const [magazineData, setMagazineData] = useState([]);
  const apiKey = 'yZI9SnIBWUsEiEByn9NO4VWlrfIAFqSf';

  useEffect(() => {
    const fetchMagazineData = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/magazine/v3/all/0.json?api-key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMagazineData(data.results);
      } catch (error) {
        console.error('Error fetching magazine data:', error);
      }
    };

    fetchMagazineData();
  }, [apiKey]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New York Times Magazine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {magazineData.map((article) => (
          <div key={article.title} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={article.multimedia[0]?.url} alt={article.title} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.title}</div>
              <p className="text-gray-700 text-base">{article.abstract}</p>
            </div>
            <div className="px-6 py-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineSection;
