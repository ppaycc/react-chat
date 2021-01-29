
import { Route } from 'react-router';
import './App.css';
import { Home, LoginForm, RegisterForm } from './pages';

function App() {
  return (
    <>
    <Route export path='/login' render={()=><LoginForm/>} />
    <Route export path='/register' render={()=><RegisterForm/>} />
    <Route export path='/im' render={()=><Home/>} />
    </>
  );
}

export default App;
