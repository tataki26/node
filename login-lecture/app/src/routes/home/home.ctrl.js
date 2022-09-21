"use strict";

// controller

// page rendering 함수
// 기능 분할(GET/POST)을 위해 output 객체 선언
const output = {

    home: (req, res) => {
        // render
        // express에서 해당 file의 내용(text)을 읽어 client에게 전송
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

// frontend가 전달한 login data를 받아서 login 기능 처리
const process = {
    // req: frontend에서 전달한 request data(body로 받아옴)
    login: (req, res) => {
        // body parser를 통해 문자열이 객체화 되서 돌아옴
        console.log(req.body);
    },
};

// object에서 key만 넘겨줄 경우, 자체적으로 key와 같은 value 넘김
module.exports = {
    output,
    process,
};

// 같은 코드
/*
module.exports = {
    home: home,
    login: login,
};
*/