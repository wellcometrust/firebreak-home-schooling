import React, { useState } from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import Table from '../Table/table';

const DATA = {
    'Nathaniel' : [
        {'title': 'Love our family', data: [true, true, true, false, false, false, false]},
        {'title': 'Listen to and respect each other', data: [false, true, true, true, false, false, false]},
        {'title': 'Persevere and try hard', data: [true, true, false, true, false, false, false]},
        {'title': 'Do as we are told first time', data: [false, false, false, false, false, false, false]},
        {'title': 'Use positive words and actions', data: [false, true, false, true, false, false, false]}
    ],
    'Sam' : [
        {'title': 'Love our family', data: [true, true, true, true, false, false, false]},
        {'title': 'Listen to and respect each other', data: [false, true, false, true, false, false, false]},
        {'title': 'Persevere and try hard', data: [false, false, false, true, false, false, false]},
        {'title': 'Do as we are told first time', data: [false, true, false, true, false, false, false]},
        {'title': 'Use positive words and actions', data: [true, false, false, true, false, false, false]}
    ],
    'Katy': [
        {'title': 'Love our family', data: [true, true, true, false, false, false, false]},
        {'title': 'Listen to and respect each other', data: [true, true, false, true, false, false, false]},
        {'title': 'Persevere and try hard', data: [true, true, true, true, false, false, false]},
        {'title': 'Do as we are told first time', data: [true, true, true, true, false, false, false]},
        {'title': 'Use positive words and actions', data: [true, true, true, true, false, false, false]}
    ]

}

const COLUMNS = [
    {name: 'Sunday'},
    {name: 'Monday'},
    {name: 'Tuesday'},
    {name: 'Wednesday'},
    {name: 'Thursday'},
    {name: 'Friday'},
    {name: 'Saturday'}
];

function WeekView (props) {
    const [date, setDate] = useState(new Date());
    const [rows, setRows] = useState(DATA['Nathaniel']);
    const [students, setStudents] = useState([
        'Nathaniel',
        'Sam',
        'Katy'
    ]);

    const handleChange = (row, col) => {
        console.log(row, col);
        let newrow = rows.slice();
        newrow[row].data[col] = !rows[row].data[col];
        setRows(newrow);
    }

    const start = startOfWeek(date);
    const end = endOfWeek(date);

    const buttons = students.map((name, i) => 
        <button key={i} onClick={() => setRows(DATA[name])}>{name}</button>
    );

    return (
        <div>
            <h1>Week {format(date, 'w')}</h1>
            <h3>{format(start, 'do LLLL')} - {format(end, 'do LLLL')}</h3>
            <Table columns={COLUMNS} rows={rows} onChange={(r, c) => handleChange(r, c)}/>
            {buttons}
        </div>
    )


}

export default WeekView;
