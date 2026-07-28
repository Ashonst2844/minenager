import Accordion from "../components/Accordion";

function Schedules() {
    const dummy_data = [
        {
            "day":"Monday",
            "schedules":[
                {"subject":"Matematika","time":"08:10"},
                {"subject":"Fisika","time":"09:10"},
            ]
        },
        {
            "day":"Tuesday",
            "schedules":[
                {"subject":"B Indo","time":"08:10"},
                {"subject":"B Inggris","time":"09:10"},
            ],
        },
        {
            "day":"Wednesday",
            "schedules":[
                {"subject":"Agama","time":"08:10"},
                {"subject":"Informatika","time":"09:10"},
            ],
        },
        {
            "day":"Thursday",
            "schedules":[
                {"subject":"Kimi","time":"08:10"},
                {"subject":"PPKN","time":"09:10"},
            ],
        },
        {
            "day":"Friday",
            "schedules":[
                {"subject":"MTK TL","time":"08:10"},
                {"subject":"Geografi","time":"09:10"},
            ],
        },
        {
            "day":"Saturday",
            "schedules":[
                {"subject":"Sastra","time":"08:10"},
            ],
        },
        {
            "day":"Sunday",
            "schedules":[]
        }
    ]

    return <section>
        <h1 className="center">Schedules</h1>
        <div className="flex flex-col gap-4">
            {dummy_data?.map((item,i)=>
                <Accordion key={i} title={item.day}>
                    <ul>
                        {item?.schedules?.map((subject,j)=>
                            <li key={j}>{subject.time} - <b>{subject.subject}</b></li>
                        )}
                    </ul>
                </Accordion>
            )}
        </div>
    </section>
} export default Schedules;