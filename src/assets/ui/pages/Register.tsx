import React from "react";
import Button from "../components/Button";
import Form from "../components/Form";

function Register() {
    return <div className="flex overflow-x-hidden">
        <section id="signin" className="min-w-full flex flex-col items-center gap-2">
            <h2>Sign-In</h2>
            <span>Create Your Own Account</span>
            <Form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); }}> {/* //TODO Just Temporary */}
                <Form.Input type="text" name="username" placeholder="Masukkan Nama:" required/>
                <Form.Input type="email" name="email" placeholder="Masukkan Email:" required/>
                <Form.Input type="password" name="password" placeholder="Masukkan Password:" required/>
                <Form.Input type="password" name="confirm_password" placeholder="Konfirmasi Password:" required/>
                <Form.Input type="text" name="campus" placeholder="Masukkan Nama Kampus:" required/>
                <Form.Input type="text" name="major" placeholder="Masukkan Jurusan:" required/>
                <Form.Input type="number" name="nim" placeholder="Masukkan Nomor Mahasiswa (NIM):" required/>
                <Form.Input type="number" name="semester" placeholder="Masukkan Semester Sekarang:" required/>
                <Form.Input type="number" name="batch" placeholder="Masukkan Angkatan:" required/>
            </Form>
            <div className="center w-full gap-2">
                <Button type="route" theme="warning" w="50%" target="/">Cancel</Button>
                <Button type="button" theme="secondary" w="50%" target="#login">Have Account?</Button>
            </div>
        </section>
        <section id="login" className="min-w-full flex flex-col items-center gap-2">
            <h2>Log-In</h2>
            <span>Please Login</span>
            <Form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); }}> {/* //TODO Just Temporary */}
                <Form.Input type="text" name="username" placeholder="Masukkan Nama:" required/>
                <Form.Input type="email" name="email" placeholder="Masukkan Email:" required/>
                <Form.Input type="password" name="password" placeholder="Masukkan Password:" required/>
            </Form>
            <div className="center w-full gap-2">
                <Button type="route" theme="warning" w="50%" target="/">Cancel</Button>
                <Button type="button" theme="secondary" w="50%" target="#signin">Not Have Account?</Button>
            </div>
        </section>
    </div> 
} export default Register;