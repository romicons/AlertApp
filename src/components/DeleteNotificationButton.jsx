import { Button } from "@mui/material";

import { MdDelete } from "react-icons/md";

export const DeleteNotificationBtn = ({id, setNotifications, notifications}) => {
    const deleteNotification = () => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    }

    return(
        <Button sx= {{fontSize: 20, color: '#d90d0d', padding: 0}} onClick={deleteNotification}>
            <MdDelete />
        </Button>
    )
}