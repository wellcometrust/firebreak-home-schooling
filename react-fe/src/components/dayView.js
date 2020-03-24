import React from 'react';
import Table from './table';
import { format, add, sub } from 'date-fns';

class DayView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            day: new Date()
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


    render() {

        return (
            <div>
                <h1>{format(this.state.day, 'EEEE do LLLL')}</h1>
                <Table />
                <button onClick={() => this.previous_day()}>Previous</button>
                <button onClick={() => this.next_day()}>Next</button>
            </div>
        )


    }

}

export default DayView;
