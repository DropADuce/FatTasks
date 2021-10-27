import React from 'react';
import styled from "@emotion/styled";

const StyledCard = styled.div`
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
  cursor: grab;
  width: 260px;

  ${props => props.isAdd && `
  background-color: rgba(0,0,0,.1);
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,.3); 
    color: lightslategray; 
  }
  `}
`

const Card = ({setOpen, title, isAdd}) => {
    return (
        <StyledCard isAdd={isAdd} onClick={() => isAdd && setOpen(true)}>
            {title}
        </StyledCard>
    );
};

export default Card;