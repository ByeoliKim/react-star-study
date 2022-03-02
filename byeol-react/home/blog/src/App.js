/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

//리액트(자바스크립트 프레임워크)는 JSX 문법을 사용하면 데이터 바인딩을 통한 랜더링이 쉽다

function App() {

  //var [a,b] = [10, 100];  //10은 a 변수에, 100은 b 변수에 담기
  //새로고침 없이 스무스하게 랜더링하기 위해 state를 사용해야 한다
  //자주 바뀌고, 중요한 데이터들을 변수 말고 state에 저장해서 사용하자
  let [postTit,postMdf] = useState(['ㄴ로스트 아크 데모닉 각인 세팅🐇','ㄱ로스트 아크 데모닉 각인 세팅🐇🐇', 'ㄷ로스트 아크 데모닉 각인 세팅🐇🐇🐇']); //[a,b]
  let postTitle = "로스트 아크 데모닉 각인 세팅"
  let [like, likeUp] = useState(0); //[state, state 변경함수] 

  function subjectModify () {
    //버튼이 클릭했을 때 실행하기 위해서 소괄호 생략
    var newArray = [...postTit];  
    //state 데이터 수정 테크닉!! 수정된 [데이터] 를 만듭니다
    //state 를 deep copy (스프레드 문법)를 해서 수정합시다
    newArray[0] = '충모닉 재미있엉!!!!'
    postMdf(newArray);
    //리액트 대 원칙 : immutable data
    //state는 직접 수정이 안 됨
  }
  function subjectSort () {
    //useState 는 직접 변경이 불가능하기 때문에 특정 변수에 값을 복사한 다음 진행해야 한다 👻
    var newArray = [...postTit];
    newArray = newArray.sort();
    postMdf(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {fontSize:'30px', letterSpacing:'-2px'} }>⭐️ 별이의 개발 Blog ⭐️</div>
      </div>
      <button onClick={ subjectModify }>버튼</button>
      <button onClick={ subjectSort }>정렬</button>
      <div className="content-list">
        <ul>
          <li><h4>{ postTit[0] } <span onClick={ ()=>{ likeUp(like + 1) } }>👍🏻</span> { like } </h4> <span>3월 1일 발행</span></li>
          <li><h4>{ postTit[1] }</h4> <span>3월 1일 발행</span></li>
          <li><h4>{ postTit[2] }</h4> <span>3월 1일 발행</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
