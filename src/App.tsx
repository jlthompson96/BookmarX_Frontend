import './App.css'
import Typography from '@mui/material/Typography/Typography'
import UserList from './dashboard/UserList';

function App() {
  return (
    <>
      <Typography variant='h1'>Welcome to Bookmarx!</Typography>
      <Typography variant='h2'>Users</Typography>
      <UserList />
    </>
  )
}

export default App
