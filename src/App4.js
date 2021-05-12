import React from "react";

class App extends React.PureComponent {
  divRef = undefined
  constructor(props) {
    super(props)
    this.state = {
      n:1,
      width:undefined
    }
    this.divRef = React.createRef()
  }
  onClick = () => {
    this.setState(state=>({
      n: state.n + 1
    }))
  }
  componentDidMount() {
    // 此处是ajax的好地方
    // 不仅可以用id获取元素，也可以使用divRef
    // const div = document.getElementById('xxx')
    // const {width} = div.getBoundingClientRect()
    // this.setState({width})
    const div = this.divRef.current
    const { width } = div.getBoundingClientRect()
    this.setState({width})
  }
  render() {
    // <></>与<React.Fragment></React.Fragment>相同，就是一个包裹的作用
    return(
      <div ref={this.divRef}>
        <span>hello world,</span>
        {this.state.n},
        {this.state.width}
        <button onClick={this.onClick}>+1</button>
      </div>
    )
  }
}


export default App;
