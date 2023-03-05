import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../home/Home';

const HomePage = () => {
  //http요청(fetch)
  const [boards,setBoards] = useState([]);
  const [user,setUser] = useState({});

  useEffect(()=>{
    /*다운로드 가정(네트워크 통신 시 Blocking발생하지만..)
    */
    let data = [
      {id:1,title:"제목1",content:"내용1"},
      {id:2,title:"제목2",content:"내용2"},
      {id:3,title:"제목3",content:"내용3"}
    ];
    //다운로드 http요청이 아직 안되어 data에 빈 데이터가 들어감
    setBoards([...data]);
    setUser({id:1,username:'cos'});
  },[]);
  return (
    <div>
      <Header/>
      <Home 
        boards={boards} 
        setBoards = {setBoards}
        user={user}
      />
      <Footer/>
    </div>
  );
};

export default HomePage;