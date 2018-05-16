import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  componentDidMount() {
    this.setState({ items: this.props.toCart })
  }

  render() {
    console.log(this.state)

      return (
        <div id="mymodal" className="modal bottom-sheet">
          <div className="modal-content">
            <div className="header">
              <h4>Yours Products:</h4>
            </div>
            <ul className="collection">
              <h5>Nothing yet</h5>
            </ul>
          </div>
          <div className="modal-footer">
            <a href="#!"
              className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      );
  }
}

export default Cart;

/**
 * 
 *       this.state.items.forEach((item) => {
        return (
          <div id="mymodal" className="modal bottom-sheet">
            <div className="modal-content">
              <div className="header">
                <h4>Yours Products:</h4>
              </div>
              <ul className="collection">
                <li className="collection-item"><a href="#">{item.name}</a></li>
              </ul>
            </div>
            <div className="modal-footer">
              <a href="#!"
                className="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
          </div>
        );
      })

    }
    else {
 */