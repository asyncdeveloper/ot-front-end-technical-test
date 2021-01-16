import React, { Component } from "react";
import "./App.css";
import { Table } from 'react-bootstrap';
import DataList from './Components/DataList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const requiredLabel = "lung carcinoma";
        fetch('https://demo6922545.mockable.io')
            .then(res => res.json())
            .then(data => {
                const results = data.data
                    .filter(row => row.disease.efo_info.label === requiredLabel)
                    .sort((a, b) => (a.association_score.overall < b.association_score.overall) ? 1 : -1)
                    .slice(0, 5)
                    .map(row => {
                        row.chartData = {
                            labels: Object.keys(row.association_score.datatypes),
                            datasets: [
                                {
                                    label: 'Association Score vs Data Type',
                                    backgroundColor: 'rgb(63,145,205)',
                                    borderColor: 'rgb(63,145,205)',
                                    data: Object.values(row.association_score.datatypes)
                                }
                            ]
                        };
                        row.radarData = {
                            labels: Object.keys(row.association_score.datatypes),
                            datasets: [
                                {
                                    label: 'Association Score vs Data Type',
                                    backgroundColor: 'rgb(63,145,205)',
                                    pointBackgroundColor: 'rgb(63,145,205)',
                                    data: Object.values(row.association_score.datatypes)
                                }
                            ]
                        };
                        return row;
                    });

                this.setState({
                    data: results
                })
            })
            .catch(console.log)
    }

    handleClick = (row) => {
        const { id } = row;
        const graphKey = `showGraph${id}`;

        this.setState({ [graphKey]: ! this.state[graphKey] || false });
    }

    render() {
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>Symbol</th>
                        <th>Gene ID</th>
                        <th>Gene Name</th>
                        <th>Overall Association Score</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.data.map(row =>
                        <DataList key={row.id} row={row}
                            handleClick={this.handleClick}
                            showGraph={this.state[`showGraph${row.id}`] || false }
                        />)
                    }
                </tbody>
            </Table>
        )
    }
}
