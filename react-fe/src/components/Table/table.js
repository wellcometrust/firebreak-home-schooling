import React, { useContext } from 'react';
import AdminContext from '../AdminContext/AdminContext';

import './table.css';

function Item(props) {
    const { isAdminActive } = useContext(AdminContext);

    const perchild = props.value.data.map((child, key) => 
        (
            <div key={key} className="tableItem">
                <input disabled={!isAdminActive} type="checkbox" checked={child} onChange={() => props.onChange(key)}/>
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
            <div className="tableHeader">
                <div className="tableRow">
                    <div className="tableItem">Expectation</div>
                    {cols}
                </div>
            </div>
            <div className="tableBody">
                {rows}
            </div>
        </div>
    )
        
}

export default Table;
