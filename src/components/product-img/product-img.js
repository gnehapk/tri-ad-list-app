import React from 'react';
import PropTypes from 'prop-types';

import classes from './product-img.scss';


const ProductImg = (props) => {
    
	return (
		<img src={`images/products/${props.img}`} alt="Product Image" className={classes.productImg}/>
	);
};

ProductImg.propTypes = {
	img: PropTypes.string.isRequired,
};

export default ProductImg;