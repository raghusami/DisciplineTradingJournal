// src/components/MasterLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Box } from '@mui/material';
import Footer from './Footer'; // Import the Footer component

const MasterLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />
      <Box
        component="main"
        flexGrow={1}
        marginLeft={isSidebarOpen ? '240px' : '0'}
        transition="margin 0.3s"
      >
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <Box padding={2}>
          <Outlet />
        </Box>
           <Footer /> {/* Add the Footer component */}
      </Box>
   
    </Box>
  );
};

export default MasterLayout;
