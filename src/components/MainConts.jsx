import { Category, Videos } from './index';
import React, { useEffect, useState } from 'react';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('미국');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory}여행 유튜브</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
