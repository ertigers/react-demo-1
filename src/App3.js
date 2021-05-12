import React from "react";

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      n:1
    }
  }
  onClick = () => {
    this.setState(state=>({
      n: state.n + 1
    }))
    // this.setState(state=>({
    //   n: state.n - 1
    // }))
  }
  // shouldComponentUpdate(newProps,newState) {
  //   if(newState.n === this.state.n) {
  //     return false
  //   }else {
  //     return true
  //   }
  // }
  render() {
    console.log("render了一次");
    return(
      <div>
        {this.state.n}
        <button onClick={this.onClick}>+1</button>
      </div>
    )
  }
}


export default App;
