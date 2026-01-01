import React, { useState,useEffect } from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [task, setTask] = useState(
    localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
  )

  const SubmitHandlar = (e)=>{
    if (!title.trim() || !content.trim()) return;
    setTask([...task, { title, content }]);
    setContent('')
    setTitle('')
  }
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(task));
  }, [task]);

  return (
    <div className=' font-sans h-screen flex justify-center '>
      <div className='w-[50%] mt-10 '>
      {/* header */}
      <div className='flex gap-5 items-center justify-center'>
        <img className='h-15 ' src="https://www.svgrepo.com/show/190066/notes-note.svg" alt="Notes" />
        <h1 className='text-5xl font-bold '>Notes App</h1>
      </div>
      <div className='flex flex-col mt-5  '>
        <input className='border mb-5 rounded-lg outline-blue-400 text-2xl py-2 pl-3 ' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Title' type="text" />
        <textarea className='border p-2 rounded-lg outline-blue-400 text-xl' name="content" value={content} id="content" rows="5" cols="40" placeholder='Content' onChange={(e)=> setContent(e.target.value)} required></textarea>
        <button onClick={SubmitHandlar} className='w-full bg-blue-500 mt-5 text-xl font-medium py-3 rounded-xl text-white'>Create Note</button>
      </div>
      <div>
        <h2 className='text-center mt-10 text-4xl font-bold text-black'>Recent Notes</h2>
        <div>
        {task.length === 0 ? (<p className='empty-msg' >No notes available. Please add some notes. ✨</p>) : 
        (task.map((note, index) => (<div key={index} className="note">

            <div>
              <h3>{note.title}</h3>
              {/* <Trash onClick={() => deletehandler(index)} /> */}
            </div>

            <p>{note.content}</p>
          </div>
        )))}
      </div>
      </div>
      </div>

    </div>
  )
}

export default App