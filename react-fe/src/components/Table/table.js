import React, { useContext, useEffect, useState } from 'react';

import AdminContext from '../AdminContext/AdminContext';

// const EmotionChooser = ({isActive, handleEmotion}) => {
//     return (
//         <>
//             {isActive ? (
//                 <div class="emotions">
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="reallyIll">😷</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="ill">😪</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="sad">😢</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="disappointed">😞</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="ok">😐</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="happy">🙂</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="veryHappy">😃</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="ecstatic">😜</button>
//                     <button class="btn-emotion" onClick={handleEmotion} data-emo="unicorn">🦄</button>
//                 </div>
//             ) : null}
//         </>
//     )
// }

const EmojiSelect = ({
        emotion,
        isDisabled,
        k,
        onChange,
    }) => {
    const [v, setV] = useState(null);
    
    const handleEmotionChange = (k, e) => {
        setV(e.target.value);
        onChange(k, e.target.value);
    };

    useEffect(() => {
        setV(emotion !== null ? emotion : '?')

        return () => {}
    }, [emotion])

    return (
        <div className="tableItem">
            {/* TODO - replace selects with EmotionChooser */}
            <select
                className="btn-emotion"
                value={v}
                disabled={isDisabled}
                onChange={e => handleEmotionChange(k, e)}
            >
                <option value="?">?</option>
                <option value="unicorn">🦄</option>
                <option value="ecstatic">😜</option>
                <option value="veryHappy">😃</option>
                <option value="happy">🙂</option>
                <option value="ok">😐</option>
                <option value="disappointed">😞</option>
                <option value="sad">😢</option>
                <option value="ill">😪</option>
                <option value="reallyIll">😷</option>
            </select>
        </div>
    )
}

function Item({ value, onChange }) {
    const { isAdminActive } = useContext(AdminContext);

    const checkmarks = value.data.map((checkmark, key) => 
        (
            <div key={key} className="tableItem">
                <label className="checkbox-container">
                    <input disabled={!isAdminActive} type="checkbox" checked={checkmark} onChange={() => onChange(key)}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    );

    const emotions = value.data.map((emotion, key) => (
        <EmojiSelect
            emotion={emotion}
            isDisabled={!value.isEditable && !isAdminActive}
            key={key}
            k={key}
            onChange={(k, v) => onChange(k, v)}
        />
    ));

    return (
        <div className="tableRow">
            <div className="tableItem">{value.title}</div>
            {value.type === 'checkmark' && checkmarks}
            {value.type === 'emotion' && emotions}
        </div>
    )
}


function Table({
    columns,
    rows,
    onChange,
}) {
    const [emotionsActive, setEmotionsActive] = useState(false);

    const columnsMarkup = columns.map((col, i) => 
        <div className="tableItem" key={i}>{col.name}</div>
    );

    const rowsMarkup = rows.map((row, i) =>
        <Item key={i} value={row} onChange={(k, v) => onChange(i, k, v)}/>
    );

    return (
        <>
            {/* <EmotionChooser isActive={true} /> */}
            <div className="table">
                <div className="tableRow tableHeader">
                    <div className="tableItem">Expectation</div>
                    {columnsMarkup}
                </div>
                {rowsMarkup}
            </div>
        </>
    )
        
}

export default Table;
