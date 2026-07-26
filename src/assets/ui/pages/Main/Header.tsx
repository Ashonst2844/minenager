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
            <Button onClick={()=>setState(true)} type="button" theme="primary" w="40px" h="100%">
                <Image type="icon" url="menu"/>
            </Button>
        </header>
        <Modal state={state} onClose={() => setState(false)}>
        {
            !props.logged ?
            <div className="center flex-col px-2">
                <h2>Kamu Belum Daftar</h2>
                <span>Silahkan daftar</span>
                <div className="center my-4 gap-4 w-full">
                    <Button type="route" w="50%" theme="primary">Sign-in</Button>
                    <Button type="route" w="50%" theme="secondary">Log-In</Button>
                </div>
            </div> 
            :
            <div className="center flex-col py-2">
                <h2>Profile</h2>
                <div className="center w-24 h-24 bg-(--primary) rounded-full my-4">
                    <Image type="icon" url="user" w="75%"/>
                </div>
                <div className="w-full flex flex-col my-4">
                    <span>Nama</span>
                    <p>Masagus Ahmad Ramadhan</p>
                    <span>Kampus/Jurusan/Semester</span>
                    <p>Unindra - Computer Science (1)</p>
                    <span>NIM</span>
                    <p>202643500545</p>
                    <span>Angkatan</span>
                    <p>2026</p>
                </div>
                <div className="center gap-2 w-full">
                    <Button type="route" w="50%" theme="primary">Edit</Button>
                    <Button type="route" w="50%" theme="warning">Log-out</Button>
                </div>
            </div> 
        }
        </Modal>
    </>
}