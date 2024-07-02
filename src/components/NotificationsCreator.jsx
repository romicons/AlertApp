import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography, Button } from "@mui/material";
import { DeleteNotificationBtn } from "./DeleteNotificationButton";

import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaFire } from "react-icons/fa6";
import { FaStar, FaCat } from "react-icons/fa";
import { PiHandsClappingFill, PiFlowerTulipBold } from "react-icons/pi";
import { TfiSpray } from "react-icons/tfi";
import { GiLips } from "react-icons/gi";

export const NotificationsCreator = ({ setCount, count, notifications, setNotifications }) => {
    const [liked, setLiked] = useState(false);
    const [fireUp, setOnFire] = useState(false);
    const [starred, setStars] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [clapped, setClapped] = useState(false);
    const [flowersSent, setFlowersSent] = useState(false);
    const [spray, setSpray] = useState(false);
    const [kissed, setKissed] = useState(false);
    const [prr, setPrr] = useState(false);

    const createNotification = (message, icon, seen) => {
        const id = uuidv4();
        const newNotification = {
            message: message,
            icon: icon,
            seen: seen,
            id: id,
            button: <DeleteNotificationBtn id={id} setNotifications={setNotifications} notifications={notifications} />
        };
        setNotifications([...notifications, newNotification]);
    };

    const sendLike = () => {
        setLiked(!liked);
        setCount(count + 1);
        createNotification('Recibiste un like', <BiSolidLike />, false);
    };

    const sendFire = () => {
        setOnFire(!fireUp);
        setCount(count + 1);
        createNotification('Recibiste un fueguito', <FaFire />, false);
    };

    const sendStars = () => {
        setStars(!starred);
        setCount(count + 1);
        createNotification('Te enviaron estrellas', <FaStar />, false);
    };

    const sendDislike = () => {
        setDislike(!dislike);
        setCount(count + 1);
        createNotification('Te dieron dislike', <BiSolidDislike />, false);
    };

    const sendApplauses = () => {
        setClapped(!clapped);
        setCount(count + 1);
        createNotification('Fuiste aplaudido', <PiHandsClappingFill />, false);
    };

    const sendFlowers = () => {
        setFlowersSent(!flowersSent);
        setCount(count + 1);
        createNotification('Recibiste flores', <PiFlowerTulipBold />, false);
    };

    const sendSpray = () => {
        setSpray(!spray);
        setCount(count + 1);
        createNotification('Te echaron fly', <TfiSpray />, false);
    };

    const sendKiss = () => {
        setKissed(!kissed);
        setCount(count + 1);
        createNotification('Recibiste un beso', <GiLips />, false);
    };

    const sendCat = () => {
        setPrr(!prr);
        setCount(count + 1);
        createNotification('Un gatito te esta mirando', <FaCat />, false);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "#f9f7ff", width: '70%', padding: 2, boxShadow: 3, gap: 2, borderRadius: 2 }}>
            <Typography variant="h2" sx={{ textAlign: 'center', fontSize: 25 }}>
                Pulsa un botón para comenzar
            </Typography>
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, auto)', padding: 2 }}>
                <Button 
                    onClick={sendLike} 
                    sx={{ fontSize: 25, color:'#191cdd'}}>
                    <BiSolidLike />
                </Button>
                <Button 
                    onClick={sendFire} 
                    sx={{ fontSize: 25, color:'#c11b21'}}>
                    <FaFire />
                </Button>
                <Button 
                    onClick={sendStars} 
                    sx={{ fontSize: 25}}>
                    <FaStar />
                </Button>
                <Button 
                    onClick={sendApplauses} 
                    sx={{ fontSize: 25}}>
                    <PiHandsClappingFill />
                </Button>
                <Button 
                    onClick={sendDislike} 
                    sx={{ fontSize: 25, color: '#777571'}}>
                    <BiSolidDislike />
                </Button>
                <Button 
                    onClick={sendSpray} 
                    sx={{ fontSize: 25, color: '#00982b'}}>
                    <TfiSpray />
                </Button>
                <Button 
                    onClick={sendFlowers} 
                    sx={{ fontSize: 25, color: '#ff2fbb'}}>
                    <PiFlowerTulipBold />
                </Button>
                <Button 
                    onClick={sendKiss} 
                    sx={{ fontSize: 25, color: '#c9001b'}}>
                    <GiLips />
                </Button>
                <Button 
                    onClick={sendCat} 
                    sx={{ fontSize: 25, color: '#271f24'}}>
                    <FaCat />
                </Button>
            </Box>
        </Box>
    );
};
