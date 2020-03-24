import React from 'react';
import Table from '../Table/table';
import { format, add, sub } from 'date-fns';

class DayView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            day: new Date(),
            columns: [
                {name: 'Nathaniel'},
                {name: 'Sam'},
                {name: 'Katy'},
            ],
            rows: [
                {'title': 'Expectation 1', data: [true, false, false]},
                {'title': 'Expectation 2', data: [false, false, true]}
            ]
        }
    }

    previous_day() {
        const day = sub(this.state.day, {days: 1});
        this.setState({day: day});
    }

    next_day() {
        const day = add(this.state.day, {days: 1});
        this.setState({day: day});
    }

    handleChange(row, col) {
        console.log(row, col);
        let rows = this.state.rows.slice();
        rows[row].data[col] = !rows[row].data[col];
        this.setState({rows: rows});
    }


    render() {

        return (
            <div>
                <h1>{format(this.state.day, 'EEEE do LLLL')}</h1>
                <Table columns={this.state.columns} rows={this.state.rows} onChange={(r, c) => this.handleChange(r, c)}/>
                <button onClick={() => this.previous_day()}>Previous</button>
                <button onClick={() => this.next_day()}>Next</button>
            </div>
        )


    }

}

export default DayView;
