import React from 'react';
import styled from "styled-components";

const Boards = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(127deg, #256DD9 3%, #FFEDC9 94%);
`

const BoardsContext = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
`

const BoardsLayout = ({children}) => {
    return (
        <Boards>
            <BoardsContext>
                {children}
            </BoardsContext>
        </Boards>
    );
};

export default BoardsLayout;