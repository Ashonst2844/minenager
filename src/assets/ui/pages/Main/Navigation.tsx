import Button from "../../components/Button";
import Image from "../../components/Image";

interface NavigationProps {logged:boolean}

import { useState } from "react";

export default function Navigation(props: NavigationProps) {
    const [navOpen,setNavOpen] = useState<string>("home")
    const handleChange = (target: string)=>setNavOpen(target)

    return props.logged && 
    <nav className="w-screen h-18 flex items-center p-1 fixed justify-around bottom-0 bg-(--fg) z-20 navigation">
        <Button onClick={()=>handleChange("tasks")} type="route" theme="primary" target="/tasks" w="56px" h="56px" className={`flex-col ${"tasks"==navOpen?"brightness-120":"brightness-100"}`}>
            <Image type="icon" url="tasks" w="75%"/>
            <p className="text-xs">Tasks</p>
        </Button>
        <Button onClick={()=>handleChange("todo")} type="route" theme="primary" target="/todolist" w="56px" h="56px" className={`flex-col ${"todolist"==navOpen?"brightness-120":"brightness-100"}`}>
            <Image type="icon" url="todo" w="75%"/>
            <p className="text-xs">Todolist</p>
        </Button>
        <Button onClick={()=>handleChange("home")} type="route" theme="primary" target="/" w="64px" h="64px" className={`flex-col rounded-full -translate-y-2 ${"home"==navOpen?"brightness-120":"brightness-100"}`}>
            <Image type="icon" url="home" w="75%"/>
            <p className="text-xs">Home</p>
        </Button>
        <Button onClick={()=>handleChange("schedules")} type="route" theme="primary" target="/schedules" w="56px" h="56px" className={`flex-col ${"schedules"==navOpen?"brightness-120":"brightness-100"}`}>
            <Image type="icon" url="schedules" w="75%"/>
            <p className="text-xs">Schedule</p>
        </Button>
        <Button onClick={()=>handleChange("stats")} type="route" theme="primary" target="/stats" w="56px" h="56px" className={`flex-col ${"stats"==navOpen?"brightness-120":"brightness-100"}`}>
            <Image type="icon" url="stats" w="75%"/>
            <p className="text-xs">Stats</p>
        </Button>
    </nav>
}