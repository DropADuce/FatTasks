import React from 'react';
import Card from "./Card";
import {Button, IconButton, InputBase, Paper} from "@mui/material";
import {Clear} from "@mui/icons-material";
import styled from "@emotion/styled";

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

const CardSubmitter = () => {
    return (
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
    );
};

export default CardSubmitter;