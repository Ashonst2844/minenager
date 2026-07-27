import Tasks from "./assets/ui/pages/Tasks";
import Todolist from "./assets/ui/pages/Todolist";
import Home from "./assets/ui/pages/Home";
import Schedules from "./assets/ui/pages/Schedules";
import Stats from "./assets/ui/pages/Stats";
import Register from "./assets/ui/pages/Register";
import Dosen from "./assets/ui/pages/Dosen";

import Header from "./assets/ui/pages/Main/Header";
import Footer from "./assets/ui/pages/Main/Footer";
import Navigation from "./assets/ui/pages/Main/Navigation";

import "./App.css"
import {Routes,Route}from "react-router-dom"
// import { useFetch } from "./assets/hooks/useFetch";

// interface UserData {
//   id:string;
//   username:string;
//   created_at:string;
//   email:string;
//   password:string;
//   campus:string;
//   major:string;
//   nim:number;
//   semester:number;
//   batch:number;
//   photo:string;
//   member:"free"|"silver"|"gold";
// }

function App() {
  // const { data, loading, error } = useFetch<UserData>("user_data", "supabase")
  const logged = true

  return <main className="min-h-screen">
    <Header logged={logged}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="tasks" element={<Tasks/>}/>
      <Route path="todolist" element={<Todolist/>}/>
      <Route path="schedules" element={<Schedules/>}/>
      <Route path="stats" element={<Stats/>}/>
      <Route path="dosen" element={<Dosen/>}/>
    </Routes>
    <Navigation logged={logged}/>
    <Footer/>
  </main>
} export default App;