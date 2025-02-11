// // import logo from './logo.svg';
// // import './App.css';
// // import React from "react";
// // function App() {
// //   //how the elements are orginially created!!
// //   let x = React.createElement("div",{className:"App"})
// //   React.createElement("h1", null,"Welcome to React!!")
// //   let username = "Manohar";

// // return(
// //   <div>
// //     <h1>Hello, Welcome to React!</h1>
// //     <p>This is paragraph tag!!</p>
// //     {username}
// //     {x}
// //   </div>

// // );
// // }

// // export default App;
// // // class based component
// // class App extends React.Component {
// //     render(){
// //       return(
// //         <div>
// //           <h1>This is the h1 tag</h1>
// //           <p>This is the paragraph Tag</p>
// //         </div>
// //       )
// //     }
// // }
// // export default App;
// // const App =()=>{
// //   return(
// //     <div>
// //       <h1>This is arrow function h1 tag</h1>
// //     </div>
// //   )
// // }; export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Side1 from "./components/side1";
// import Side2 from "./components/side2";
// import Footer from "./components/footer";
// import "./global.css"
// function App(){
//   return(
//     <div className="app">
//       <Navbar />
//       <Main />
//       <Side1 />
//       <Side2 />
//       <Footer />
//     </div>
    

//   )
// };
// export default App;


// // props
// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx1 
//         username="Manohar"
//         age={21}
//         hob={["reading","chess","coding"]}
//         isGood={true}
//         sendFun={function (){

//           alert("hello");
//         }}

//         />
//       </div>
//     )
//   }
// }


// //props.children

// import React from 'react'
// import PropChildrenex from './propexample/PropChildrenex'
// import SubChildProps from './propexample/SubChildProps'
// export default function App() {
//   return (
//     <div>
//       <PropChildrenex username="manohar" company="Google" >
//         <h1>This is the Propchildren tag and above is passed as data to the child component</h1>
//         <SubChildProps/>
//          </PropChildrenex>
//     </div>
//   )
// }

// //drilling children 
// import React from 'react'
// import Child1 from './propexample/Child1'
// const App = () => {
//   return (
//     <div>
//       <Child1 />
//     </div>
//   )
// }

// export default App


// //CBCStateExample
// import React from 'react'
// import CBCStateEx from './StateExamples/CBCStateEx'
// const App = () => {
//   return (
//     <div>
//       <h1>APP</h1>
//       <CBCStateEx />
//     </div>
//   )
// }

// export default App

// // FBCStateEx
// import React from 'react'
// import FBCStateEx from './StateExamples/FBCStateEx'
// export default function App() {
//   return (
//     <div>
//       <FBCStateEx />
//     </div>
//   )
// }

// //StateEx Counter
// import React from 'react'
// import CounterEx from './StateExamples/CounterEx'
// const App = () => {
//   return (
//     <div>
//       <CounterEx />
//     </div>
//   )
// }

// export default App

// //function based component for styling types
// import React from 'react'
// import FunctionalComponent from './components/FunctionalComponent'
// const App = () => {
//   return (
//     <div>
//       <FunctionalComponent Questioning="How are you doing?"
//       apply={true}/>
//     </div>
//   )
// }

// // export default App
// // class based types of stylings
// import React from 'react'
// import ClassComponent from './components/ClassComponent'
// const App = () => {
//   return (
//     <div>
//       <ClassComponent />
//     </div>
//   )
// }

// export default App
// //form handling/controlled component
// import React from 'react'
// import FormHandling from './Controlled_components/FormHandling.jsx'
// const App = () => {
//   return (
//     <div>
//       <FormHandling />
//     </div>
//   )
// }

// export default App

// //useEffect example(app.js)
// import React from 'react'
// import UseEffectEx from './HookExample/UseEffectEx'
// const App = () => {
//   return (
//     <div>
//       <UseEffectEx />
//     </div>
//   )
// }

// export default App

// // object destructuring
// let obj = {a:1,b:2,c:3};
// let {a,b,c} = obj;
// console.log(a);
// console.log(b);
// console.log(c);

import React from 'react'
import RefExample from './HookExample/RefExample'
export default function App() {
  return (
    <div>
      <RefExample />
    </div>
  )
}
