import React, { Component } from 'react'
import Message from './Message';

export class VendingMachine extends Component {
  render() {
    return (
      <div>
        <Message>
        <h1>Feed the mighty vending machine and be rewarded with tasty treats!</h1>
        <img src="https://data.whicdn.com/images/86460050/original.gif" alt="oops"/>
        </Message>

      </div>
    )
  }
}

export default VendingMachine
