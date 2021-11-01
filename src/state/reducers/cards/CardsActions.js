export const ADD_BOARD = 'ADD_BOARD'
export const ADD_CARD = 'ADD_CARD'
export const SET_HEADER = 'SET_HEADER'
export const MOVE_BOARD = 'MOVE_BOARD'
export const MOVE_CARDS = 'MOVE_CARDS'

export const CardsActionCreators = {
    AddBoard: boardTitle => ({type: ADD_BOARD, payload: boardTitle}),
    AddCard: (boardId, title) => ({type: ADD_CARD, payload: {boardId, title}}),
    SetHeader: (boardId, header) => ({type: SET_HEADER, payload: {boardId, header}}),
    MoveBoard: (source, destination, draggableId) => ({type: MOVE_BOARD, payload: {source, destination, draggableId}}),
    MoveCards: (source, destination, draggableId) => ({type: MOVE_CARDS, payload: {source, destination, draggableId}})
}