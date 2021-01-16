import React from 'react';
import { Bar, Radar } from 'react-chartjs-2';

export default ({ chartData, radarData }) => {
    const options =  {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Score'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Data Type'
                }
            }],
        },
        responsive: true,
        maintainAspectRatio: false,
    }
    return (
        <tr>
            <td colSpan="3">
                <Bar data={chartData} options={options} width={100} height={300} />
            </td>

            <td colSpan="2">
                <Radar data={radarData}  width={100} height={300}
                   options={{
                       responsive: true,
                       maintainAspectRatio: false,
                   }}
                />
            </td>
        </tr>
    )
}
