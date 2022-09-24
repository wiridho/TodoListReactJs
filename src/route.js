import React, { useState } from 'react'
import Data from './data.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';


export default function Routing() {
    const [datalist, setDataList] = useState(Data)


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App datalist={datalist} setDataList={setDataList} />} />
                <Route path='/add' element={<AddTaskForm datalist={datalist} setDataList={setDataList} />} />
                <Route path='/update/:id' element={<UpdateForm datalist={datalist} setDataList={setDataList} />} />
            </Routes>
        </BrowserRouter>
    )
}
