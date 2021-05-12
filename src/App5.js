import React , {useState,useEffect} from "react";
import useUpdate from './useUpdate'

const App = (props)=>{ //消除了this
  const [n,setN] = useState(0)
  const onClick = () =>{
    setN(n+1)
  }

  // •模拟componentDidMount
  useEffect(()=>{ console.log('第一次渲染') },[])
  // •模拟componentDidUpdate
  useEffect(()=>{ console.log('任意属性变化了')})
  useEffect(()=>{ console.log('n变化了')}, [n])
  // •模拟componentWillUnmount
  useEffect(()=>{
    console.log('第一次渲染')
    return ()=>{
      console.log('组件要死了')
    }
  })
  // 自定义的钩子
  useUpdate(()=>{
    console.log('变化了');
  },n)
  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App;
