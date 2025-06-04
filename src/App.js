import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import TaskPage from './component/TaskPage';
import TaskItem from './component/TaskItem';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';
import FilterControls from './component/FilterControls';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<TaskForm />} />

        <Route path="/Tasks" element={<TaskPage />} />


        <Route exact path='/TaskItem' element={<TaskItem />} />
        <Route exact path='/TaskList' element={<TaskList />} />

        <Route exact path='/Filter' element={<FilterControls />} />



      </Routes>
    </Router>
  );
}
export default App;
