import React from "react";

function Wrapper ({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            { children }
        </div>
    )
}
//내부의 내용을 보여지게 하기 위해서는 Wrapper 에서 props.children 을 렌더링 해 줘야 합니다.

//쓰이는 곳 (App.js) 에서 값을 정한다 = props (부모)
//쓰임 당하는 곳 (Hello.js 나 Wrapper.js) 에서 값을 정한다 = children

export default Wrapper