import React from 'react';
import styled from "@emotion/styled";
import Card from "../../Card/Card";
import {Droppable} from "react-beautiful-dnd";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  max-height: 100%;
  min-height: 50px;
`

const Content = ({cards, boardId}) => {
    return (
        <Droppable droppableId={boardId}>
            {provided => (
                <ContentWrapper ref={provided.innerRef} {...provided.droppableProps}>
                    {cards.map((card, index) => <Card key={card.id} title={card.title} id={card.id}
                                                      index={index}/>)}
                </ContentWrapper>
            )}
        </Droppable>
    );
};

export default Content;