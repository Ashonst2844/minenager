import Card from "../components/Card";

type StatusProps = {
    status: boolean;
};

function Status({status}: StatusProps) {
    return <div className="w-4 h-4 flex rounded-full absolute top-0 right-0" style={{
        backgroundColor: status?"var(--success)":"var(--warning)"
    }}/>
}

function Tasks() {
    const data_dummy = [
        {tasks:"PR Matematika",deadline:"20-20-2020",subject:"Matematika",lecturer:"Asep",status:true},
        {tasks:"PR Informatika",deadline:"21-21-2020",subject:"Informatika",lecturer:"Jule",status:false}
    ]

    return <section>
        <h1 className="center">Tasks</h1>
        <div className="grid grid-cols-2 gap-2">
            {data_dummy.map((item, i)=><Card key={i} use="tasks" hasModal {...item}>
                <Status status={item.status}/>
                <p className="font-bold">{item.tasks}</p>
                <span>{item.deadline}</span>
                <p>{item.subject}</p>
            </Card>)}
        </div>
    </section>
} export default Tasks;