import React, { Component } from 'react'

type Props = {
  children: ReactNode
}

class Card extends Component{
  render(){
    return(
      <div  className="myCard">
        <p>This si the Card comp</p>

        {this.props.children}

      </div>
    )
  }
}

export default Card;