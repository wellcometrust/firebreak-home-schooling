import React, { useState } from 'react';
import Table from '../Table/table';
import { format, add, sub } from 'date-fns';

const STUDENTS = [
    {name: 'Nathaniel'},
    {name: 'Sam'},
    {name: 'Katy'},
];

const ROWS = [
    {'title': 'Expectation 1', data: [true, false, false]},
    {'title': 'Expectation 2', data: [false, false, true]}
];

function DayView (props) {
    const [day, setDay] = useState(new Date());
    const [columns, setColumns] = useState(STUDENTS);
    const [rows, setRows] = useState(ROWS);

    const handleChange = (row, col) => {
        console.log(row, col);
        let newrow = rows.slice();
        newrow[row].data[col] = !rows[row].data[col];
        setRows(newrow);
    }

    return (
        <div>
            <h1>{format(day, 'EEEE do LLLL')}</h1>
            <Table columns={columns} rows={rows} onChange={(r, c) => handleChange(r, c)}/>
            <button onClick={() => setDay(sub(day, {days: 1}))}>Previous</button>
            <button onClick={() => setDay(add(day, {days: 1}))}>Next</button>
        </div>
    )
}

export default DayView;
