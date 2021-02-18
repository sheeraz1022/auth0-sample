import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { error } = useAuth0();

  return (
    <div className="App">
     { error && 'Error while logging in'}
     <LoginButton />
     <LogoutButton />
     <Profile />

    </div>
  );
}

export default App;
