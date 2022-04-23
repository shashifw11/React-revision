import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/counter/counter';
import { Todos } from './Components/todo/todos';
import { Timer } from './Components/timer/timer';
import { Stopwatch } from './Components/stopwatch/watch';
import { Scroll } from './Components/Scroll/scroll';
import { Form } from './Components/form/form';
import { Auth } from './Components/Authantication/auth';
import {Routes,Route} from "react-router-dom" ; 
import { Navbar } from './Components/Navbar/navbar';
import { CartMain } from './Components/body/cartmain';
import { TheamMain } from './Components/theam/theamMain';
function App() {  
  
  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
      <Route path = "todos" element = {<Todos/>}/>
      <Route path = "counter" element = {<Counter/>}/>
      <Route path = "timer" element = { <Timer/>}/>
      <Route path = "stopwatch" element = {<Stopwatch/>}/>
      <Route path = "scroll" element = {<Scroll/>}/>
      <Route path = "form" element = {<Form/>}/>
      <Route path = "theam" element = { <TheamMain/>}/>
      <Route path = "cart" element = {<CartMain/>}/>
      <Route path = "login" element = {<Auth/>}/>
       </Routes>
    </div>
  );
}

export default App;
