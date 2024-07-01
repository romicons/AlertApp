import { useState } from 'react'
import { GlobalStyles, Box } from '@mui/material'

import { Navbar } from './components/Navbar'
import { NotificationsCreator } from './components/NotificationsCreator'
import { Footer } from './components/Footer'

import backgroundImage from './assets/flat-mountains.svg'

function App() {

  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

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

export default App
