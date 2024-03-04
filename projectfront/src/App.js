import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data,setData] = useState([]);

  useEffect(()=> {
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
    },[]);
    
    console.log("data=",data);
  return (
    <div className="App">
      {
        data.map((a,i)=>(
          <li key={i}>
            {a.title}ddddd
          </li>
        ))
      }
    </div>
  );
}

export default App;
