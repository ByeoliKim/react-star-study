import React, { useState } from "react";
//리액트 패키지 내부에서 useState 라는 함수를 불러온다

function Counter() {
    const [number, setNumber] = useState(0);
    //useState 사용 시, 상태의 기본값을 파라미터로 넣어서 호출한다
    //이 함수를 호출하면 배열이 반환되는데, 여기서 첫 번째 원소는 현재 상태, 두 번째 원소는 Setter 함수입니다


    // 아래는 배열 비구조화 할당을 통해 각 원소를 추출해 준 것!
    const onIncrease = () => {
        //console.log('+1');
        setNumber(number + 1);
    }
    const onDecrease = () => {
        //console.log('-1');
        setNumber(number -1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
export default Counter;

//엘리먼트에 이벤트를 설정해 줄 때에는 on이벤트이름={실행하고싶은함수} 형태로 설정해 준다.
//컴포넌트에서 동적인 값의 상태를(state) 라고 부릅니다.
//리액트에는 useState 라는 함수가 있습니다. 이것을 사용하면 컴포넌트에서 상태를 관리할 수 있습니다.