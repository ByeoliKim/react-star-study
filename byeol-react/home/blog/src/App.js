import React, { useState } from 'react';
import './App.css';

//리액트(자바스크립트 프레임워크)는 JSX 문법을 사용하면 데이터 바인딩을 통한 랜더링이 쉽다

function App() {

  //var [a,b] = [10, 100];  //10은 a 변수에, 100은 b 변수에 담기
  //새로고침 없이 스무스하게 랜더링하기 위해 state를 사용해야 한다
  //자주 바뀌고, 중요한 데이터들을 변수 말고 state에 저장해서 사용하자
  let [postTit,postMdf] = useState(['로스트 아크 데모닉 각인 세팅🐇','로스트 아크 데모닉 각인 세팅🐇🐇', '로스트 아크 데모닉 각인 세팅🐇🐇🐇']); //[a,b]
  let postTitle = "로스트 아크 데모닉 각인 세팅"
  

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {fontSize:'30px', letterSpacing:'-2px'} }>⭐️ 별이의 개발 Blog ⭐️</div>
      </div>
      <div className="content-list">
        <ul>
          <li><h4>{ postTit[0] }</h4> <span>3월 1일 발행</span></li>
          <li><h4>{ postTit[1] }</h4> <span>3월 1일 발행</span></li>
          <li><h4>{ postTit[2] }</h4> <span>3월 1일 발행</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
