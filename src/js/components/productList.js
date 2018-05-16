import React, { Component } from 'react';
import Product from './product';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  componentDidMount() {
    this.setState({ products: this.props.products })
  }

  handleAddCart(product_id) {
    let selectedProduct = null;
    const nextProducts = this.state.products.map((product) => {
      if (product.id === product_id) {
        selectedProduct = product;
        return Object.assign({}, product, {
          quantity: product.quantity - 1
        });
      } else {
        return product
      }
    });
    this.setState({ products: nextProducts });
    this.props.addToCart(selectedProduct);
  }

  render() {

    return (
      <div>
        <div style={{padding: '.5em'}}>
          <div className="row">
            { this.state.products
              .filter((product) => product.quantity > 0) // Filter only available products
              .map((product) => { // Parse the object to component
              return <Product
                key=            {product.id}
                id=             {product.id}
                name=           {product.name}
                desc=           {product.desc}
                imgSrc=         {product.imgSrc}
                quantity=       {product.quantity}
                price=          {product.price}
                handleAddCart=  {this.handleAddCart}
              />
            })}
          </div>
        </div>
      </div>
    );


  }
}

export default ProductList;
