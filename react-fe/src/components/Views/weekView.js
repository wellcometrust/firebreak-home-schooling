import React, { useState } from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import Table from '../Table/table';

const DATA = {
    'Nathaniel' : [
        {'title': 'Love our family', data: [true, true, true, false, false, false, false], type: 'checkmark'},
        {'title': 'Listen to and respect each other', data: [false, true, true, true, false, false, false], type: 'checkmark'},
        {'title': 'Persevere and try hard', data: [true, true, false, true, false, false, false], type: 'checkmark'},
        {'title': 'Do as we are told first time', data: [false, false, false, false, false, false, false], type: 'checkmark'},
        {'title': 'Use positive words and actions', data: [false, true, false, true, false, false, false], type: 'checkmark'},
        {'title': 'How are you feeling?', data: ['happy', 'ok', 'veryHappy', 'happy', 'ok', 'veryHappy', 'ill'], isEditable: true, type: 'emotion'},
        {'title': 'How is your parent/carer feeling?', data: ['happy', 'happy', 'ecstatic', 'happy', 'ok', 'veryHappy', 'sad'], type: 'emotion'}
    ],
    'Charlie' : [
        {'title': 'Love our family', data: [true, true, true, true, false, false, false], type: 'checkmark'},
        {'title': 'Listen to and respect each other', data: [false, true, false, true, false, false, false], type: 'checkmark'},
        {'title': 'Persevere and try hard', data: [false, false, false, true, false, false, false], type: 'checkmark'},
        {'title': 'Do as we are told first time', data: [false, true, false, true, false, false, false], type: 'checkmark'},
        {'title': 'Use positive words and actions', data: [true, false, false, true, false, false, false], type: 'checkmark'},
        {'title': 'How are you feeling?', data: [null, 'sad', null, null, null, null, null], isEditable: true, type: 'emotion'},
        {'title': 'How is your parent/carer feeling?', data: [null, 'sad', null, null, null, null, null], type: 'emotion'}
    ],
    'Tessa': [
        {'title': 'Love our family', data: [true, true, true, false, false, false, false], type: 'checkmark'},
        {'title': 'Listen to and respect each other', data: [true, true, false, true, false, false, false], type: 'checkmark'},
        {'title': 'Persevere and try hard', data: [true, true, true, true, false, false, false], type: 'checkmark'},
        {'title': 'Do as we are told first time', data: [true, true, true, true, false, false, false], type: 'checkmark'},
        {'title': 'Use positive words and actions', data: [true, true, true, true, false, false, false], type: 'checkmark'},
        {'title': 'How are you feeling?', data: [null, 'sad', null, null, null, null, null], isEditable: true, type: 'emotion'},
        {'title': 'How is your parent/carer feeling?', data: [null, 'sad', null, null, null, null, null], type: 'emotion'}
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
        'Charlie',
        'Tessa'
    ]);
    const [tab, setTab] = useState(0);

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

    const changeTab = (i) => {
        setRows(DATA[students[i]]);
        setTab(i);
    }

    const start = startOfWeek(date);
    const end = endOfWeek(date);

    const buttons = students.map((name, i) => {
        let classname = 'tab';
        if (i === tab) {
            classname += ' active';
        }
        return <div className={classname} key={i}><a className="tab-link" onClick={() => changeTab(i)}>{name}</a></div>
        }
    );

    return (
        <div className="container">
            <h1>{format(start, 'do LLLL')} - {format(end, 'do LLLL')}</h1>
            <div className="tabs">
                {buttons}
            </div>
            <div className="tab-content">
                <Table columns={COLUMNS} rows={rows} onChange={(r, c, v) => handleChange(r, c, v)}/>
            </div>
        </div>
    )


}

export default WeekView;
