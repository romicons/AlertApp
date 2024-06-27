import { Typography, Box } from "@mui/material"

import AlertAppIcon from "../assets/AlertAppIcon.svg"

export const Navbar = () => {
    return (
        <Box sx={ { display:"flex", justifyContent:"left", flexFlow: "row wrap", alignItems:"center", backgroundColor: "#f9f7ff", width:'100%', paddingInline: 2,  boxShadow: 3, gap: 2 } }>
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
    )
}