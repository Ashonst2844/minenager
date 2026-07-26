import Image from "../../components/Image"

const social = [
    {name:"instagram",link:"https://www.instagram.com/reel/DWA6HLAgROm/?igsh=dmd3Mm04NTI1ODly"},
    {name:"facebook",link:"https://www.facebook.com/profile.php?id=61589665117247"},
    {name:"github",link:"https://github.com/Ashonst2844"},
]

export default function Footer() {
    return <footer className="h-[50vh] bg-(--fg) pb-18 text-white">
        <div className="w-full h-full p-4 flex flex-col">
            <div className="h-[90%] grid grid-cols-2">
                <div  className="center gap-4">
                {social.map((item,i)=>(
                    <a key={i} href={`#${item.link}`} className="w-8 h-8">
                        <Image type="icon" url={item.name}/>
                    </a>
                ))}
            </div>
            <div  className="flex justify-center flex-col gap-4">
                <span>(+62) 858-9129-9147</span>
                <span>agusyantosugiyanto@gmail.com</span>
                <span>Jakarta Selatan, Indonesia</span>
            </div>
        </div>
        <div className="h-[10%] center">
            <span>Copyright &copy; 2026 Masagus, All-Right Reserved</span>
        </div>
    </div>
</footer>
}