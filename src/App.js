import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper'

//컴포넌트는 일종의 UI 조각입니다
//그리고 쉽게 재사용할 수 있습니다

function App() {
  const name = 'react'
  const custom = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, //기본 단위 px
    padding: '1rem' //다른 단위 사용 시 문자열로 설정
  }
  return (
    <Wrapper>
      {/* 주석은 화면에 보이지 않습니다!*/}
      <Hello name="byeolikim" color="pink" isSpecial={true}
        //열리는 태그 내부에서는 이렇게 주석을 작성할 수 있습니다!
      />
      <Hello color="pink" />
    </Wrapper>
  );
}

//Fragment 정의 : 단순히 감싸기 용으로 태그를 이용해야 할 때 사용하면 된다
//형태는 <></>

//JSX 문법에서는 background-color 가 아닌 backgroundColor 형태로 네이밍 해 줘야 합니다
//JSX 문법에서는 주석을 {/* 이런 형태로 */} 작성합니다

//props 는 properties 의 줄임말
//우리가 어떠한 값을 컴포넌트에게 전달해 줘야 할 때, props 를 사용한다
//name 값을 조회하고 싶다면 props.name 을 조회하면 된다

//조건부 렌더링이란, 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미합니다.


export default App;
