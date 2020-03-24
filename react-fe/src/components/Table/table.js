import React from 'react';
import './table.css';


class Item extends React.Component {

    render() {

        this.perchild = this.props.value.data.map((child, key) => 
            (
                <div key={key} className="tableItem">
                    <input type="checkbox" checked={child} onChange={() => this.props.onChange(key)}/>
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

    render() {

        this.cols = this.props.columns.map((col, i) => 
            <div className="tableItem" key={i}>{col.name}</div>
        );

        this.rows = this.props.rows.map((row, i) =>
            <Item key={i} value={row} onChange={(k) => this.props.onChange(i, k)}/>
        );

        return (
            <div className="table">
                <div className="tableHeader">
                    <div className="tableRow">
                        <div className="tableItem">Expectation</div>
                        {this.cols}
                    </div>
                </div>
                <div className="tableBody">
                    {this.rows}
                </div>
            </div>
        )
        
    }
}

export default Table;
