import React from 'react';
import Board from "./components/Board";
import BoardsLayout from "./components/BoardsLayout";

const App = () => {
    return (
        <BoardsLayout>
            <Board />
            <Board />
            <Board />
        </BoardsLayout>
    );
};

export default App;