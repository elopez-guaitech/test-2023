import {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './components/Form';
import ListOfTasks from './components/ListOfTasks';
import './../style/App.css';

const API = "http://localhost:3000/api/v1/"

function App() {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(null);

  const getData = () =>{
    axios.get(`${API}`)
      .then((response)=>{setData(response.data)})
      .catch((error)=>console.error(error))
  }

  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    getData()
  },[load])

  return (
    <main>
      <Form API={API} setLoad={setLoad}/>
      {data && <ListOfTasks data={data} API={API} setLoad={setLoad}/>}
    </main>
  )
}

export default App
