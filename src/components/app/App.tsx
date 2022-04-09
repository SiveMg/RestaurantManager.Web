import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import PageLogin from '../../Pages/pageLogin/PageLogin';
import PageHome from '../../Pages/pageHome/pageHome';

function App() {
  return (
   <Routes>
     <Route path='login' element={<PageLogin/>}/>
     <Route path='/' element={<PageHome/>}/>
   </Routes>
  );
}
export default App;
