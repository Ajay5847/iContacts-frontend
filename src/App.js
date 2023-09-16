import './App.css';
import ContactCard from './components/contactCard/ContactCard';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import UpdateContact from './components/updateContact/UpdateContact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/contacts' element={<ContactCard />} />
        <Route path='/updatecontact/:id' element={<UpdateContact />} />
      </Routes>
    </div>
  );
}

export default App;
