import React, { useState } from 'react';
import DayView from './dayView';
import WeekView from './weekView';

function MainView(props) {
    const [view_day, setView] = useState(true);
    const [btn_text, setBtnText] = useState("View Week");

    
    const change_view = () => {
        setView(!view_day);
        if (!view_day) {
            setBtnText("View Week")
        } else {
            setBtnText("View Day")
        }
    }

    const set_view = () => {
        if (view_day) {
            return <DayView />
        } else {
            return <WeekView />
        }
    }

    return (
        <div>
            <button onClick={() => change_view()}>{btn_text}</button>
            <header className="App-header">
                {set_view()}
            </header>
        </div>
    );
}

export default MainView;
