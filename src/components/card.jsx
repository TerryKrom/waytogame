import React, { useState, useEffect } from 'react';
import './card.css';
import 'atropos/css';
import Atropos from 'atropos/react'
import ImageSkeleton from './global/skeleton';

const Card = ({ game }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState(null);

  useEffect(() => {
    if(game.thumbnail){
      setImg(game.thumbnail)
    }
  },[img])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },2000)
  }, [])

  return (
    <a href={game.game_url}>
      <Atropos className="my-atropos card" activeOffset={40}
        shadowScale={1.25}>
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              {isLoading ? <ImageSkeleton/> : <img src={game.thumbnail} data-atropos-offset="-5" shadowScale={0} alt='game thumbnail'/>
              }
            </div>
          </div>
        </div>
      </Atropos>

    </a>
  );
};

export default Card;