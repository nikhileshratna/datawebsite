import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 lg:w-64 w-0 h-screen bg-[#ecfdf5] overflow-hidden sticky '>
      <div className='h-16 bg-white flex items-end justify-center'>
        <p className='text-black'>Assigned Task</p>
      </div>
      <div className='text-white'>
        <div className='rounded p-2 text-black font-bold bg-[#059669]'>Dashboard</div>
        <div className='rounded p-2 text-black bg-[#a7f3d0]'>Employees</div>
      </div>
      <div className='my-10'>
        <p className='text-black text-center'>Unassigned Task</p>
        <div className='rounded p-2 text-black bg-[#a7f3d0]'>Assign Department</div>
        <div className='rounded p-2 text-black bg-[#a7f3d0]'>Assign Employees</div>
      </div>
      <div className='mt-auto mb-10'>
        <div className='rounded p-2 text-black bg-[#a7f3d0]'>Add Employee/Dept</div>
        <div className='rounded p-2 text-black bg-[#a7f3d0]'>Completed Task</div>
        <div className='p-2 my-2 rounded bg-[#fb7185] text-[#be123c] text-center'>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
