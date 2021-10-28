import React, {useState} from 'react';
import Card from "../../Card/Card";
import {Button, Collapse, IconButton, InputBase, Paper} from "@mui/material";
import {Add, Clear} from "@mui/icons-material";
import styled from "@emotion/styled";
import {CardsActionCreators} from "../../../state/reducers/cards/CardsActions";
import useAction from "../../../state/reducers/useAction";

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

const CardSubmitter = ({type, boardId}) => {
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const {AddBoard, AddCard} = useAction()

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
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </StyledPaper>
                <AddItemsButtons>
                    <StyledButton
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => {
                            type === 'board' ? AddBoard(inputValue) : AddCard(boardId, inputValue)
                            setOpen(false)
                            setInputValue('')
                        }}>
                        Добавить
                    </StyledButton>
                    <IconButton
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => {
                            setInputValue('')
                            setOpen(false)
                        }}>
                        <Clear/>
                    </IconButton>
                </AddItemsButtons>
            </Collapse>
        </div>
    );
};

export default CardSubmitter;