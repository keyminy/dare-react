import React from 'react';
import styled from 'styled-components';


/* 스타일 : Home함수의 밖으로 뺐다 */
const StyledDeleteButton = styled.button`
  color:${(props) => (props.user.username === 'ssar' ? "blue" : "red")}
`;

/*새로운 버튼 추가(스타일 확장) */
const StyledAddButton = styled(StyledDeleteButton)`
// color:${(props) => (props.user.username === 'ssar' ? "blue" : "red")}
  background-color: green;
`;
  
const Home = (props) => {

  const {
    boards,
    setBoards,
    user
  } = props;

  return (
    <div>
      <StyledAddButton
        user={user}
      >
        더하기
      </StyledAddButton>
      <StyledDeleteButton
        user={user}
        onClick={()=>setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board)=>(
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;