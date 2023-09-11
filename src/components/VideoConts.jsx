import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import Videos from './Videos';


const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState(null);
  const { id,channelId02 } = useParams();
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

      )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideoDetail(result.items[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&channelId=${channelId02}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

      )
      .then((response) => response.json())
      .then((playlist) => {
        console.log(playlist);
        setVideos(playlist.items);
      })
      .catch((error) => console.log(error));
  }, [channelId02]);
  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__sub">
          <div className="videoConts_left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <h3>{title}</h3>

              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="counts">
                <span>좋아요 {likeCount}:회</span>
                <span>조회수 {viewCount}:회</span>
              </div>
              {/* <div className="description">{description}</div> */}
            </div>
          </div>
          <div className="videoConts_right">
            {/* <Videos videos={videos} /> */}
            {videos && <Videos videos={videos} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoConts;
