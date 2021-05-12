import React from 'react'
import './styles.css'

const App = ()=>{
  return (
    <div className='App'>
      爸爸
      <Son/>
    </div>
    
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state={
      n:0
    }
  }
  add() {
    // this.setState这是一个异步的更新
    this.setState(
      state =>{
        const n = state.n += 1
        return { n }
      }
    )
  }
  render(){
    return(
      <div className='Son'>
        儿子n:{this.state.n}
        <button onClick={()=>this.add()}>+1</button>
        <Grandson message='孙子你好啊'/>
      </div>
    )
  }
}

const Grandson = (props)=> {
  const [n,setN] = React.useState(0)
  return (
    <div className='Grandson'>
      {props.message} 孙子n:{n}
      <button onClick={()=>setN(n+1)}>+1</button>
    </div>
  )
}



// const Component = (props) => {
//   // for循环
//   // const array = []
//   // for(let i=0;i<props.numbers.length;i++){
//   //   array.push(<div>下标为：{i}，值为：{props.numbers[i]}</div>)
//   // }
//   // return <div>{ array }</div>

//   // map
//   return props.numbers.map((n,index) =>{
//     return <div>下标为：{index}，值为：{n}</div>
//   })
// }

export default App