import { useState } from "react";

import { Badge } from "@mui/material";

import { MdNotifications } from "react-icons/md";
  
  export const NotificationsCounter = ({setCount, count}) => {

    const [invisible, setInvisible] = useState(false);

    const notificationsLabel = (count) => {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <Badge aria-label={notificationsLabel(100)} sx= {{color: "#daa034"}} color="secondary" badgeContent={count} invisible={invisible}>
            <MdNotifications />
        </Badge>
    );
  }
