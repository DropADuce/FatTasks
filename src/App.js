import React from 'react';
import BoardsLayout from "./components/BoardsLayout";
import CardSubmitter from "./components/Board/Parts/CardSubmitter";
import {useSelector} from "react-redux";
import Board from "./components/Board/Board";
import {DragDropContext} from "react-beautiful-dnd";

const App = () => {
    return (
        <BoardsLayout />
    );
};

export default App;