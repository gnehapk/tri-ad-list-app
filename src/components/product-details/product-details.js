import React from 'react';
import PropTypes from 'prop-types';

import VotesContainer from '../votes-container/votes-container';
import classes from './product-details.scss';
import Avatar from '../../components/avatar/avatar';

const ProductDetails = (props) => {

  return (
    <div className={classes.productDetails}>
      <VotesContainer />
      <p className={classes.title}>{props.title}</p>
      <p className={classes.desc}>{props.description}</p>
      <Avatar />
    </div>
  );
};

ProductDetails.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProductDetails;