import React from 'react';

const Home = (props) => {

  const {
    boards,
    setBoards,
    number,
    setNumber
  } = props;

  return (
    <div>
      <h1>홈 : {(number)}</h1>
      <button onClick={()=>setNumber(number+1)}>번호 증가기능</button>
      <button onClick={()=>setBoards([])}>전체삭제</button>
      {boards.map((board)=>(
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;