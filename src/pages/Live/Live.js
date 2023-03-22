import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 1200px;
  height: 500px;
`;

function Live() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (window.IVSPlayer) {
      const newPlayer = window.IVSPlayer.create();
      setPlayer(newPlayer);
    }
  }, []);

  useEffect(() => {
    if (player) {
      const videoElement = document.getElementById('video-player');
      player.attachHTMLVideoElement(videoElement);
      player.load(
        'https://e7bb45361e0e.ap-northeast-1.playback.live-video.net/api/video/v1/ap-northeast-1.700360503662.channel.CD5hHr0vqOZA.m3u8'
      );
      player.play();
    }
  }, [player]);

  return (
    <Wrapper>
      <video id="video-player" playsInline></video>
    </Wrapper>
  );
}

export default Live;
