import { Container} from '@mui/material'
import { NotificationsCreator } from './NotificationsCreator'

export const MainContent = ({setCount, count, notifications, setNotifications}) => {
    return (
        <Container sx={{ display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column", flex: 1, padding: 2, gap: 2}}>
            <NotificationsCreator setCount={setCount} count={count} notifications={notifications} setNotifications={setNotifications}/>
        </Container>
)
}