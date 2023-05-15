import './App.css';
import { useUserContext } from './context/UserContext';
import Auth from './Pages/Auth'

function App() {

  const {user} = useUserContext()

  return (
    <h1>
      {user.email}
    </h1>
  );
}

export default App;
