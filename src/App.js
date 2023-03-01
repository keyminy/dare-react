import './App.css';
import {createRef, useRef, useState} from 'react'

function App() {
  const myRef = useRef(null);
  
  const [list,setList] = useState([
    {id:1,name:"홍길동"},{id:2,name:"임꺽정"}
  ]);
  //동적으로 Refrence생성
  const myRefs = Array.from({length:list.length}).map(()=>createRef());

  return (
    <div>
      <button onClick={()=>{
        console.log(myRef);
        myRef.current.style.backgroundColor = 'red';
        //꺽정혹은 길동이 변경해보기
        myRefs[0].current.style.backgroundColor = 'red';
      }}>색 변경</button>
      <div ref={myRef}>박스</div>
      {list.map((user,index)=>(
        //ref를동적으로 생성함
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
