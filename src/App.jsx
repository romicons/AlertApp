import React, { useState, useEffect } from 'react';

import { GlobalStyles, Box } from '@mui/material';

import { Navbar } from './components/Navbar';
import { NotificationsCreator } from './components/NotificationsCreator';
import { Footer } from './components/Footer';

import backgroundImage from './assets/flat-mountains.png';

function App() {
  const initialNotifications = JSON.parse(localStorage.getItem('notifications')) || [];

  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState(initialNotifications);

  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (storedNotifications) {
      setNotifications(storedNotifications);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  return (
    <>
      <GlobalStyles
        styles={{
          '#root': {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1
        }}
      >
        <Navbar setCount={setCount} count={count} notifications={notifications} setNotifications={setNotifications} />
        <NotificationsCreator setCount={setCount} count={count} notifications={notifications} setNotifications={setNotifications} />
        <Footer />
      </Box>
    </>
  )
}

export default App;
