import { useState } from 'react'
import axios from "axios";



function App() {
 const [note, setNote] = useState([
  {
    title:"Test title1",
    description : "Test description 1"
  },
  {
    title:"Test title1",
    description : "Test description 1"
  },
  {
    title:"Test title1",
    description : "Test description 1"
  },
  {
    title:"Test title1",
    description : "Test description 1"
  },
 ]);

 axios.get("http://localhost:3000/api/notes")
 .then((res)=>{
  console.log(res.data.notes);
  setNote(res.data.notes);

 })
 
  return (
    <>
    <div className="notes">

     {note.map((n,index)=>{
      return (
         <div className="note" key={index}>
            <h2>{n.title}</h2>
            <p>{n.description}</p>
          </div>
      )
     })}
    
    </div>
      
    </>
  )
}

export default App
