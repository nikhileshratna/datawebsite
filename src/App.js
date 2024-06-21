import React from 'react';
import Dashboard from './components/Dashboard';
import { TableProvider } from './contexts/TableContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='relative'>
    <TableProvider>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      
      <div className='flex flex-row'>
      
        <div class="flex">
          <aside class="h-screen sticky top-0">
              <Sidebar />
          </aside>

          <main>
              <Dashboard/>
          </main>
        </div>
      </div>
      
    </TableProvider>
    </div>
  );
}

export default App;
