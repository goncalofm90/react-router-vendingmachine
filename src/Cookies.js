import React, { Component } from 'react';
import Message from './Message';
import {Link} from 'react-router-dom';


export class Cookies extends Component {
  render() {
    return (
      <div>
          <Message>
          <h1>omg *drool*</h1>
          <p><Link exact to='/'>More Treats!</Link></p> 
          <img src="https://images.unsplash.com/photo-1593299956909-bd49e75ff8e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="cookies" />
          </Message>
      </div>
    )
  }
}

export default Cookies
