const initialState = {
    boards: {
        'first-board' : {
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
        default: return state
    }
}