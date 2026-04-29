import { useEffect, useState } from 'react'
import axios from "axios";



function App() {
 const [note, setNote] = useState([]);

 // this is the function to fetch the data from the server
 // in this we rea using the get mathod 
 function fetch_data(){
  axios.get("http://localhost:3000/api/notes")
 .then((res)=>{
  //console.log(res.data.notes);
  setNote(res.data.notes);

 })
}
// this is the function to create the note on the server
// int his we will use the post api 
function submit_handeler(e){
  e.preventDefault();
  console.log("Chal raha hi guys");
  const {title, description} = e.target.elements ;
  console.log(title.value, description.value)
  axios.post("http://localhost:3000/api/notes",{
    "title":title.value ,
    "description" :description.value
  })
  .then((res)=>{
    console.log(res)
    fetch_data();
})
}
// this is the function to delete the note 
// in this we will use the delete method 
function delete_note(id){
  console.log("tis is the id of note to be deleted");
  console.log(id)
  
 axios.delete(`http://localhost:3000/api/notes/${id}`)
 .then((res)=>{
     console.log(res)
     fetch_data();
 })
}
// thi si the function to uptade the specific note
// inn this we will use the patch method
function update_note(id){
   console.log("tis is the id of note to be updated");
  console.log(id)
   const newDescription = prompt("Enter new description:");
  axios.patch(`http://localhost:3000/api/notes/${id}`,{
     "description" :newDescription
  })
  .then((res)=>{
    console.log(res)
    fetch_data();

  })

}


 
 useEffect(()=>{
  fetch_data();
 },[])

 
  return (
    <>
    <form className="create_note_form" onSubmit={submit_handeler}>
       <input name='title' type="text" placeholder='Enetr Title' />
      <input name= 'description' type="text" placeholder='Enter Description' />
      <button >Create Note</button>


    </form>
    
     
    
    <div className="notes">

     {note.map((n,index)=>{
      return (
         <div className="note" key={index}>
            <h2>{n.title}</h2>
            <p>{n.description}</p>
            <div className="btn_box">
                    <button onClick={()=>{
              delete_note(n._id)
            }} className='btn'>Delete</button>
            <button onClick={()=>{
              update_note(n._id)
            }}
              className='btn'>Update</button>

            </div>
      
          </div>
      )
     })}
    
    </div>
      
    </>
  )
}

export default App
