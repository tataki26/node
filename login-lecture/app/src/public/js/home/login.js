// html 문서와 연결된 파일 = front단에서 동작하는 js

"use strict";

const { post } = require("../../../routes/home");

// querySelector(질의 선택자)
// 파라미터로 넘어오는 선택자로부터 html data를 가져올 수 있음
// 선택자: html tag 정보, 개발자가 임의로 지정 가능(id)
// #id: tag에 id로 부여되어 있는 id를 가져오기(input id가 아닌 id에 담긴 선택자 id) 
const id = document.querySelector("#id"),
    paword = document.querySelector("#psword"),
    // tag 자체를 load
    // button이 하나만 존재하므로 가능
    loginBtn = document.querySelector("button");

// eventlistener
// "click" event가 발생하면 login 함수(callback) 실행
loginBtn.addEventListener("click", login);

function login(){
    // 요청하는 data
    const req = {
        // tag.value: html data 가져오기
        id: id.value,
        psword: psword.value,
    };
    
    // server에 전달
    // 첫번째 인자: data 전달 경로
    fetch("/login", {
        // body로 전달 시, POST 메소드 활용
        method: "POST",
        // 전달하는 data가 JSON 형식
        headers: {
            "Content-Type": "application/json"
        },
        // key: body, value: req
        // 객체를 JSON(문자열)으로 감싼 뒤 전달
        body: JSON.stringify(req),
    });
};