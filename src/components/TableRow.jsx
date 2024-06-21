import React from 'react';
import { useTableContext } from '../contexts/TableContext';

const TableRow = ({ tableId, rowId, row }) => {
  const { collapsedRows, toggleRow } = useTableContext();

  const isRowCollapsed = collapsedRows[tableId] && collapsedRows[tableId][rowId];

  return (
    <>
      <tr onClick={() => toggleRow(tableId, rowId)} className="cursor-pointer">
        {row.data.map((cell, cellIndex) => (
          <td key={cellIndex} className="py-2 px-2 md:px-4 border-b border-gray-300">{cell}</td>
        ))}
      </tr>
      {isRowCollapsed && row.details && (
        <tr className="bg-[#ecfdf5]">
          <td colSpan={row.data.length} className="py-2 px-4">
            <table className="w-full table-fixed" style={{ borderSpacing: '0 10px' }}>
              <thead className="py-2 px-2 md:px-4 border-b border-gray-300 cursor-pointer">
                <tr>
                  {row.details.columns.map((column, columnIndex) => (
                    <th key={columnIndex} className="font-semibold py-2 px-2 md:px-4">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {row.details.data.map((detail, detailIndex) => (
                    <td key={detailIndex} className="py-2 px-2 md:px-4">{detail}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
