import React, { useState, useEffect } from 'react';
import { Videos } from './';
import { useParams } from 'react-router-dom';
// import Loader from './Loader';

const ChannelConts = () => {
    const [videos, setVideos] = useState(null);
    const { id } = useParams();
    useEffect(() => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&channelId=${id}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

      )
        .then((response) => response.json())
        .then((result) => {
          setVideos(result.items);
        })
        .catch((error) => console.log(error));
    }, [id]);
    return (
        <main id="main">
          <section id="contents">
            {videos && <Videos videos={videos} />}
          </section>
        </main>
    );;
};

export default ChannelConts;
