import * as React from 'react';

import { Badge, IconButton } from "@mui/material";

import { MdNotifications, MdNotificationsActive } from "react-icons/md";

function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  
  export const NotificationsBtn = () => {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
      <IconButton aria-label={notificationsLabel(100)} sx= {{color: "#daa034"}}>
        <Badge color="secondary" badgeContent={count} invisible={invisible}>
            <MdNotifications />
        </Badge>
      </IconButton>
    );
  }