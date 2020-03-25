import React from 'react';

function Item(props) {
    const perchild = props.value.data.map((child, key) => 
        (
            <div key={key} className="tableItem">
                <label class="checkbox-container">
                    <input type="checkbox" checked={child} onChange={() => props.onChange(key)}/>
                    <span class="checkmark"></span>
                </label>
            </div>
        )
    );

    return (
        <div className="tableRow">
            <div className="tableItem">{props.value.title}</div>
            {perchild}
        </div>
    )
}


function Table(props) {

    const cols = props.columns.map((col, i) => 
        <div className="tableItem" key={i}>{col.name}</div>
    );

    const rows = props.rows.map((row, i) =>
        <Item key={i} value={row} onChange={(k) => props.onChange(i, k)}/>
    );

    return (
        <div className="table">
            <div className="tableRow tableHeader">
                <div className="tableItem">Expectation</div>
                {cols}
            </div>
            {rows}
        </div>
    )
        
}

export default Table;
