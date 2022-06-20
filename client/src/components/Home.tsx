import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyTable from "./Table";
import axios from "axios";
import { PostListVo } from "../vo/postListVo";
import { TiPencil } from 'react-icons/ti'

function Home({ list } : any) {
    return (
        <div>
            <b>{list.metaData}</b> <span>({list.rows})</span>
        </div>
    )
}

function HomeList(this: any) {
    const [lists, setLists] = useState<PostListVo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            setError(null);
            setLoading(true);
            const response = await axios.get(
              'http://localhost:8081/list'
            );
            setLists(response.data.list.rows);
          } catch (e : any) {
            setError(e);
          }
          setLoading(false);
        };
    
        
        return () => {
          fetchUsers();
        }
    }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!lists) return null;

    

    return (
        <div className="home-container">
            <div className="home-title">
              <div>게시판</div>
              <Link to="/write"><TiPencil /></Link>
            </div>
            <MyTable list={lists} ></MyTable>
        </div>
    )
}

export default React.memo(HomeList);