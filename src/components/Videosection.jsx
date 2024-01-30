import React from 'react';
import video from '../Image/video.mp4';

function Videosection() {
  return (
    <div className=" w-full ">
      <video autoPlay  muted playsInline loop >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videosection;
