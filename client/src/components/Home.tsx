import React, { useState, useEffect } from "react";
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            setError(null);
            setLists(null);
            setLoading(true);
            const response = await axios.get(
              'http://localhost:8081/list'
            );
            setLists(response.data);
          } catch (e : any) {
            setError(e);
          }
          setLoading(false);
        };
    
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lists) return null;

    console.log(lists)

    return (
        <div>
            {/* {lists.map((list: { id: number; }) => (
                <Home list={list} key={list.id} />
            ))} */}
        </div>
    )
}