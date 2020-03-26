import React, { useState } from 'react';
import Table from '../Table/table';
import { format, add, sub } from 'date-fns';

const STUDENTS = [
    {name: 'Nathaniel'},
    {name: 'Sam'},
    {name: 'Katy'},
];

const ROWS = [
    {'title': 'Love our family', data: [true, true, true]},
    {'title': 'Listen to and respect each other', data: [false, false, true]},
    {'title': 'Persevere and try hard', data: [false, false, true]},
    {'title': 'Do as we are told first time', data: [false, true, true]},
    {'title': 'Use positive words and actions', data: [false, true, true]}
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
        <div className="container">
            <h1>{format(day, 'EEEE do LLLL')}</h1>
            <Table columns={columns} rows={rows} onChange={(r, c) => handleChange(r, c)}/>
            <br></br>
            <button onClick={() => setDay(sub(day, {days: 1}))}>&laquo; Previous</button>
            <button onClick={() => setDay(add(day, {days: 1}))}>Next &raquo;</button>
        </div>
    )
}

export default DayView;
