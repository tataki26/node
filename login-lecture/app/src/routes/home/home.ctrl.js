"use strict";

// controller
const home = (req, res) => {
    // render
    // express에서 해당 file의 내용(text)을 읽어 client에게 전송
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// object에서 key만 넘겨줄 경우, 자체적으로 key와 같은 value 넘김
module.exports = {
    home,
    login,
};

// 같은 코드
/*
module.exports = {
    home: home,
    login: login,
};
*/