import axios from "axios";
import React from "react";

export default function Write() {
    axios.post("http://localhost:8081/upload", {
        title: "",
        content: ""
    })
    .then(function (response) {
        console.log(response)
    }).catch(function (error) {
        console.log(error)
    }).then(function() {
        // 항상 실행
    });

    return (
        <div className="wirte-container">
            <form action="/upload" method="post">
                <div><input type="text" name="title" placeholder="제목" required /></div>
                <div><textarea name="content" placeholder="내용" required></textarea></div>
                <button type="submit">글쓰기</button>
            </form>
        </div>
    )
}