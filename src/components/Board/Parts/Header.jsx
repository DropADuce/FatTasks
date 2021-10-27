import React, {useState} from 'react';

const Header = ({title}) => {

    const [editMode, setEditMode] = useState(false)
    const [headerValue, setHeaderValue] = useState(title)

    return (
        <>
            {editMode ?
                <input
                    className={'header'}
                    autoFocus
                    onBlur={() => setEditMode(false)}
                    onChange={e => setHeaderValue(e.target.value)}
                />
                :
                <div className={'header'} onClick={() => setEditMode(true)}>
                    {headerValue || 'Заголовок карточки'}
                </div>}
        </>)
}

export default Header;