import React from 'react';

export default ({ row, buttonClick }) => {
    return (
        <tr key={row.id}>
            <td>
                <button onClick={buttonClick}>+</button>
            </td>
            <td>{ row.target.gene_info.symbol}</td>
            <td>{ row.target.id }</td>
            <td>{ row.target.gene_info.name}</td>
            <td>{ row.association_score.overall}</td>
        </tr>
    )
}
