import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Route, Router, Routes} from 'react-router-dom';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PhotographySubjectList from './components/PhotographySubjectList/PhotographySubjectList';
import TaskList from './components/TaskList/TaskList';
import Photos from './components/Photos/Photos';


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import aboutSlice from './redux/slices/userSlice';
import userSlice from './redux/slices/userSlice';
import Notifications from './components/Notifications/Notifications';
import ToastNotification from './components/ToastNotification/ToastNotification';
import messageSlice from './redux/slices/messageSlice';
import notificationsSlice from './redux/notificationsSlice';
import tasksSlice from './redux/tasksSlice';


function App() {
  //יצירת חנות
const myStore=configureStore({
  reducer:{
    userSlice,
    messageSlice,
    notificationsSlice,
    tasksSlice,

  }
})

  const Contact=React.lazy(()=>( import('./components/Contact/Contact')));

  return (
    <>
  
  <Provider store={myStore}>
      <div className="app-container">
      <Header />
      <ToastNotification/>
      <main>
            <Suspense fallback={<div className="loader"></div>}>
      <Routes>

      <Route path='' element={ <Home></Home>}></Route>
      <Route path='about' element={ <About></About>}></Route>
      <Route path='PhotographySubjectList' element={ <PhotographySubjectList></PhotographySubjectList>}></Route>
      <Route path='TaskList' element={ <TaskList></TaskList>}></Route>


      <Route path='photos/:id' element={ <Photos /> }></Route>
      


      <Route path='contact' element={ <Contact></Contact>}></Route>
      <Route path='*' element={ <NotFound></NotFound>}></Route>
          </Routes>
        

      </Suspense>

      </main>
      <Footer />
    </div>

    </Provider>
    </>
  );
}

export default App;
