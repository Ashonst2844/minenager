import Button from "../components/Button";

function Home() {
    return <section id="home" className="h-[200vh] text-white">
        <div className="h-screen bg-[url(/images/landing-image.jpg)] bg-cover bg-center pt-16">
            <div className="bg-(--accent)/50 backdrop-blur-xs p-2">
                <p className="text-4xl">Hallo,</p>
                <p className="text-6xl text-(--primary) uppercase ml-4 my-2">Masagus Ahmad Ramadhan</p>
                <p className="text-4xl">Mahasiswa :</p>
                <p className="text-2xl text-(--primary) uppercase ml-4 my-2">UNINDRA <br /> [Computer Science]</p>
                <div className="my-8 center flex-col gap-4">
                    <span className="italic text-center opacity-75">Saya Akan Membantu Jadwal Kuliah Anda :</span>
                    <Button type="button" theme="secondary" w="60%">Get Started!</Button>
                </div>
            </div>
        </div>
    </section>
} export default Home;