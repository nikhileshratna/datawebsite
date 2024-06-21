import React from 'react'

const Sidebar = () => {
  return (
    <div
    className='w-64 h-[100vh] bg-[#ecfdf5] overflow-hidden sticky'>
        <div className='h-16 bg-white flex items-end justify-center'>
            <p className='text-black'>Assigned Task</p>
        </div>
        <div className='text-white'>
            <div className=' rounded p-2 text-black text-bold bg-[#059669]'>Dashboard</div>
            <div className=' rounded p-2 text-black bg-[#a7f3d0]'>Employees</div>
        </div>

        <div className='my-10 '>
            <p className='text-black text-center'>Unassigned Task</p>
            <div className=' rounded p-2 text-black bg-[#a7f3d0]'>Assign Department</div>
            <div className=' rounded p-2 text-black bg-[#a7f3d0]'>Assign Employees</div>
        </div>

        <div className='my-[80%]'>
            <div className=' rounded p-2 text-black bg-[#a7f3d0]'>Add Employee/Dept</div>
            <div className=' rounded p-2 text-black bg-[#a7f3d0]'>Completed Task</div>
            <div className='p-2 my-2 px-[35%] rounded bg-[#fb7185] color-[#be123c]'>
                <p className='text-centre'>Logout</p>
                </div>
           
        </div>
    </div>
  )
}

export default Sidebar