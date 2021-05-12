import React from "react";

const App = () => {
  return (
    <div>
      class声明组件
    </div>
  );
};

// 方法一
// ES5不支持class的写法
// const A = React.createClass({
//   render() {
//     return <div>hi</div>;
//   },
// });

// 方法二
// class B extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div>hi</div>
//     )
//   }
// }


export default App;
