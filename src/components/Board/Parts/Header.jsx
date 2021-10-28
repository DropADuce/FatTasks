import React, {useEffect, useState} from 'react';
import useAction from "../../../state/reducers/useAction";

const Header = ({title, id}) => {
    const [editMode, setEditMode] = useState(false)
    const [headerValue, setHeaderValue] = useState(title)
    const {SetHeader} = useAction()
    useEffect(() => setHeaderValue(() => title), [title])

    return (
        <>
            {editMode ?
                <input
                    value={headerValue}
                    className={'header'}
                    autoFocus
                    onBlur={() => {
                        SetHeader(id, headerValue)
                        setEditMode(false)
                    }}
                    onChange={e => setHeaderValue(e.target.value)}
                />
                :
                <div className={'header'} onClick={() => setEditMode(true)}>
                    {headerValue || 'Заголовок карточки'}
                </div>}
        </>)
}

export default Header;