function bindLogoutButton() {
    const btnLogout = document.querySelector('#btn_logout');
    btnLogout.addEventListener('click', logout);
}

function getToken() {
    return localStorage.getItem('token');
}

async function main() { 

    // 버튼에 이벤트 연결
    bindLogoutButton();

    // 토큰 체크
    const token = getToken();
    if (token === null) {
        location.assign('/login'); // redirect
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기

    //나의 책을 서버에서 받아오기

    //받아온 책을 그리기

}

document.addEventListener('DOMContentLoaded', main);  // 함수호출없이 자동으로 실행
/**
 * DOMContentLoaded 이벤트는 최초 HTML문서가 완전히 로드 및 파싱되었을때 발생되고, 
 * 스타일시트나 이미지 및 서브프레임 로드가 끝나기를 기다리지 않는다.
 * load 이벤트는 오직 모든 페이지가 완전히 로드되었을 때 사용해야 한다. 
 * 즉 DOMContentLoaded가 load보다 더 빨리 일어난다.
 */