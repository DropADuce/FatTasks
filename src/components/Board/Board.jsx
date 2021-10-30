import React from 'react';
import styled from "@emotion/styled";
import Header from "./Parts/Header";
import Content from "./Parts/Content";
import CardSubmitter from "./Parts/CardSubmitter";
import {Draggable} from "react-beautiful-dnd";


const BoardWrapper = styled.div`
  width: 300px;
  margin: 10px;
  display: inline-block;
  height: 100%;

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

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 100%;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 7px;
`

const Board = (props) => {
    return (
        <Draggable draggableId={props.id} index={props.index}>
            {provided => (
                <BoardWrapper ref={provided.innerRef} id={props.id} {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                    <FlexWrapper>
                        <Header title={props.title} id={props.id}/>
                        <Content cards={props.cards} boardId={props.id}/>
                        <CardSubmitter boardId={props.id}/>
                    </FlexWrapper>
                </BoardWrapper>
            )}
        </Draggable>
    );
};

export default Board;