// 서버의 중심 파일

// // http
// // - 내장 모듈
// // - npm으로 설치할 필요X
// const http = require("http");
// const app = http.createServer((req, res) => {
//     // 정상 응답 코드, content 유형
//     // 보내는 응답이 text이고 html이며 utf-8 형식이다
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     // root 이후의 경로를 파싱 가능
//     // console.log(req.url);

//     // routing
//     if(req.url === "/") {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("Start server with http");
// });

//
// with express module
//

// load express module
const express = require("express");
// execute express
const app = express();

// app setting
// view단 처리를 위한 view engine setting
// 두 번째 인자: file이 저장될 directory 이름
app.set("views", "./views");
// html 해석 engine 지정
app.set("view engine", "ejs");

// root path
// browser로 루트 경로로 요청이 들어오면 콜백 함수 실행
// 경로 지정, req: 요청, res: 응답
app.get("/", (req, res) => {
    // ejs file 연결
    // views부터 시작
    res.render("home/index");
});

app.get("/login", (req, res) => {
    res.render("home/login");
});

// open port 3000
// localhost:3000
app.listen(3000, () => {
    console.log("Server starts...");
});