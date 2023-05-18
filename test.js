// 라우팅: 특정엔드포인트에대한클라이언트요청에서버가응답하는방법결정
// 엔드포인트: url(경로)와 http 요청메서드(get, post, put, delete)로 구분된 클라이언트 요청
const express = require("express");
const app = express();

app.listen(3000 ,() => {
    console.log("<h1>서버 시작해떠요...! 포뚜 삼처니 ><<h1>");
})

app.all("/customer", (req, res) => {
    res.send("모든 요청에 대한 응답이양뿌잉뿌뿡뿡");
}) // http 요청 메소드 종류에 상관 없음