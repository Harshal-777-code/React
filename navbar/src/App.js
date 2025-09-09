// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// 
 ///=======form in react======///
 ////React form controls component////
import React from "react";

import Uncontrolled from "./pages/Uncontrolled";

export default function App() {
    return (
      <div>
        <Uncontrolled/>
      </div>
    )
  }
  

  // const [fname, setName] = useState("");
  // const [lname,setlame] = useState("");

  // function handlefname = (e)=>{
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // }

  // function handlelname = (e)=>{
  //   console.log(e.target.value);
  //   setlame(e.target.value);
  // }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("form submitted successfully");
//   }
//   const[formdata, setformdata] = useState({fname: "", lname: ""});

//   const handlechange = (e) => {
//     //console.log(e.target.name)
//     //console.log(e.target.value)
//     ///rfc///
//     setformdata({...formdata, [e.target.name]: e.target.value});
//   }

//   return (
//     <div>
//       <h1>form by react</h1>
//       <form action="" onSubmit={handleSubmit}>
//           <label htmlFor="fname">First Name:</label>
//           <input type="text" id="fname" name="fname" value={formdata.fname} onChange={handlechange} />
//       <br></br>
//           <label htmlFor="lname">Last Name:</label>
//           <input type="text" id="lname" name="lname" value={formdata.lname} onChange={handlechange} />
//           <input type="submit"/>
//       </form>
//     </div>
//   )
// }

  

