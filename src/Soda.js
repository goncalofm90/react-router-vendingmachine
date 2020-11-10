import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';



export class Soda extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Hmmmm....Fizzyyyy.</h1>
          <p><Link exact to='/'>More Treats!</Link></p>
          <img src="https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="soda" />
        </Message>

      </div>
    )
  }
}

export default Soda
