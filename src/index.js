import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoSearch from './components/partials/TodoSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='add' element={<AddTaskForm />} />
        <Route path='/update' element={<UpdateForm />} />
        <Route path='/search' element={<TodoSearch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
