import { useState } from "react";

import { Badge } from "@mui/material";

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
  
  export const NotificationsCounter = () => {
    const [count, setCount] = useState(1);
    const [invisible, setInvisible] = useState(false);
    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <Badge aria-label={notificationsLabel(100)} sx= {{color: "#daa034"}} color="secondary" badgeContent={count} invisible={invisible}>
            <MdNotifications />
        </Badge>
    );
  }
