import React, { Component } from 'react'

class TextCop extends Component{
  render(){
    return(
      <div>
        <p>This si the TextCop comp</p>
        <p>the text pass as props is: {this.props.text77}</p>
      </div>
    )
  }
}

export default TextCop;