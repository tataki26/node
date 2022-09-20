// activate Strict Mode
// 엄격한 parsing + error handling = error 방지
"use strict";

const express = require("express");
const router = express.Router();

// root path
// browser로 루트 경로로 요청이 들어오면 콜백 함수 실행
// 경로 지정, req: 요청, res: 응답
router.get("/", (req, res) => {
    // ejs file 연결
    // views부터 시작
    res.render("home/index");
});

router.get("/login", (req, res) => {
    res.render("home/login");
});

// router를 외부 file에서 사용할 수 있도록 내보내기
module.exports = router;