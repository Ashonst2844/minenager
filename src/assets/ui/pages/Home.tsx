import Button from "../components/Button";
import Image from "../components/Image";
import Form from "../components/Form";

const features = [
    {icon:"clock",text:"Atur semua jadwal dan tugas kuliah"},
    {icon:"todo",text:"Membantu untuk tetap disiplin"},
    {icon:"graph",text:"Analis semua nilai tugas"},
    {icon:"target",text:"Membantumu meraih tujuan"},
]
const plans = [
    {grade:"free",price:0,color:"white",benefits:[
        "5 slot To-Do-List gratis",
        "1x / Minggu tambah data nilai",
        "Tidak bisa custom photo profile"
    ]},
    {grade:"silver",price:9.999,color:"color-mix(in srgb, var(--primary) 50%, white 10%)",benefits:[
        "Suppord Developer",
        "15 slot To-Do-List",
        "Tambahkan nilai kapan saja",
        "Bisa custom photo profile",
        "Bisa download record nilai.pdf"
    ]},
    {grade:"gold",price:14.999,color:"color-mix(in srgb, var(--primary) 100%, white 10%)",benefits:[
        "Nikmati pengalaman tanpa batas",
        "Suppord Developer",
        "30+ slot To-Do-List",
        "Tambahkan nilai kapan saja",
        "Bisa custom photo profile",
        "Bisa download record nilai.pdf"
    ]},
]

import React, { useState } from "react";

function Home() {
    const demo = import.meta.env.DEV


    const emailTo = "agusyantosugiyanto@gmail.com"
    const [emailName, setEmailName] = React.useState("")
    const [emailSubject, setEmailSubject] = React.useState("")
    const [emailBody, setEmailBody] = React.useState("")
    const FinalMessage = `Saya ${emailName}, ${emailBody}`
    console.log(emailName)
    const emailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(emailSubject)}&body=${FinalMessage}`

    const customText = `text-4xl mb-4`

    const [showPlan, setShowPlan] = useState<"free"|"silver"|"gold"|unknown>("free")

    return <>
        <section id="home" className="center">
            <div className="h-screen bg-[url(/images/landing-image.jpg)] bg-cover bg-center pt-16 text-white">
                <div className="bg-(--fg)/50 p-2">
                    <p className={customText}>Hallo,</p>
                    <p className="text-6xl text-(--primary) uppercase ml-4 my-2">Masagus Ahmad Ramadhan</p>
                    <p className={customText}>Mahasiswa :</p>
                    <p className="text-2xl text-(--primary) uppercase ml-4 my-2">UNINDRA <br /> [Computer Science]</p>
                    <div className="my-8 center flex-col gap-4">
                        <span className="italic text-center">Saya Akan Membantu Jadwal Kuliah Anda :</span>
                        <Button type="button" theme="secondary" w="60%" target="#features">Get Started!</Button>
                        <Button type="button" theme="primary" w="60%">Register</Button>
                    </div>
                </div>
            </div>
        </section>
        <section id="features" className='center flex-col'>
            <h1 className={customText}>Fitur</h1>
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-2">
                {features.map((item,i)=>(
                    <div key={i} className="bg-(--primary) h-50 text-white rounded-xl center flex-col gap-4 shadow-lg p-2">
                        <Image type="icon" url={item.icon} w="50%"/>
                        <span className="text-center">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
        {demo && (
            <section id="plan" className='flex items-center flex-col gap-2'>
                <h1 className={customText}>Jadilah Anggota</h1>
                <div className="w-full grid grid-cols-3 gap-2">
                    {plans.map((item,i)=>(
                        <div key={i} className={`h-40 shadow-xl p-2 flex flex-col justify-between rounded-xl`} style={{backgroundColor:item.color}} onClick={
                            () => setShowPlan(item.grade)
                        }>
                            <p className="text-2xl">{item.grade.toUpperCase()}</p>
                            <div className="flex flex-col">
                                <span>Rp.</span>
                                <span className="text-2xl opacity-50 pl-2">{item.price}</span>
                                <span>/Bulan</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full bg-white shadow-xl p-2 flex flex-col items-center rounded-xl">
                    <h3 className="text-2xl">{plans.find((plan)=>plan.grade==showPlan)?.grade.toUpperCase()}</h3>
                    <ul className="opacity-50 w-full p-6 flex flex-col gap-2">
                        {plans.find((plan)=>plan.grade==showPlan)?.benefits.map((text,i)=>(
                            <li key={i} className="list-decimal">{text}</li>
                        ))}
                    </ul>
                    <Button type="button" theme="primary">Make A Plan Now!</Button>
                </div>
            </section>
        )}
        <section id="plan" className='center flex-col gap-2'>
            <h1 className={customText}>Hubungi Developer</h1>
            <div className="w-[80%] flex flex-col gap-4">
                <Form.Input type="text" required={false} name="name" placeholder="Nama: " onChange={(e)=>setEmailName(e.target.value)}/>
                <Form.Input type="text" required={false} name="subject" placeholder="Tujuan: " onChange={(e)=>setEmailSubject(e.target.value)}/>
                <Form.Input type="text" required={false} name="message" placeholder="Pesan: " onChange={(e)=>setEmailBody(e.target.value)}/>
                <Button type="link" theme="primary" target={emailURL}>Test</Button>
            </div>
        </section>
    </> 
    
} export default Home;