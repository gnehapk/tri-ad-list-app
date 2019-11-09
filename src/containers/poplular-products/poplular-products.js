import React, { Component } from 'react';

import Seed from '../../assets/json/seed';
import Product from '../../components/product/product';

import classes from './popular-products.scss';

class PopularProducts extends Component {

  state = {
    productList : [],
  };

  componentDidMount = () => {
    //actual request will look like this
    // http.get('url')
    //   .then(list =>  {
    //     console.log(list);
    //   }).catch(err => console.log(err.message));

    // hardcoding for now
    this.setState({productList: Seed().products}, () => {
      this.sortProductList();
    });
    
  };

  incrementVotes = (id) => {
    const products = [...this.state.productList];

    const updatedProducts = products.map(p => {
        if(p.id === id) {
          p.votes += 1;
        }

        return p;
      });

    this.setState({productList: updatedProducts}, this.sortProductList);
  };

  sortProductList = () => {
    const products = [...this.state.productList];

    products.sort(this.compare);

    this.setState({productList: products});
  };

  compare = (p1, p2) => {
    return (p2.votes-p1.votes);
  };

  render() {

    let products = null;

    products = this.state.productList.map((product) => {
      return <Product 
        className={classes.list}
        key={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        avatar={product.submitterAvatarUrl}
        image={product.productImageUrl}
        incrementVotes={() => this.incrementVotes(product.id)}
      />
    });

    return (
      <React.Fragment>
        <h1 className={classes.title}>Popular Products</h1>
        <hr />
          <div className={classes.list}>
          {products}
          </div>
      </React.Fragment>
    );
  }
}

export default PopularProducts;