import React from 'react';
import DayView from './dayView';
import WeekView from './weekView';

class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view_day: true
    };
  }

  toggle_view() {
    const view_day = !this.state.view_day;
    this.setState({view_day: view_day});
  }

  set_view() {
    if (this.state.view_day) {
      return <DayView />;
    } else {
      return <WeekView />;
    }
  }

  render() {

    return (
      <div>
        <button onClick={() => this.toggle_view()}>Change View</button>
        <header className="App-header">
          {this.set_view()}
        </header>
      </div>
    );
  }
}

export default MainView;
