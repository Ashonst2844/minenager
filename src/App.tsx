import Home from "./assets/ui/pages/Home";
import Schedules from "./assets/ui/pages/Schedules";
import Tasks from "./assets/ui/pages/Tasks";
import Stats from "./assets/ui/pages/Stats";

import Button from "./assets/ui/components/Button";
import Image from "./assets/ui/components/Image";

import "./App.css"
import * as ReactDOM from "react-router-dom"

function App() {
  return <main>
    <header className="fixed w-full h-16 bg-(--accent)/75 flex items-center justify-between p-4 z-50 shadow-2xl">
      <h1 className="text-2xl text-white"><span className="text-(--primary)">Mine</span>nager</h1>
      <Button type="button" theme="primary" w="40px" h="100%">
        <Image type="icon" url="menu"/>
      </Button>
    </header>
    <ReactDOM.Routes>
      <ReactDOM.Route path="/" element={<Home/>}/>
      <ReactDOM.Route path="schedules" element={<Schedules/>}/>
      <ReactDOM.Route path="tasks" element={<Tasks/>}/>
      <ReactDOM.Route path="stats" element={<Stats/>}/>
    </ReactDOM.Routes>
    <nav className="w-full flex justify-around p-4 fixed bottom-0 bg-(--accent)/75 z-50 shadow-">
      {["home","schedules","tasks","stats"].map((item,i)=>(
        <Button key={i} type="route" theme="primary" w="60px" target={item!="home"?`/${item}`:"/"}>
          <Image type="icon" url={item}/>
        </Button>
      ))}
    </nav>
  </main>
} export default App;