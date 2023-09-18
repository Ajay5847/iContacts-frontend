import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import UpdateContact from './components/updateContact/UpdateContact';
import Home from './components/home/Home';
import CreateContact from './components/createContact/CreateContact';
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";

function App() {
  const toastData = useSelector((state) => state.contactReducer.toastData);
  const [sortedContacts, setSortedContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    switch (toastData?.type) {
      case TOAST_SUCCESS:
        toast.success(toastData?.message);
        break;
      case TOAST_FAILURE:
        toast.error(toastData?.message);
        break;
    }
  }, [toastData]);

  return (
    <div>
      <Navbar setSortedContacts={setSortedContacts} setFilteredContacts={setFilteredContacts} />
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path='/' element={<Home sortedContacts={sortedContacts} filteredContacts={filteredContacts} />} />
        <Route path='/updatecontact/:id' element={<UpdateContact />} />
        <Route path='/createcontact' element={<CreateContact />} />
      </Routes>
    </div>
  );
}

export default App;
