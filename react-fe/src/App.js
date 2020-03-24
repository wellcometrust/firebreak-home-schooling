import React from 'react';
import logo from './logo.svg';
import './App.css';
import DayView from './components/dayView';
import WeekView from './components/weekView';

class App extends React.Component {

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
      <div className="App">
        <button onClick={() => this.toggle_view()}>Change View</button>
        <header className="App-header">
          {this.set_view()}
        </header>
      </div>
    );
  }
}

export default App;
