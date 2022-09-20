"use strict";

const app = require("../app");
const PORT = 3000;

// server 띄우기
// open port 3000
// localhost:3000
app.listen(PORT, () => {
    console.log("Server starts...");
});