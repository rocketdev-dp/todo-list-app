import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
              alert("Title or Description can not be blank!!!"); 
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
  return (
    <div className='container my-3'>
<h3>Add New Todo</h3>
<form onSubmit={submit}>
<div className="mb-3 row">
    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
    </div>
  </div>
  <div><button type='submit' className="btn-sm btn btn-success">Add</button></div>
</form>
    </div>
  )
}
