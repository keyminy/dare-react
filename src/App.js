import './App.css';
import { useState } from 'react';
import Sub from './Sub';

function App() {
  //let number = 1; //react에서 관리하는 상태값이 아님
  
  /*useState사용 */
  //변수는 number로 만들어지고 값은 1대입됨
  //이 변수의 값 변경은 setNumber를 이용해야한다.
  const [number,setNumber] = useState(1);

  const add = () => {
   // setNumber(number++); //number++은 불가하다, 다시 number = number+1연산이므로
    setNumber(number+1);
    console.log('add', number);
  };

  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub/>
    </div>
  );
}

export default App;
