import React from 'react';
import TableHeader from './tableHeader.jsx';
import TableBody from './tableBody.jsx';

const Table = ({ columns, onSort, sortColumn, data }) => {
    return (
        <table className="table">
        <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
        />
        <TableBody columns={columns} data = {data} />
    </table>
    );
}
 
export default Table;