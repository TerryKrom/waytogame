import React, { useState, useEffect } from 'react';

import './card.css';
import 'atropos/css';
import Atropos from 'atropos/react'
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Card = ({ game }) => {

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = game.thumbnail;
  }, [game.thumbnail]);

  return (
    <Atropos className="my-atropos card" activeOffset={40}
      shadowScale={1.25}>
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            {imageLoaded ? (
              <img src={game.thumbnail} data-atropos-offset="-5" shadowScale={0} alt='game Thumbnail'/>
            ) : (
              <SkeletonTheme height={200} width={300} />
            )}
            <div className="card-text text-over" data-atropos-offset="0">
              <a href={game.game_url} className="center" target='_blank' rel="noreferrer">Download</a>
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default Card;