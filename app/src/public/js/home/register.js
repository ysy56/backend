"use strict";

const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    pw = document.querySelector('#pw'),
    confirmPw = document.querySelector('#confirm-pw'),
    registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {

    if (!id.value) return alert('아이디를 입력해주십시오.');
    if (pw !== confirmPw) return alert('비밀번호가 일치하지 않습니다.');
    
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };

    // 요청 또는 전달
    fetch('/register', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) { // 로그인 성공시 메인화면으로...
            location.href = '/login';
        } else { // 로그인 실패시 메세지 표시
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error('회원가입 중 에러 발생');
    });
};