import React from 'react';

import ProductContext from '../../context/product-context';

import classes from './votes-container.scss';
import arrow from '../../assets/images/ui/arrow.png';

const VotesContainer = () => {

  return (
    <ProductContext.Consumer>
      {({ votes, incrementVotes }) => (
        <div className={classes.VotesContainer}>
          <img
            className={classes.arrow}
            src={arrow}
            alt="Up Vote"
            onClick={incrementVotes}
          />
          <div className={classes.votesCnt}>{votes}</div>
        </div>
      )}
    </ProductContext.Consumer>
  );
};

export default VotesContainer;