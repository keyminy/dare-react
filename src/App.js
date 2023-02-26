import { useState } from 'react';
import './App.css';

function App() {
  /*상황 : 다운로드를 받았고
  users데이터를 상태로 기억하고 싶다 */
  console.log('App 실행됨');
  const [num,setNum] = useState(5);
  let sample = [
    {id:1,name:'홍길동'},
    {id:2,name:'임꺽정'},
    {id:3,name:'장보고'},
    {id:4,name:'강감찬'}
  ];
  //users를 일단 빈배열로 초기화 하였습니다.
  const [users,setUsers] = useState(sample);
  const download = () => {
    //fetch()~then()의 결과object를 ...sample뒤에 넣으면됨
    setUsers([...sample,{id:num,name:'조자룡'}]);
    setNum(num+1);
  }

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
