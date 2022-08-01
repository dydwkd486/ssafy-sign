import logo from './logo.svg';
import './App.css';

import Container from './Container';

function App() {

  return (

    <div className="App-header">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" height="100px" width="100px" />
        <h1>SSAFY 교육지원금 서명 생성기</h1>
      </div>

      <Container />

      <div className="footer">
        <p> 8기에 맞게 수정 버전입니다.</p>
        {/* <p>&copy;  SSAFY 8기 서울캠퍼스 조용장</p>
        <p>문의사항 / 버그 : dydwkd48670@gmail.com</p> */}
      </div>


    </div >

  );
}

export default App;
