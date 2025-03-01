import { useEffect } from "react";

import { Typography, Box } from "@mui/material";

import { NotificationsMenu } from './NotificationsMenu';

import AlertAppIcon from "../assets/AlertAppIcon.svg";

export const Navbar = ({ count, setCount, notifications, setNotifications }) => {
  useEffect(() => {
    let unseenCount = 0;
    notifications?.forEach((notification) => {
      if (!notification.seen) {
        unseenCount++;
      }
    });
    setCount(unseenCount);
  }, [notifications, setCount]);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", flexFlow: "row wrap", alignItems: "center", backgroundColor: "#f9f7ff", width: '100%', paddingInline: 2, boxShadow: 3 }}>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box component="img" sx={{ width: 35, height: 'auto' }} alt="AlertApp Logo" src={AlertAppIcon} />
        <Typography variant="h1" sx={{ fontSize: 40 }}>AlertApp</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <NotificationsMenu setCount={setCount} count={count} notifications={notifications} setNotifications={setNotifications} />
      </Box>
    </Box>
  );
};
