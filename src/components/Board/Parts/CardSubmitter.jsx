import React, {useState} from 'react';
import Card from "../../Card/Card";
import {Button, Collapse, IconButton, InputBase, Paper} from "@mui/material";
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

const CardSubmitter = ({type}) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Collapse in={!open}>
                <Card isAdd title={type === 'board' ? '+ Добавить доску' : '+ Добавить карточку'} setOpen={setOpen}/>
            </Collapse>
            <Collapse in={open}>
                <StyledPaper>
                    <StyledArea
                        multiline
                        fullWidth
                        autofocus
                        placeholder={'Введите текст новой карточки'}
                        onBlur={() => {
                            setOpen(false)
                        }}
                    />
                </StyledPaper>
                <AddItemsButtons>
                    <StyledButton onClick={() => setOpen(false)}>
                        Добавить
                    </StyledButton>
                    <IconButton onClick={() => setOpen(false)}>
                        <Clear/>
                    </IconButton>
                </AddItemsButtons>
            </Collapse>
        </div>
    );
};

export default CardSubmitter;