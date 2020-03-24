import React from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import Table from './table';

class WeekView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            columns: [
                {name: 'Sunday'},
                {name: 'Monday'},
                {name: 'Tuesday'},
                {name: 'Wednesday'},
                {name: 'Thursday'},
                {name: 'Friday'},
                {name: 'Saturday'}
            ],
            rows: [
                {'title': 'Expectation 1', data: [true, true, true, false, false, false, false]},
                {'title': 'Expectation 2', data: [false, true, false, true, false, false, false]}
            ]
        };
    }

    handleChange(row, col) {
        console.log(row, col);
        let rows = this.state.rows.slice();
        rows[row].data[col] = !rows[row].data[col];
        this.setState({rows: rows});
    }

    render() {

        const start = startOfWeek(this.state.date);
        const end = endOfWeek(this.state.date);

        return (
            <div>
                <h1>Week {format(this.state.date, 'w')}</h1>
                <h3>{format(start, 'do LLLL')} - {format(end, 'do LLLL')}</h3>
                <Table columns={this.state.columns} rows={this.state.rows} onChange={(r, c) => this.handleChange(r, c)}/>
            </div>
        )
    }
}

export default WeekView;
