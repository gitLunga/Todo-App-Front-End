import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login';

import TaskItem from './component/TaskItem';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';  
import FilterControls from './component/FilterControls';

import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />


        <Route exact path='/TaskItem' element={<TaskItem />} />
        <Route exact path='/TaskList' element={<TaskList/>} />
        <Route exact path='/TaskForm' element={<TaskForm />} />
        <Route exact path='/Filter' element={<FilterControls />} />


      </Routes>
    </Router>
  );
}
export default App;
