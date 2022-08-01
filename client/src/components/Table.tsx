import React, { useState } from "react";
import { PostListVo } from "../vo/postListVo";

export default function MyTable({list} : any) {
    const lists : PostListVo[] = list
    console.log(lists)

    return (
        <table className="main-table">
            <colgroup>
                <col style={{width: '5%'}}/>
                <col style={{width: '20%'}}/>
                <col style={{width: '40%'}}/>
                <col style={{width: '10%'}}/>
                <col style={{width: '10%'}}/>
                <col style={{width: '8%'}}/>
                <col style={{width: '8%'}}/>
            </colgroup>
            <thead>
            
                <tr>
                    <th>No.</th>
                    <th>글</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>날짜</th>
                    <th>조회수</th>
                    <th>추천수</th>
                </tr>
            </thead>
            <tbody>
                {lists && lists.map((val) => (
                    <tr>
                        <td>{val.board_no}</td>
                        <td>{val.board_title}</td>
                        <td>{val.board_content}</td>
                        <td>{val.user_id}</td>
                        <td>{val.board_regdate.toString()}</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}