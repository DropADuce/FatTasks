import React from 'react';
import BoardsLayout from "./components/BoardsLayout";
import CardSubmitter from "./components/Board/Parts/CardSubmitter";
import {useSelector} from "react-redux";
import Board from "./components/Board/Board";

const App = () => {
    const {boardsIds, boards} = useSelector(state => state.cards)
    return (
        <BoardsLayout>
            {boardsIds.map(board => <Board key={board} {...boards[board]}/>)}
            <CardSubmitter type={'board'}/>
        </BoardsLayout>
    );
};

export default App;