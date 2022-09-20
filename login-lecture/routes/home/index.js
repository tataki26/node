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
router.get("/", ctrl.home);
router.get("/login", ctrl.login);

// router를 외부 file에서 사용할 수 있도록 내보내기
module.exports = router;