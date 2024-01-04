import React from 'react';

import './card.css';
import 'atropos/css';
import Atropos from 'atropos/react'

const Card = ({ game }) => {
  return (
    <a href={game.game_url}>

      <Atropos className="my-atropos card" activeOffset={40}
        shadowScale={1.25}>
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <img src={game.thumbnail} data-atropos-offset="-5" shadowScale={0} alt='game thumbnail' />
            </div>
          </div>
        </div>
      </Atropos>

    </a>
  );
};

export default Card;