import React, { useCallback, useContext, useState } from 'react';

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

function Item({ value, onChange }) {
    const { isAdminActive } = useContext(AdminContext);

    const checkmarks = value.data.map((child, key) => 
        (
            <div key={key} className="tableItem">
                <label className="checkbox-container">
                    <input disabled={!isAdminActive} type="checkbox" checked={child} onChange={() => onChange(key)}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    );
    
    const handleEmotionChange = useCallback((key, e) => {
        onChange(key, e.target.value)
    }, []);

    const emotions = value.data.map((child, key) => 
        (
            <div key={key} className="tableItem">
                <select
                    className="btn-emotion"
                    defaultValue={child !== null ? child : '?'}
                    disabled={!value.isEditable && !isAdminActive}
                    onChange={e => handleEmotionChange(key, e)}
                >
                    <option value="?">?</option>
                    <option value="reallyIll">😷</option>
                    <option value="ill">😪</option>
                    <option value="sad">😢</option>
                    <option value="disappointed">😞</option>
                    <option value="ok">😐</option>
                    <option value="happy">🙂</option>
                    <option value="veryHappy">😃</option>
                    <option value="ecstatic">😜</option>
                    <option value="unicorn">🦄</option>
                </select>
            </div>
        )
    );

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
