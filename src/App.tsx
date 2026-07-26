import Tasks from "./assets/ui/pages/Tasks";
import Todo from "./assets/ui/pages/Todolist";
import Home from "./assets/ui/pages/Home";
import Schedules from "./assets/ui/pages/Schedules";
import Stats from "./assets/ui/pages/Stats";
import Register from "./assets/ui/pages/Register";

import Header from "./assets/ui/pages/Main/Header";
import Footer from "./assets/ui/pages/Main/Footer";
import Navigation from "./assets/ui/pages/Main/Navigation";

import "./App.css"
import {Routes,Route}from "react-router-dom"

function App() {
  const logged = true

  return <main className="min-h-screen">
    <Header logged={logged}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="tasks" element={<Tasks/>}/>
      <Route path="todo" element={<Todo/>}/>
      <Route path="schedules" element={<Schedules/>}/>
      <Route path="stats" element={<Stats/>}/>
    </Routes>
    <Navigation logged={logged}/>
    <Footer/>
  </main>
} export default App;