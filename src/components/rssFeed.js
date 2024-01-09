import React, { useState, useEffect } from 'react';
import  Navbar  from './Navbar';

const RssFeeds = () => {
  const [rssData, setRssData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nytimes.com/services/xml/rss/nyt/business.xml');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.text();
        setRssData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const parseXml = (xmlStr) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlStr, 'application/xml');

    const items = xmlDoc.querySelectorAll('item');

    const parsedData = Array.from(items).map((item) => {
      return {
        title: item.querySelector('title').textContent,
        link: item.querySelector('link').textContent,
        description: item.querySelector('description').textContent,
        pubDate: item.querySelector('pubDate').textContent,
        image: item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0]?.getAttribute('url') || '',
        credit: item.querySelector('media\\:credit')?.textContent || '',
      };
    });

    return parsedData;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const parsedData = parseXml(rssData);

  return (
    <div>
        <Navbar/>
    <div className="max-w-2xl mx-auto my-8">
      {parsedData.map((item, index) => (
        <div key={index} className="mb-8 p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-4">{item.description}</p>
          {item.image && <img src={item.image} alt={item.title} className="w-full h-auto mb-4" />}
          <p className="text-gray-500">Published on: {item.pubDate}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RssFeeds;
