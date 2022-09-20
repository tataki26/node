// 서버의 중심 파일

// load express module
const express = require("express");
// execute express
const app = express();

// root path
// browser로 루트 경로로 요청이 들어오면 콜백 함수 실행
// 경로 지정, req: 요청, res: 응답
app.get("/", (req, res) => {
    // send message
    res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) => {
    res.send("여기는 로그인 화면입니다.");
});

// open port 3000
// localhost:3000
app.listen(3000, () => {
    console.log("Server starts...");
});