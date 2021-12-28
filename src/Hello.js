import React from 'react';

function Hello ({ color, name }) {
    return <div style={{ color }}>안녕하세요!!! {name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}
//defaultProps : 컴포넌트 props를 지정하지 않았을 때 기본값으로 노출될 값을 설정할 수 있다

//리액트 컴포넌트에서는 xml 형식의 값을 반환해 줄 수 있는데, 이를 JSX 라고 부릅니다


export default Hello;
//이 코드는 Hello 라는 컴포넌트를 내보내겠다는 의미입니다
//이렇게 export 해 주면 다른 컴포넌트에서 불러와서 사용할 수 있습니다

//리액트 컴포넌트 파일에서 xml 형태로 코드를 작성하면 babel 이 JSX를 JavaScript 로 변환해 준다

// *Babel 정의*
// 바벨은 자바스크립트의 문법을 확장해 주는 도구입니다
// 아직 지원되지 않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법들을 정식 자바스크립트 형태로 변환해줌으로써 구형 브라우저 같은 환경에서도 제대로 실행될 수 있게 도와주는 역할을 합니다

//JSX 사용 시에도 JavaScript가 제대로 변환이 되려면 몇 가지 규칙을 지켜줘야 한다
// 1. 태그는 꼭 닫혀 있어야 한다
// 2. Self Clogsiong 
// 3. 두 개 이상의 태그는 무조건 하나의 태그로 감싸져 있어야 한다!

//컴포넌트에게 전달되는 props 는 파라미터를 통하여 조회할 수 있다
//props는 객체 형태로 전달되며, 만약 name 값을 조회하고 싶다면 props.name 을 조회하면 된다

//함수의 파라미터에서 비구조화 할당 문법을 사용하면 조금 더 코드를 간결하게 작성할 수 있다