import React from 'react';
import './table.css';


class Item extends React.Component {

    render() {

        this.perchild = this.props.value.students.map((child, key) => 
            (
                <div key={key} className="tableItem">
                    <input type="checkbox" checked={child.done} />
                </div>
            )
        );

        return (
            <div className="tableRow">
                <div className="tableItem">{this.props.value.title}</div>
                {this.perchild}
            </div>
        )
    }
}


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1, 
                    title: 'Thing to do ', 
                    students: [
                        {name: 'Nathaniel', done: false},
                        {name: 'Sam', done: false},
                        {name: 'Katy', done: true}
                    ]
                },
                {
                    id: 2, 
                    title: 'Next task in line ', 
                    students: [
                        {name: 'Nathaniel', done: true},
                        {name: 'Sam', done: false},
                        {name: 'Katy', done: true}
                    ]
                },
            ],
            children: [
                {name: 'Nathaniel'},
                {name: 'Sam'},
                {name:'Katy'},
            ]
        };
    }

    handleChange(i) {
        console.log(i);
        let data = this.state.data.slice();
        data[i].done = !data[i].done;
        this.setState({data: data});
        console.log(this.state.data);
    }

    render() {

        this.children = this.state.children.map((child, i) => 
            <div className="tableItem" key={i}>{child.name}</div>
        );

        this.items = this.state.data.map((item, i) =>
            <Item key={i} value={this.state.data[i]} onChange={() => this.handleChange(i)}/>
        );

        return (
            <div className="table">
                <div className="tableHeader">
                    <div className="tableRow">
                        <div className="tableItem">Expectation</div>
                        {this.children}
                    </div>
                </div>
                <div className="tableBody">
                    {this.items}
                </div>
            </div>
        )
        
    }
}

export default Table;
