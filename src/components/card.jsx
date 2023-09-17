import React from 'react';
import './card.css';
import 'atropos/css';
import Atropos from 'atropos/react'

const Card = ({ game }) => {
  return (
    <Atropos className="my-atropos card" activeOffset={40}
      shadowScale={1.25}>
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
              <img src={game.thumbnail} data-atropos-offset="-5" shadowScale={1.25} alt='game Thumbnail'/>
              <div className="card-text text-over" data-atropos-offset="0">
                <a href={game.game_url} className="center" target='_blank'>Download</a>
              </div>
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default Card;