import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/Register';
import Login from './screens/Login';
import PlayerForm from './component/PlayerForm';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/playerform' element={<PlayerForm />} />


      </Routes>
    </Router>
  );
}
export default App;
