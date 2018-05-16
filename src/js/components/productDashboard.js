import React, { Component } from 'react';
import Navbar               from './navbar';
import ProductList          from './productList';
import Cart                 from './cart';

import mockDB from '../seed';

class ProductDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [], toCart: []}
    this.loadProductsFromServer = this.loadProductsFromServer.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  componentDidMount() {
    this.loadProductsFromServer();
  }

  loadProductsFromServer() {
    this.setState({products: mockDB});
  }

  handleCart(product) {
    this.setState({toCart: this.state.toCart.concat(product)})
  }

  render() { 
    return (
      <div>
        <Navbar />
        <Cart toCart={this.state.toCart}/>
        <ProductList products={mockDB} addToCart={this.handleCart}/>   
      </div>
    );
  }
}

export default ProductDashboard;
