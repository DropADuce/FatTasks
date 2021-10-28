import React from 'react';
import styled from "@emotion/styled";
import Header from "./Parts/Header";
import Content from "./Parts/Content";
import CardSubmitter from "./Parts/CardSubmitter";

const BoardContext = styled.div`
  height: 100%;
`

const BoardWrapper = styled.div`
  width: 300px;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 7px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & .header {
    padding: 8px;
    font-size: 1.3rem;
    font-weight: bolder;
    color: black;
    background-color: rgba(0, 0, 0, .0);
    outline: none;
    border: none;
    border-radius: 7px;

    :hover {
      cursor: text;
      color: lightslategray;
    }
  }
`

const Board = (props) => {
    return (
        <BoardContext>
            <BoardWrapper>
                <Header title={props.title} id={props.id}/>
                <Content cards={props.cards} boardId={props.id}/>
                <CardSubmitter boardId={props.id}/>
            </BoardWrapper>
        </BoardContext>
    );
};

export default Board;