import { useState } from 'react';

import { List, ListItemButton, ListItemText, MenuItem, Menu } from "@mui/material";

import { NotificationsCounter } from './NotificationsCounter';

export const NotificationsMenu = ({ count, setCount, notifications, setNotifications }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event, index) => {
    const updatedNotifications = notifications.map((notification, idx) => {
      if (idx === index && !notification.seen) {
        setCount(count - 1);
        return { ...notification, seen: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Menu de Notificaciones"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Notificaciones"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary="Notificaciones" />
          <NotificationsCounter setCount={setCount} count={count} />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {notifications?.length > 0 ? (
          notifications.map((notification, index) => (
            <MenuItem 
              sx={{
                display: 'flex', 
                gap: 1, 
                justifyContent: 'space-between', 
                backgroundColor: notification.seen ? 'white' : '#f5f5c6'
              }}
              key={notification.id}
              onClick={(event) => handleNotificationClick(event, index)}
            >
              {notification.icon}
              {notification.message}
              {notification.button}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>
            No hay notificaciones para mostrar
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
