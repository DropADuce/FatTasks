import React from 'react';
import styled from "@emotion/styled";
import Card from "../../Card/Card";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  height: 100%;
`

const Content = ({cards, boardId}) => {
    return (
        <ContentWrapper>
            {cards.map(card => <Card key={card.id} title={card.title}/>)}
        </ContentWrapper>
    );
};

export default Content;