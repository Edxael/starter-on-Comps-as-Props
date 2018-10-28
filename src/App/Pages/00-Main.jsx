import React, { Component } from 'react';
import Card from '../Components/Card'
import Button from '../Components/Button'
import TextComp from '../Components/Text'
import '../CSS4/style.css'



class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mytext: 'Hello Edmundo'
    }
  }
  render() {
    return (
      <div>
        <h4>Hello from main 999s</h4>

        <Card>
          <Button />
          <TextComp text77={this.state.mytext} />
        </Card>


      </div>
    )
  }
}

export default Main;