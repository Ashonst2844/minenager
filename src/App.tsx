import Home from "./assets/ui/pages/Home";
import Schedules from "./assets/ui/pages/Schedules";
import Tasks from "./assets/ui/pages/Tasks";
import Stats from "./assets/ui/pages/Stats";

import Button from "./assets/ui/components/Button";
import Image from "./assets/ui/components/Image";
import Modal from "./assets/ui/components/Modal";

import "./App.css"
import {useState} from "react";
import {Routes,Route}from "react-router-dom"

const nav = ["home","schedules","tasks","stats"]
const social = [
  {name:"instagram",link:"https://www.instagram.com/reel/DWA6HLAgROm/?igsh=dmd3Mm04NTI1ODly"},
  {name:"facebook",link:"https://www.facebook.com/profile.php?id=61589665117247"},
  {name:"github",link:"https://github.com/Ashonst2844"},
]

function App() {
  const [state,setState] = useState<boolean>(false)
  const logged = true

  return <main className="min-h-screen">
    <header className="fixed w-full h-16 bg-(--fg)/75 flex items-center justify-between p-4 z-20 shadow-2xl">
      <h1 className="text-2xl text-white"><span className="text-(--primary)">Mine</span>nager</h1>
      <Button onClick={()=>setState(true)} type="button" theme="primary" w="40px" h="100%">
        <Image type="icon" url="menu"/>
      </Button>
    </header>
    <Modal state={state} onClose={() => setState(false)}>
      {
        !logged ?
        <div className="center flex-col px-2">
          <h1 className="text-2xl">Kamu Belum Daftar</h1>
          <p className="opacity-50">Silahkan daftar</p>
          <div className="center my-4 gap-4 w-full">
            <Button type="route" w="50%" theme="primary">Sign-in</Button>
            <Button type="route" w="50%" theme="secondary">Log-In</Button>
          </div>
        </div> 
        :
        <div className="center flex-col py-2">
          <h1 className="text-2xl">Profile</h1>
          <div className="w-24 h-24 bg-(--primary) rounded-full my-4">
            <Image type="icon" url="user"/>
          </div>
          <div className="w-full flex flex-col my-4">
            <span className="opacity-50 text-xs">Nama</span>
            <p>Masagus Ahmad Ramadhan</p>
            <span className="opacity-50 text-xs">Kampus/Jurusan/Semester</span>
            <p>Unindra - Computer Science (1)</p>
            <span className="opacity-50 text-xs">NIM</span>
            <p>202643500545</p>
            <span className="opacity-50 text-xs">Angkatan</span>
            <p>2026</p>
          </div>
          <div className="center px-2 gap-4 w-full">
            <Button type="route" w="50%" theme="primary">Edit</Button>
            <Button type="route" w="50%" theme="warning">Log-out</Button>
          </div>
        </div> 
      }
    </Modal>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="schedules" element={<Schedules/>}/>
      <Route path="tasks" element={<Tasks/>}/>
      <Route path="stats" element={<Stats/>}/>
    </Routes>
    <footer className="h-[50vh] bg-(--fg) pb-16 text-white">
      <div className="w-full h-full p-4 flex flex-col">
        <div className="h-[90%] grid grid-cols-2">
          <div  className="center gap-4">
            {social.map((item,i)=>(
              <a key={i} href={`#${item.link}`} className="w-8 h-8">
                <Image type="icon" url={item.name}/>
              </a>
            ))}
          </div>
          <div  className="flex justify-center flex-col text-xs gap-4">
            <p>(+62) 858-9129-9147</p>
            <p>agusyantosugiyanto@gmail.com</p>
            <p>Jakarta Selatan, Indonesia</p>
          </div>
        </div>
        <div className="h-[10%] center">
          <p>Copyright &copy; 2026 Masagus, All-Right Reserved</p>
        </div>
      </div>
    </footer>
    {
      logged && <nav className="w-full h-16 flex justify-around p-2 fixed bottom-0 bg-(--fg)/75 z-20 shadow-">
        {nav.map((item,i)=>(
          <Button key={i} type="route" theme="primary" target={item!="home"?`/${item}`:"/"} w="48px" h="48px">
            <Image type="icon" url={item}/>
          </Button>
        ))}
      </nav>
    }
  </main>
} export default App;