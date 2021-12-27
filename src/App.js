import Hello from './Hello';

//컴포넌트는 일종의 UI 조각입니다
//그리고 쉽게 재사용할 수 있습니다

function App() {
  return (
    <div>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
    
  );
}

export default App;
