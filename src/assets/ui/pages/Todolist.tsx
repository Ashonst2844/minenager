import Card from "../components/Card";

type StatusProps = {
    status: boolean;
};

function Status({status}: StatusProps) {
    return <div className="w-4 h-4 flex rounded-full absolute top-0 right-0" style={{
        backgroundColor: status?"var(--success)":"var(--warning)"
    }}/>
}

function Todolist() {
    const data_dummy = [
        {tasks:"Selesaikan 5 Tugas",deadline:"30-20-2020",status:true},
        {tasks:"Buat Programm",deadline:"21-61-2020",status:false}
    ]

    return <section>
        <h1 className="center">Todolist</h1>
        <div className="grid grid-cols-2 gap-2">
            {data_dummy.map((item, i)=><Card key={i} use="todo" {...item}>
                <Status status={item.status}/>
                <p className="font-bold">{item.tasks}</p>
                <span>{item.deadline}</span>
            </Card>)}
        </div>
    </section>
} export default Todolist;