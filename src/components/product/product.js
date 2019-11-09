import React from 'react';
import PropTypes from 'prop-types';

import ProductImg from '../product-img/product-img';
import ProductDetails from '../product-details/product-details';
import ProductContext from '../../context/product-context';

import classes from './product.scss';

const Product = (props) => {

  return (
    <div className={classes.productContainer}>
      <ProductImg img={props.image} />

      <ProductContext.Provider 
        value={{
          votes: props.votes,
          avatar: props.avatar,
          incrementVotes: props.incrementVotes
        }}>
        <ProductDetails
          title={props.title}
          description={props.description}
          url={props.url}
        />
      </ProductContext.Provider>
    </div>
  );
};

Product.propTypes = {
  votes: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  incrementVotes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Product;