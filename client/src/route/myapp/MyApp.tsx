import React, { useEffect } from "react";
import { TiPencil } from "react-icons/ti";
import { Link } from "react-router-dom";

function Home({ list }: any) {
  return (
    <div>
      <b>{list.metaData}</b> <span>({list.rows})</span>
    </div>
  );
}

function HomeList(this: any) {
  useEffect(() => {}, []);

  return (
    <div className="home-title">
      <div>게시판</div>
      <Link to="/write">
        <TiPencil />
      </Link>
    </div>
  );
}

export default React.memo(HomeList);
