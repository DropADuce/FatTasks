import {ADD_BOARD, ADD_CARD, SET_HEADER} from "./CardsActions";
import uuid from "uuid";

const initialState = {
    boards: {
        'first-board': {
            title: 'В работе',
            cards: [
                {
                    id: 'first-card',
                    title: 'Поспать'
                }
            ]
        }
    },
    boardsIds: ['first-board']
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD: {
            const newId = uuid()
            return {
                ...state, boards: {
                    ...state.boards
                    , [newId]: {title: action.payload || 'Новая карточка', cards: []}
                }
                , boardsIds: [...state.boardsIds, newId]
            }
        }
        case ADD_CARD: {
            const newid = uuid()
            const {boardId, title} = action.payload
            const cards = [...state.boards[boardId].cards, {id: newid, title}]
            return {...state, boards: {...state.boards, [boardId]: {...state.boards[boardId], cards}}}
        }
        case SET_HEADER: {
            const {boardId, header} = action.payload
            const currentBoard = {...state.boards[boardId]}
            currentBoard.title = header
            return {...state, boards: {...state.boards, [boardId]: currentBoard}}
        }
        default:
            return state
    }
}