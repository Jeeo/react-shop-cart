import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mymodal" className="modal bottom-sheet">
        <div className="modal-content">
          <div className="header">
            <h4>Yours Products:</h4>
          </div>
          <ul className="collection">
            {this.props.toCart.map((product) => {
              return <li className="collection-item">{product.name} <span className="right">${product.price}</span></li>
            })}
          </ul>
        </div>
        <div className="modal-footer">
          <span className="left">Total:
              <span> $
              {
                (this.props.toCart.length > 0) ? this.props.toCart
                  .map((product) => { return product.price })
                  .reduce((total, next, ) => total + next) : 0
              }
            </span>
          </span>
          <a href="#!"
            className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
    );
  }
}

export default Cart;

