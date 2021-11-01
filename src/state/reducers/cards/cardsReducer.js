import {ADD_BOARD, ADD_CARD, MOVE_BOARD, MOVE_CARDS, SET_HEADER} from "./CardsActions";
import {v4 as uuid} from "uuid";

const initialState = {
    boards: {
    },
    boardsIds: []
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
        case MOVE_BOARD: {
            const newIds = [...state.boardsIds]
            newIds.splice(action.payload.source.index, 1)
            newIds.splice(action.payload.destination.index, 0, action.payload.draggableId)
            return {...state, boardsIds: newIds}
        }
        case MOVE_CARDS: {
            if (!action.payload.destination) return {...state}
            const sourceList = {...state.boards[action.payload.source.droppableId]}
            const destList = {...state.boards[action.payload.destination.droppableId]}
            // нашли доски, теперь найдем карточку, которую перемещали
            const sourceCard = {...(sourceList.cards.filter(card => card.id === action.payload.draggableId)[0])}
            // После того как нашли карточку - удалим ее из списка источника
            sourceList.cards.splice(action.payload.source.index, 1)
            // И добавим ее в список приемник, после карточки, на которую делали перемещение
            destList.cards.splice(action.payload.destination.index, 0, sourceCard)

            return {...state, boards: {...state.boards, [sourceList.id]: sourceList, [destList.id]: destList}}
        }
        default:
            return state
    }
}