import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 1, y: 2 };
  }
  // class组件会对数据进行自动拷贝，不会再重新复制x的时候弄丢y，函数组件就不行，一级合并
  onClick = () => {
    this.setState({ // 这是异步的操作
      x: this.state.x + 1, // 2
    });    
    this.setState({
      x: this.state.x + 1, // 2
    });
  };
  onClick2 = () => { // 高级写法，同步操作
    this.setState((state) => ({ x: state.x + 1 })); // 2
    this.setState((state) => ({ x: state.x + 1 })); // 3
  };
  render() {
    return (
      <div>
        x:{this.state.x},y:{this.state.y}
        <button onClick={this.onClick}>+1</button>
      </div>
    );
  }
}


export default App;
