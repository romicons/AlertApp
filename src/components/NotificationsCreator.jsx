import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography, Button } from "@mui/material";

import { DeleteNotificationBtn } from './DeleteNotificationButton';

import { BiSolidLike } from "react-icons/bi";

export const NotificationsCreator = ({ setCount, count, notifications, setNotifications }) => {
    const [liked, setLiked] = useState(false);

    const createNotification = (message, icon, seen, button) => {
        const newNotification = {
            message: message,
            icon: icon,
            seen: seen,
            id: uuidv4(),
            button: <DeleteNotificationBtn id={uuidv4()} setNotifications={setNotifications} notifications={notifications} />
        };
        setNotifications([...notifications, newNotification]);
    };

    const sendLike = () => {
        setLiked(!liked);
        setCount(count + 1);
        createNotification('Has recibido un like', <BiSolidLike />, false);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", flexFlow: "column wrap", alignItems: "center", backgroundColor: "#f9f7ff", width: '75%', paddingInline: 2, boxShadow: 3, gap: 2 }}>
            <Typography variant="h2" sx={{ textAlign: 'center', fontSize: 30 }}>
                Pulsa cualquier botón
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, padding: 4 }}>
                <Button 
                    onClick={sendLike} 
                    sx={{ fontSize: 25}}>
                    <BiSolidLike />
                </Button>
            </Box>
        </Box>
    );
};
