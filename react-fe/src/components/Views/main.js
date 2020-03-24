import React, { useState } from 'react';
import DayView from './dayView';
import WeekView from './weekView';

function MainView(props) {
    const [view_day, setView] = useState(true);

    const set_view = () => {
        if (view_day) {
            return <DayView />
        } else {
            return <WeekView />
        }
    }

    return (
        <div>
            <button onClick={() => setView(!view_day)}>Change View</button>
            <header className="App-header">
                {set_view()}
            </header>
        </div>
    );
}

export default MainView;
