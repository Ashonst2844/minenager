import Card from "../components/Card";
import Image from "../components/Image";

function Dosen() {
    const data_dummy = [
        {name:"Sulaeman",no:123456,subject:"Kimia"},
        {name:"Sri",no:654321,subject:"Bahasa"},
    ]

    return <section>
        <h1 className="center">Tasks</h1>
        <div className="grid grid-cols-2 gap-2">
            {data_dummy.map((item, i)=><Card key={i} use="tasks" hasModal={false} {...item}>
                <div className="w-16 h-16 bg-(--primary) rounded-full">
                    <Image type="icon" url="user"/>
                </div>
                <p className="font-bold">{item.name}</p>
                <span>{item.no}</span>
                <p>{item.subject}</p>
            </Card>)}
        </div>
    </section>
} export default Dosen;