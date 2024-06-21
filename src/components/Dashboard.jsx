import React from 'react';
import Table from './Table';
import { dummyData } from '../data/dummyData';
import { useTableContext } from '../contexts/TableContext';

const Dashboard = () => {
  const { toggledDepartments, toggleDepartment } = useTableContext();

  return (
    <>
      <div className='h-16 bg-white flex items-center justify-center'>
        <p className='text-black text-xl'>Dashboard</p>
      </div>
      <div className="p-4">
        {dummyData.map((tableData, index) => (
          <div key={index} className="mt-4">
            <div className="cursor-pointer py-2 px-4 border-b border-gray-300" onClick={() => toggleDepartment(tableData.department)}>
              <div className="overflow-x-auto">
                <table className="w-full bg-[#059669] border border-green-300 table-fixed">
                  <thead>
                    <tr>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">Sno</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">Department</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">Total Task</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">In Progress</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">In Pipeline</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">For Review</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">Unassigned</th>
                      <th className="py-2 px-2 md:px-4 border-b border-gray-300">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.sno}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.department}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.totalTask}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.inProgress}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.inPipeline}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.forReview}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.unassigned}</td>
                      <td className="py-2 px-2 md:px-4 border-b border-gray-300">{tableData.performance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {toggledDepartments[tableData.department] && (
              <div className="mt-2">
                <Table tableId={tableData.department} data={tableData} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
