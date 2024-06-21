import React from 'react';
import TableRow from './TableRow';
import { useTableContext } from '../contexts/TableContext';

const Table = ({ tableId, data }) => {
  const { hiddenColumns, toggleColumn } = useTableContext();

  const isColumnHidden = (columnId) => hiddenColumns[tableId] && hiddenColumns[tableId][columnId];

  return (
    <div className="overflow-x-auto min-w-full sm:min-w-[50%]">
      <table className="min-w-full bg-[#a7f3d0] border border-green-300 table-fixed">
        <thead>
          <tr>
            {data.columns.map((col, colIndex) => (
              !isColumnHidden(colIndex) && (
                <th key={colIndex} className="py-2 px-2 md:px-4 border-b border-gray-300 cursor-pointer">
                  {col}
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} tableId={tableId} rowId={rowIndex} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
