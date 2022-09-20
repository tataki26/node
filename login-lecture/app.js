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

// root path
// browser로 루트 경로로 요청이 들어오면 콜백 함수 실행
// 경로 지정, req: 요청, res: 응답
app.get("/", (req, res) => {
    // send message
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            여기는 루트입니다.
        </body>
        </html>
    `
    );
});

app.get("/login", (req, res) => {
    // hard coding
    res.send(`
        <!-- ! + enter: 자동 완성-->
        <!DOCTYPE html>
        <html lang="ko"> <!-- browser가 문서를 해독할 때 필요한 속성 -->
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <!-- 자동 완성: input 입력 후 tab -->
            <!-- placeholder: hint message -->
            <input type="text" placeholder="아이디"><br>
            <input type="text" placeholder="비밀번호"><br>
            <button>로그인</button>
        </body>
        </html>
    `);
});

// open port 3000
// localhost:3000
app.listen(3000, () => {
    console.log("Server starts...");
});