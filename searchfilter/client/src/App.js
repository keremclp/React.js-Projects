import { useEffect, useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Components/Table';
import axios from "axios"
// BASIC
// function App() {
//   const [query,setQuery] = useStat("");
//   return (
//     <div className="App">
//       <input type="text" className="search" placeholder='Search..' onChange={e=>setQuery(e.target.value)}/>
//       <ul className="list">
//         {Users.filter(user=>user.first_name.toLowerCase().includes(query
//         )).map((user)=>(
//           <li key={user.id} className="listItem">{user.first_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// INTERMEDIATE METHOD 
// function App() {  
//   const [query, setQuery] = useState("");
//   const keys = ["first_name","last_name","email"];


//   const search = (data) =>{
//     return data.filter(
//       (item) => 
//         keys.some((key) => item[key].toLowerCase().includes(query))  
//     )
//   }


//   return (
//     <div className="App">
//       <input type="text" className="search" placeholder='Search..' onChange={e=>setQuery(e.target.value)}/>
//       <Table data={search(Users)}/>
//     </div>
//   );
// }

// ADVANCED METHOD
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])
  
  useEffect(()=>{
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length===0 || query.length>2) fetchUsers(); //  
  },[query]); //whenever quey is changed , run this fyunction
  

  return (
    <div className="App">
      <input type="text" className="search" placeholder='Search..' onChange={e=>setQuery(e.target.value)}/>
      {<Table data={data}/>}
    </div>
  );
}

export default App;
