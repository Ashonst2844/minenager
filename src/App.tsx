import Home from "./assets/ui/pages/Home";
import Schedules from "./assets/ui/pages/Schedules";
import Tasks from "./assets/ui/pages/Tasks";
import Stats from "./assets/ui/pages/Stats";

import Navigation from "./assets/ui/components/Navigation";

import "./App.css"
import * as ReactDOM from "react-router-dom"

function App() {
  return <main>
    <Navigation/>
    <ReactDOM.Routes>
      <ReactDOM.Route path="/" element={<Home/>}/>
      <ReactDOM.Route path="schedules" element={<Schedules/>}/>
      <ReactDOM.Route path="tasks" element={<Tasks/>}/>
      <ReactDOM.Route path="stats" element={<Stats/>}/>
    </ReactDOM.Routes>
  </main>
} export default App;