import './App.css';
import {useState,useEffect} from 'react';
import DemoClass from './Component/DemoClass';

function App() {
  //declare states
  const [input,setInput]=useState('')
  const [data,setData]=useState([])

  //Geting data from this URL
  const url='http://www.mocky.io/v2/5ba8efb23100007200c2750c'

  // Call hook for every Text change
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res=>setData(res)) 
  }, [input])
 
  return (
    <div className="App">
    <span className="fa fa-search" ></span>
     <input type="search" className="add" onChange={e=>setInput(e.target.value)} placeholder="&#128269;Search id, name, address, pincode and items" />
    <DemoClass data={data} input={input} />
  </div>
  );
}

export default App;