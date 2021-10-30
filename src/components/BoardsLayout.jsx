import React from 'react';
import styled from "styled-components";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";
import Board from "./Board/Board";
import CardSubmitter from "./Board/Parts/CardSubmitter";

const Boards = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(127deg, #256DD9 3%, #FFEDC9 94%);
`

const BoardsContext = styled.div`
  position: absolute;
  margin: 24px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
`

const BoardsLayout = () => {

    const {boardsIds, boards} = useSelector(state => state.cards)

    return (
        <DragDropContext>
            <Droppable droppableId={'droppable-zone'} type={'list'} direction={'horizontal'}>
                {provided => (
                    <Boards ref={provided.innerRef} {...provided.droppableProps}>
                        <BoardsContext>
                            {boardsIds.map((board, index) => <Board key={board}
                                                                    id={board}
                                                                    index={index}
                                                                    {...boards[board]}/>)}
                            <CardSubmitter type={'board'}/>
                        </BoardsContext>
                    </Boards>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default BoardsLayout;