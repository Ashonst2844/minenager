import Button from "./Button";

function Navigation() {
    return <nav className="w-full flex justify-around p-4 fixed bottom-0 bg-white/75 z-10">
        {["home","schedules","tasks","stats"].map((item,i)=>(
            <Button key={i} type="route" theme="primary" w="60px" target={item!="home"?`/${item}`:"/"}>
                <img src={`/icons/${item}.svg`} alt={i.toString()} />
            </Button>
        ))}
    </nav>
} export default Navigation;