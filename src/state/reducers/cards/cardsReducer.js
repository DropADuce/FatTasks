import {ADD_BOARD, ADD_CARD, SET_HEADER} from "./CardsActions";
import {v4 as uuid} from "uuid";

const initialState = {
    boards: {
        'first-board': {
            title: 'В работе',
            cards: [
                {
                    id: 'first-card',
                    title: 'Поспать'
                },
                {
                    id: 'first-card1',
                    title: 'Поспать'
                },
                {
                    id: 'first-card2',
                    title: 'Поспать'
                },
                {
                    id: 'first-card3',
                    title: 'Поспать'
                },
                {
                    id: 'first-card4',
                    title: 'Поспать'
                },
                {
                    id: 'first-card5',
                    title: 'Поспать'
                },
                {
                    id: 'first-card6',
                    title: 'Поспать'
                },
                {
                    id: 'first-card7',
                    title: 'Поспать'
                },
                {
                    id: 'first-card8',
                    title: 'Поспать'
                },
                {
                    id: 'first-card9',
                    title: 'Поспать'
                },
                {
                    id: 'first-card10',
                    title: 'Поспать'
                },
                {
                    id: 'first-card11',
                    title: 'Поспать'
                },
                {
                    id: 'first-card12',
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