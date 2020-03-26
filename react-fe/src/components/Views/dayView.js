import React, { useState } from 'react';
import Table from '../Table/table';
import { format, add, sub } from 'date-fns';

const STUDENTS = [
    {name: 'Nathaniel'},
    {name: 'Charlie'},
    {name: 'Tessa'},
];

const ROWS = [
    {'title': 'Love our family', data: [true, true, true], type: 'checkmark'},
    {'title': 'Listen to and respect each other', data: [false, false, true], type: 'checkmark'},
    {'title': 'Persevere and try hard', data: [false, false, true], type: 'checkmark'},
    {'title': 'Do as we are told first time', data: [false, true, true], type: 'checkmark'},
    {'title': 'How am I feeling?', data: [false, true, true], type: 'checkmark'},
    {'title': 'Use positive words and actions', data: [false, true, true], type: 'checkmark'},
    {'title': 'How are you feeling?', data: [null, 'ok', null], isEditable: true, type: 'emotion'},
    {'title': 'How is your parent/carer feeling?', data: [null, 'sad', null], type: 'emotion'}
];

function DayView (props) {
    const [day, setDay] = useState(new Date());
    const [columns, setColumns] = useState(STUDENTS);
    const [rows, setRows] = useState(ROWS);

    const handleChange = (row, col, val) => {
        console.log(row, col, val);
        let newrow = rows.slice();

        if (val) {
            // if optional value is supplied replace the old value
            newrow[row].data[col] = val;
        } else {
            // otherwise assume a boolean is toggling
            newrow[row].data[col] = !rows[row].data[col];
        }
        setRows(newrow);
    }

    return (
        <div className="container">
            <h1>{format(day, 'EEEE do LLLL')}</h1>
            <Table columns={columns} rows={rows} onChange={(r, c, v) => handleChange(r, c, v)}/>
            <br></br>
            <button onClick={() => setDay(sub(day, {days: 1}))}>&laquo; Previous</button>
            <button onClick={() => setDay(add(day, {days: 1}))}>Next &raquo;</button>
        </div>
    )
}

export default DayView;
