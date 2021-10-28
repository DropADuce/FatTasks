export const ADD_BOARD = 'ADD_BOARD'
export const ADD_CARD = 'ADD_CARD'
export const SET_HEADER = 'SET_HEADER'

export const CardsActionCreators = {
    AddBoard: boardTitle => ({type: ADD_BOARD, payload: boardTitle}),
    AddCard: (boardId, title) => ({type: ADD_CARD, payload: {boardId, title}}),
    SetHeader: (boardId, header) => ({type: SET_HEADER, payload: {boardId, header}})
}