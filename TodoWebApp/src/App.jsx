import React,{ useState,useEffect} from 'react'


function App() {
  const [todos,setTodos]=useState([])
  const [task,setTask]=useState('')

  const addTodo=()=>{
    if(task.trim() !== '')
    {
      const newId = Math.max(0, ...todos.map((todo) => todo.id)) + 1;

      setTodos((prev)=>[{id:newId,title:task,status:'Pending'},...prev])
      setTask('')
    }
  }

  const updatedStatus=(id)=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>
    todo.id===id ? {...todo,status:todo.status==='Pending'?'Completed':'Pending'}:todo
    )
    )
  }

  const removeTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }

    useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
    <div className=' w-screen min-h-screen bg-[#58186C]'>

    <div className=" flex items-center justify-center mb-24">
      <div className="bg-white flex justify-between items-center py-4 px-6 mt-10 rounded-2xl shadow-md w-full sm:w-96">
       
        <div className="">
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-2 border-white"
          />
        </div>

        <button onClick={addTodo} className="bg-[#66197C] text-white px-8 py-2 rounded-xl shadow-2xl">
          Add 
        </button>

        </div>

        
    </div>


   <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {[...todos].reverse().map((todo) => (
               <div className="w-80 flex bg-[#24273D] ml-8  mb-4 rounded-2xl shadow-2xl text-white p-4">

            <div key={todo.id} className="w-full flex flex-col justify-between p-4 mb-2 rounded">
              <div className='flex flex-col items-start gap-10 mb-4'>
                <p className='font-semibold text-lg'>{todo.id}. {todo.title}</p>
                <p>Status: {todo.status}</p>
                
              </div>
              <div className='flex flex-col items-center gap-3 justify-center'>
                <button onClick={() => updatedStatus(todo.id)} className="bg-[#3425AC] px-6 py-2 w-full rounded-lg font-semibold">
                  Updated Status
                </button>
                <button onClick={() => removeTodo(todo.id)} className="bg-[#3425AC] px-6 py-2 w-full rounded-lg font-semibold">
                  Remove
                </button>
              </div>
            </div>
            </div>
          ))}
    </div>

 
      
    </div>
       
    </>
  )
}

export default App

