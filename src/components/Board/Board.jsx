import React, {useState} from 'react';
import styled from "@emotion/styled";
import {Button, IconButton, InputBase, Paper} from "@mui/material";
import {Clear} from "@mui/icons-material";
import Header from "./Board/Parts/Header";

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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`

const Card = styled.div`
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
  cursor: grab;

  ${props => props.isAdd && `
  background-color: rgba(0,0,0,.1);
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,.3); 
    color: lightslategray; 
  }
  `}
`
const StyledArea = styled(InputBase)`
  padding: 8px;
  margin: 8px 8px 8px 0;
  background: #fff;
`

const StyledPaper = styled(Paper)`
  margin: 12px 8px;
`

const StyledButton = styled(Button)`
  background: green;
  color: #fff;

  :hover {
    background: #5AAc44;
  }
`

const AddItemsButtons = styled.div`
  margin: 8px;
`

const Board = () => {
    return (
        <BoardContext>
            <BoardWrapper>
                <Header/>
                <ContentWrapper>
                    <Card>
                        Тут задача из карточки
                    </Card>
                    <Card>
                        Тут задача из карточки
                    </Card>
                    <Card>
                        Тут задача из карточки
                    </Card>
                    <Card>
                        Тут задача из карточки
                    </Card>
                    <div>
                        <Card isAdd> + Добавить карточку </Card>
                        <StyledPaper>
                            <StyledArea multiline fullWidth placeholder={'Введите текст новой карточки'}/>
                        </StyledPaper>
                        <AddItemsButtons>
                            <StyledButton>Добавить</StyledButton>
                            <IconButton>
                                <Clear/>
                            </IconButton>
                        </AddItemsButtons>
                    </div>
                </ContentWrapper>
            </BoardWrapper>
        </BoardContext>
    );
};

export default Board;