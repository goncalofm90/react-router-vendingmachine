import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';



export class Snickers extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1><em>"Snickers is the best candy bar" - Danny Trejo (Paid)</em></h1>
          <img src="https://media1.tenor.com/images/9af2e6d95880f6f79bbbca4419a40b10/tenor.gif?itemid=5270232" alt="snickers"/>
          <p><Link exact to='/'>More Treats!</Link></p>
        </Message>
      </div>
    )
  }
}

export default Snickers
