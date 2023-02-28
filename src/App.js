import './App.css';
import {useEffect, useState} from 'react';


function App() {
  const [data,setData] = useState(0);
  const [search,setSearch] = useState(0);

  const download = () => {
    //다운로드 받고(서버와 통신)
    let downloadData = 5; //가정
    setData(downloadData);
  }

  useEffect(()=>{
    console.log('useEffect실행됨');
    download();
  },[search]);

  return (
    <div>
      <button onClick={()=>{setSearch(2)}}>검색하기</button>
      <h1>데이터 : {data}</h1>
      <button onClick={()=>{setData(data+1)}}>더하기</button>
    </div>
  );
}

export default App;
