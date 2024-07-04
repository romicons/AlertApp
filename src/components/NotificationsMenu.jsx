import React, { useState } from 'react';

import { Button, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Menu } from "@mui/material";

import { MdDelete } from "react-icons/md";
import { NotificationsCounter } from './NotificationsCounter';

import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaFire, FaStar, FaCat } from "react-icons/fa";
import { PiHandsClappingFill, PiFlowerTulipBold } from "react-icons/pi";
import { TfiSpray } from "react-icons/tfi";
import { GiLips } from "react-icons/gi";

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

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'BiSolidLike':
        return <BiSolidLike />;
      case 'BiSolidDislike':
        return <BiSolidDislike />;
      case 'FaFire':
        return <FaFire />;
      case 'FaStar':
        return <FaStar />;
      case 'FaCat':
        return <FaCat />;
      case 'PiHandsClappingFill':
        return <PiHandsClappingFill />;
      case 'PiFlowerTulipBold':
        return <PiFlowerTulipBold />;
      case 'TfiSpray':
        return <TfiSpray />;
      case 'GiLips':
        return <GiLips />;
      default:
        return null;
    }
  };  

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
    setCount(0);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Menu de Notificaciones" sx={{ bgcolor: 'background.paper' }}>
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
          [
            <MenuItem 
              key="delete-all"
              sx={{ fontSize: 16, color: '#d90d0d', padding: 0, display: 'flex', justifyContent: 'center', gap: 1 }} 
              onClick={deleteAllNotifications}
            >
              <MdDelete />
              Eliminar todas
            </MenuItem>,
            ...notifications.map((notification, index) => (
              <MenuItem 
                sx={{ backgroundColor: notification.seen ? 'white' : '#f5f5c6' }}
                key={notification.id}
                onClick={(event) => handleNotificationClick(event, index)}
              >
                <ListItemIcon>
                  {renderIcon(notification.icon)}
                </ListItemIcon>
                <ListItemText>
                  {notification.message}
                </ListItemText>
                <Button sx={{ fontSize: 20, color: '#d90d0d', padding: 0 }} onClick={(e) => { e.stopPropagation(); deleteNotification(notification.id); }}>
                  <MdDelete />
                </Button>
              </MenuItem>
            ))
          ]
        ) : (
          <MenuItem disabled>
            No hay notificaciones para mostrar
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};