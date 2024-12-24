
import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoURL: string;
  containment: string;
  showControls: boolean;
  autoPlay: boolean;
  loop: boolean;
  mute: boolean;
  startAt: number;
  opacity: number;
  quality: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoURL,
  containment,
  showControls,
  autoPlay,
  loop,
  mute,
  startAt,
  opacity,
  quality,
}) => {
  const opts = {
    width: '100%',
    height: '1080px',
    playerVars: {
      autoplay: autoPlay ? 1 : 0,
      controls: showControls ? 1 : 0,
      loop: loop ? 1 : 0,
      mute: mute ? 1 : 0,
      start: startAt,
      opacity: opacity,
      quality: quality,
    },
  };

  return (
    <div>
      <YouTube videoId={videoURL} className="player" opts={opts} />
    </div>
  );
};

export default YouTubePlayer;


{/* <YouTubePlayer
  videoURL="BadB1z-V_qU"
  containment="#video-bg"
  showControls={false}
  autoPlay={true}
  loop={true}
  mute={true}
  startAt={0}
  opacity={1}
  quality="default"
/> */}
