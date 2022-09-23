import logo from './logo.svg';
import './App.css';

import Container from './Container';

function App() {

  return (

    <div className="App-header">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" height="100px" width="100px" />
        <h1>SSAFY 교육지원금 서명 생성기</h1>
        <p>8기 버전</p>
      </div>

      <Container />

      <div className="footer">
        
        <p>&copy;  SSAFY 5기 서울캠퍼스 최동욱</p>
        {/* <p><del>문의사항 / 버그 : cheal3@naver.com</del></p>         */}

        <p>수정자 : SSAFY 8기 서울캠퍼스 조용장</p>
        <p>문의사항 / 버그 : dydwkd48670@gmail.com</p>
        
        <h3>
        <details>
        <summary>수정 사항 및 예정 사항</summary>
        <h4>2022.09.23 업데이트 - 예상 지원금 금액 볼 수 있게 추가</h4>
        <h4>예정 사항</h4>
        <h5>- 모바일 환경에 최적화 하기</h5>
        <h5>- 모바일에서 서명 작성 가능하게 변경하기</h5>
        <h5>- 모바일 사용자를 위해 서명 부분 확대 기능 추가하기</h5>
        </details>
        </h3>
        
      </div>


    </div >

  );
}

export default App;