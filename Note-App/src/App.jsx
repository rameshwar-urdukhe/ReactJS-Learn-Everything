import React, { useState } from 'react'

const App = () => {

  const [note, setNote] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({note, details});
    setTask(copyTask);

    setNote('')
    setDetails('')
  }

  const delNote = (idx) => {

    const copyTask = [...task];
    copyTask.splice(idx, 1); 
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen w-full bg-black text-white flex flex-col lg:flex-row'>
  
  {/* Form Section: Full width on mobile, half on desktop */}
  <form 
    onSubmit={(e) => submitHandler(e)} 
    className='flex flex-col gap-4 w-full lg:w-1/2 p-6 md:p-10 items-start'
  >
    <h1 className='text-2xl font-bold mb-2'>Create Task</h1>
    <input 
      type="text" 
      placeholder='Enter Notes Tasks' 
      onChange={(e)=>{
      setNote(e.target.value)
    }}
      className='px-5 w-full py-2 border-2 border-zinc-700 bg-transparent outline-none rounded focus:border-white transition-colors'
    />
    <textarea 
      placeholder='Write details' 
      onChange={(e)=>{
      setDetails(e.target.value)
    }}
      className='px-5 w-full font-medium h-32 py-2 border-2 border-zinc-700 bg-transparent outline-none rounded focus:border-white transition-colors'
    />
    <button className='bg-white hover:bg-zinc-200 w-full outline-none font-bold text-black px-5 py-2 rounded transition-all active:scale-95'>
      Add Task
    </button>
  </form>

  {/* Notes Display Section: Border appears only on large screens */}
  <div className='w-full lg:w-1/2 lg:border-l border-zinc-800 p-6 md:p-10'>
    <h1 className='text-2xl font-bold'>Recent Notes</h1>
    
    {/* Grid/Flex container for notes - responsive column sizing */}
    <div className='flex flex-wrap justify-start gap-5 mt-5'>
      {/* Sample Note Card */}
      {/* <div className='h-52 w-full sm:w-44 md:w-48 rounded-2xl bg-zinc-100 text-black p-4'>
        <p className='text-sm font-semibold'>Note Title</p>
      </div> */}

{
  task.map(function(elm, idx) {
    return (
      <div key={idx} className='flex flex-col justify-between h-52 w-40 rounded-xl text-black p-4 bg-white shadow-md'>
        {/* Top Content */}
        <div>
          <h2 className='text-sm font-bold'>{elm.note}</h2>
          <p className='text-sm mt-2 font-semibold text-zinc-600'>{elm.details}</p>
        </div>

        {/* Bottom Button */}
        <button className='w-full bg-red-500 text-white py-1.5 rounded-lg text-xs font-bold hover:bg-red-600 transition-colors' 
           
           onClick={()=>delNote(idx)}
        >
          Delete
        </button>
      </div>
    );
  })
}

      {/* Add more cards here */}
    </div>
  </div>

</div>

  )
}

export default App
