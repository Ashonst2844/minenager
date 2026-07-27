import Button from "../../components/Button"
import Image from "../../components/Image"
import Modal from "../../components/Modal"

import React from "react"

interface HeaderProps {
    logged: boolean
}

export default function Header(props: HeaderProps) {
    const [state, setState] = React.useState<boolean>(false)

    return <>
        <header className="fixed w-full h-18 bg-(--fg)/75 flex items-center justify-between p-4 z-20 shadow-2xl">
            <p className="text-white font-bold">Minenager</p>
            <div className="flex gap-2">
                <Button type="route" target="/dosen" theme="primary" w="80px" h="100%">
                    Dosen
                </Button>
                <Button onClick={()=>setState(true)} type="button" theme="primary" w="40px" h="100%">
                    <Image type="icon" url="menu"/>
                </Button>
            </div>
        </header>
        <Modal state={state} onClose={() => setState(false)}>
        {
            !props.logged ?
            <div className="center flex-col gap-2">
                <h2>Kamu Belum Daftar</h2>
                <span>Silahkan daftar</span>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <Button type="route" theme="primary" target="/register#signin">Sign-in</Button>
                    <Button type="route" theme="secondary" target="/register#login">Log-In</Button>
                </div>
            </div> 
            :
            <div className="center flex-col gap-2">
                <h2>Profile</h2>
                <div className="center w-24 h-24 bg-(--primary) rounded-full my-4">
                    <Image type="icon" url="user" w="75%"/>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <span>Nama</span>
                    <p>Masagus Ahmad Ramadhan</p>
                    <span>Kampus/Jurusan/Semester</span>
                    <p>Unindra - Computer Science (1)</p>
                    <span>NIM</span>
                    <p>202643500545</p>
                    <span>Angkatan</span>
                    <p>2026</p>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <Button type="route" theme="primary">Edit</Button>
                    <Button type="route" theme="warning">Log-out</Button>
                </div>
            </div> 
        }
        </Modal>
    </>
}