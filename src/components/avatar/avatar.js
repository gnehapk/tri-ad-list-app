import React from 'react';

import ProductContext from '../../context/product-context';
import classes from './avatar.scss';

//dynmaically importing the image

const Avatar = () => {

  return (
    <ProductContext.Consumer>
      {({avatar}) => (
        <div className={classes.avatarContainer}>
          <p className={classes.submitBy}>Submitted By : </p>
          <img src={`images/avatars/${avatar}`} alt="Avatar" className={classes.avatar} />
        </div>
      )}
    </ProductContext.Consumer>
  );
};

export default Avatar;