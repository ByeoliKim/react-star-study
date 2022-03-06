/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

//리액트(자바스크립트 프레임워크)는 JSX 문법을 사용하면 데이터 바인딩을 통한 랜더링이 쉽다

function App() {
  //dd이ㄹ일요일은 쉬어야 합니다.

  //var [a,b] = [10, 100];  //10은 a 변수에, 100은 b 변수에 담기
  //새로고침 없이 스무스하게 랜더링하기 위해 state를 사용해야 한다
  //자주 바뀌고, 중요한 데이터들을 변수 말고 state에 저장해서 사용하자
  let [postTit,postMdf] = useState(['ㄴ로스트 아크 데모닉 각인 세팅🐇','ㄱ로스트 아크 데모닉 각인 세팅🐇🐇', 'ㄷ로스트 아크 데모닉 각인 세팅🐇🐇🐇']); //[a,b]
  let postTitle = "로스트 아크 데모닉 각인 세팅"
  let [like, likeUp] = useState(0); //[state, state 변경함수] 
  let [modal, modalOpen] = useState(false);
  let [modal2, modalOpen2] = useState(false);
  var arrayTest = [2,3,4];
  //배열 내의 모든 데이터에 똑같은 작업을 시켜주고 싶으면 map()
  var arrayTest2 = arrayTest.map(function(a){
    //파라미터a는 arrayTest에 있는 각각의 데이터들을 의미한다.
    //각각의 데이터들을 a로 호출하여 사용하는 거다.
    return a*2
    //map()은 유사 반복문이다

  });

  function doubleUI() {
    var array = [];
    for (var i =0; i < 3; i++ ){
      array.push(<div>안넝</div>);
    }
    return array
  }

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
      {/* <div className="content-list">
        <ul>
          <li><h4>{ postTit[0] } <span onClick={ ()=>{ likeUp(like + 1) } }>👍🏻</span> { like } </h4> <span>3월 1일 발행</span></li>
          <li><h4>{ postTit[1] }</h4> <span>3월 1일 발행</span></li>
          <li><h4 onClick={ ()=>{modalOpen(true)} }>{ postTit[2] }</h4> <span>3월 1일 발행</span></li>
        </ul>
      </div> */}
      <div className="content-list">
        <ul>
      {
        postTit.map(function(list){
          return (
          <li><h4>{ list }</h4> <span>3월 1일 발행</span></li>
          )
        })
        //{ 반복할데이터.map(()=>{ return <html> }) }
      }
        </ul>
      </div>

      

      <button onClick={ ()=>{ modalOpen2(!modal2) } }>모달2 오픈</button>
      
      { doubleUI() }

      

      {
        //jsx 문법에서는 중괄호 안에서 
        modal === true ? <Modal></Modal> : null
        //null = 텅빈 html
      }

      {
        modal2 === true ? <Modal2></Modal2> : null
      }

    </div>
  );
}

//컴포넌트 이름은 대문자로 만든다
//return() 안에 있는 건 태그 하나로 묶는다
function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

function Modal2(){
  return (
    <div className='modal'>
        <h2>제목2</h2>
        <p>날짜2</p>
        <p>상세내용2</p>
    </div>
  )
}

export default App;
