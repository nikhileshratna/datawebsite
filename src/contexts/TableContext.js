import React, { createContext, useState, useContext } from 'react';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [collapsedRows, setCollapsedRows] = useState({});
  const [hiddenColumns, setHiddenColumns] = useState({});
  const [toggledDepartments, setToggledDepartments] = useState({});

  const toggleDepartment = (department) => {
    setToggledDepartments((prev) => ({
      ...prev,
      [department]: !prev[department],
    }));
  };

  const toggleRow = (tableId, rowId) => {
    setCollapsedRows((prev) => ({
      ...prev,
      [tableId]: {
        ...prev[tableId],
        [rowId]: !prev[tableId]?.[rowId],
      },
    }));
  };

  const toggleColumn = (tableId, columnId) => {
    setHiddenColumns((prev) => ({
      ...prev,
      [tableId]: {
        ...prev[tableId],
        [columnId]: !prev[tableId]?.[columnId],
      },
    }));
  };

  return (
    <TableContext.Provider
      value={{
        collapsedRows,
        hiddenColumns,
        toggledDepartments,
        toggleDepartment,
        toggleRow,
        toggleColumn,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => useContext(TableContext);
