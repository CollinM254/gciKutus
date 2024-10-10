import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import "../Styles/Sermons.css";
import ChatBot from './ChatBot';

const Sermons = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyCnlHlT46c0SmLY45uTeKdlatoHXimFCdk';  // Replace with your API key
  const CHANNEL_ID = 'UCPRRnfTWODc0HX8pnTQd-3g';    // Replace with your channel ID
  const MAX_RESULTS = 10;

  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS animations
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
    )
      .then((response) => response.json())
      .then((data) => {
        const videoItems = data.items.map(item => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(videoItems);
      })
      .catch((error) => console.error('Error fetching YouTube videos:', error));
  }, [API_KEY, CHANNEL_ID]);

  return (
    <div className="sermon-videos">
      {videos.map((video, index) => (
        <div 
          key={video.videoId} 
          className="video-item"
          data-aos={index % 4 === 0 ? 'fade-left' : index % 4 === 1 ? 'fade-right' : index % 4 === 2 ? 'fade-up' : 'fade-down'}
        >
          <h3>{video.title}</h3>
          <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={video.thumbnail} alt={video.title} />
          </a>
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${video.videoId}`} 
            title={video.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      ))}
       <ChatBot />
    </div>
  );
};

export default Sermons;

// import React, { useState, useEffect } from 'react';
// import "../Styles/Sermons.css";
// const Sermons = () => {
//   const [videos, setVideos] = useState([]);
//   const API_KEY = 'AIzaSyCnlHlT46c0SmLY45uTeKdlatoHXimFCdk';
//   const CHANNEL_ID = 'UCPRRnfTWODc0HX8pnTQd-3g';
//   const MAX_RESULTS = 10;

//   useEffect(() => {
//     fetch(
//       `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const videoItems = data.items.map(item => ({
//           videoId: item.id.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.medium.url,
//         }));
//         setVideos(videoItems);
//       })
//       .catch((error) => console.error('Error fetching YouTube videos:', error));
//   }, [API_KEY, CHANNEL_ID]);

//   return (
//     <div className="sermon-videos">
//       {videos.map((video) => (
//         <div key={video.videoId} className="video-item">
//           <h3>{video.title}</h3>
//           <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
//             <img src={video.thumbnail} alt={video.title} />
//           </a>
//           <button onClick={() => window.location.href = `https://www.youtube.com/watch?v=${video.videoId}`}>Watch on YouTube</button>
//           <iframe 
//             width="560" 
//             height="315" 
//             src={`https://www.youtube.com/embed/${video.videoId}`} 
//             title={video.title} 
//             frameBorder="0" 
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//             allowFullScreen>
//           </iframe>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sermons;
