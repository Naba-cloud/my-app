import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {Grid,GridItem} from "@chakra-ui/react";
import { useColorMode } from 'react-use-color-mode';
import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header";

const  App=()=>{
  
  return (
   <div className="App">
   <Header/>
 {/* <Navbar/> */}
   </div>

  )
}
// export default App;
export default App ;
