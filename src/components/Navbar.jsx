import { Typography, Box } from "@mui/material"

import AlertAppIcon from "../assets/AlertAppIcon.svg"

export const Navbar = () => {
    return (
        <Box sx={ { display:"flex", justifyContent:"space-between", flexFlow: "row wrap", alignItems:"center", backgroundColor: "#f9f7ff", width:'100%', paddingInline: 2,  boxShadow: 3 } }>
            <Box sx={ { display:"flex", gap: 2, alignItems: "center"}}>
                <Box component="img" sx={{
                    width: 35,
                    height: 'auto', 
                }}
                alt="AlertApp Logo"
                src={AlertAppIcon}
                >
                </Box>
                <Typography variant="h1" sx={{ fontSize:40}}>AlertApp</Typography>
            </Box>
            <Typography variant="h3" sx={{ fontSize:20}}>Notificaciones

            </Typography>
        </Box>
    )
}