import React, {Component} from 'react';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  randomState(){
    return Math.floor(Math.random() * 10) + 1
  }
  handleClick(){
    this.setState({number: this.randomState()})
  }
  render(){
    const styles = {
      fontSize: '35px',
      color: 'magenta'
    }

    return (
      <div>
        <h1>The Number is {this.state.number}</h1>
        <p><strong>Keep Clicking until you find out the winning number</strong></p>
        {this.state.number !==7 ? <button onClick={this.handleClick}>Random Number</button> : <h3 style={styles}>Wow!!! You are the winner</h3>}
      </div>
    )
  }
}

export default Button