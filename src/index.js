import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetAllData from './component/GetAllData';
import Detail from './pages/Detail';
import GetAllDataByParam from './component/GetAllDataByParam';

import { Layout } from 'antd';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/' element={<GetAllData />}>
          <Route path=':data' element={<GetAllDataByParam />} />
        </Route>
        <Route path='/detail/:id' element={<Detail />} />


        {/* <Route path='/Detail' element={<DetailPage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />

        <Route path='/Profile' element={<ProfilePage />}>
          <Route path='address' element={<Address />} />
          <Route path='hobby' element={<Hobby />} />
        </Route> */}

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
