import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import PageSignIn from '../../Pages/pageSignIn/PageSignIn';
import PageHome from '../../Pages/pageHome/pageHome';

function App() {
  return (
   <Routes>
     <Route path='login' element={<PageSignIn/>}/>
     <Route path='/' element={<PageHome/>}/>
   </Routes>
  );
}
export default App;
