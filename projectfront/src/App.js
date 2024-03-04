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


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/list');
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log("data=", data);

  return (
    <div>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
