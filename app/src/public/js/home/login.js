"use strict";

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };

    // 요청 또는 전달
    fetch('/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) { // 로그인 성공시 메인화면으로...
            location.href = '/';
        } else { // 로그인 실패시 메세지 표시
            alert(res.msg);
        }
    });
};