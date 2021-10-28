import {CardsActionCreators} from "./cards/CardsActions";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

const allAC = {
    ...CardsActionCreators
}

export default () => {
    const dispatch = useDispatch()
    return bindActionCreators(allAC, dispatch)
}