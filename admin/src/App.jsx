import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddSong from './pages/AddSong/AddSong';
import ListSong from './pages/ListSong/ListSong';
import AddAlbum from './pages/AddAlbum/AddAlbum';
import ListAlbum from './pages/ListAlbum/ListAlbum';
import Users from './pages/Users';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <Sidebar />
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3F4F6]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListSong />} />
          <Route path='/add-song' element={<AddSong />} />
          <Route path='/albums' element={<ListAlbum />} />
          <Route path='/add-album' element={<AddAlbum />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
export const url = 'https://spotify-clone-backend-2bp7.onrender.com';
