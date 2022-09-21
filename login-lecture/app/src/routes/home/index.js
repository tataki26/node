// activate Strict Mode
// 엄격한 parsing + error handling = error 방지
"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

/*
// root path
// browser로 루트 경로로 요청이 들어오면 콜백 함수 실행
// 경로 지정, req: 요청, res: 응답
router.get("/", (req, res) => {
    // ejs file 연결
    // views부터 시작
    res.render("home/index");
});

// domain으로 들어왔을 때, client의 요청을 연결해주는 부분
router.get("/login", (req, res) => {
    // controller: 실제 요청 수행
    res.render("home/login");
});
*/

// controller file을 불러와서 해당하는 객체에 접근
// root 경로로 왔을 때는 home controller로,
// login 경로로 왔을 때는 login controller로 넘어감
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);

// server로 login data를 받는 API
// frontend의 request data를 server console에 띄우기
// client로부터 url에 post 요청을 받으면 callback 함수 실행
router.post("/login", ctrl.process.login);

// router를 외부 file에서 사용할 수 있도록 내보내기
module.exports = router;