import React, { useState } from "react";
import axios from "axios";

function Home({ list } : any) {
    return (
        <div>
            <b>{list.metaData}</b> <span>({list.rows})</span>
        </div>
    )
}

export default function HomeList(this: any) {
    const [lists, setLists] = useState(null);
    const [error, setError] = useState(null);

    axios.get('http://localhost:8081/list')
    .then((Response) => {
        setLists(null);
        console.log(Response.data)
        setLists(Response.data);
    })
    .catch((e) => {
        setError(e)
        console.log(e)
    })

    if (error) return <div>에러가 발생했습니다</div>;
    // if (!lists) return null;

    console.log(lists)

    return (
        <div>
            {lists.map((list: { id: number; }) => (
                <Home list={list} key={list.id} />
            ))}
        </div>
    )
}