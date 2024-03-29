import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import Layout from './components/layout/Layout'
import NotFoundPage from './pages/NotFoundPage';
import EditPage from './pages/EditPage';
import LoginPage from './pages/userPage/LoginPage';
import SignUpPage from './pages/userPage/SignUpPage';

function App() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:8080/list');
  //       const result = await res.json();
  //       console.log(result);
  //       setData(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log("data=", data);

  return (
    <div>
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
