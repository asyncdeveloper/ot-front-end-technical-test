import React, { Fragment } from 'react';
import DataRow from './DataRow';
import DataRowChart from './DataRowChart';

export default ({ row, handleClick, showGraph }) => {
    return (
        <Fragment key={row.id}>
            <DataRow key={row.id} row={row} buttonClick={() => handleClick(row) } />
            { showGraph ? (<DataRowChart chartData={row.chartData} radarData={row.radarData}/>) : null }
        </Fragment>
    );
};


