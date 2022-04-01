import React, { useState } from 'react';
import ReactAplayer from 'react-aplayer';
import HeaderContainer from '../component/Header';

export default function PlayerContainer() {
  const [data, setData] = useState<any>({
    theme: '#F57F17',
    lrcType: 3,
    audio: [
      {
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
        cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
        theme: '#ebd0c2',
      },
    ],
  });
  const onPlay = () => {
    console.log('on play');
  };

  const onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  const onInit = (ap: any) => {
    // this.ap = ap;
  };

  return (
    <div>
      <HeaderContainer title="React player播放" subTitle="player播放" />
      <div style={{ width: '60%', marginLeft: '20%' }}>
        <ReactAplayer
          {...data}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
    </div>
  );
}
