import React from 'react';
import styled from "@emotion/styled";
import {Draggable} from "react-beautiful-dnd";

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

export const AddItemCard = ({title, setOpen}) => {
    return <StyledCard isAdd={true} onClick={() => setOpen(true)}>
        {title}
    </StyledCard>
}

const Card = ({title, id, index}) => {
    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <div>
                    <StyledCard isAdd={false}
                                ref={provided.innerRef} {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                        {title}
                    </StyledCard>
                </div>
            )}
        </Draggable>
    );
};

export default Card;