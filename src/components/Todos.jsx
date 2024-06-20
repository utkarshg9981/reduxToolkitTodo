import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";
import "./Todo.css"
import Diamond from '../../assets/delete.png';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>

    

<div className="flex flex-col items-center justify-center w-auto h-screen bg-gray-100 m-14 rounded-3xl " >
<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md" >


      <div className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" > Todos</div>
      {todos.map((todo) => (
        <div  className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center  list-none justify-between" >
       
        <li className="text-gray-900  dark:text-gray-100" key={todo.id}>
          <div className="flex ">

          <div className="text-bold text-xl align-self-center flex font-semibold">

           {todo.text}
          </div>
          <button  className="text-red-500 hover:bg-red-500 hover:text-white ml-6" size="icon" variant="ghost" onClick={() => dispatch(removeTodo(todo.id))}>
          <svg
    
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
          </button>
          </div>
        </li>
        </div>

          
            


      ))}

</div>
</div>

    </>
  );
}

export default Todos;


// <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
// <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
//   <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Todo App</h1>
//   <div className="flex items-center mb-4">
//     <Input
//       className="flex-1 mr-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-md p-2"
//       placeholder="Add a new task"
//       type="text"
//     />
//     <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">Add Task</Button>
//   </div>
//   <div className="space-y-4">
//     <Card className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between">
//       <div className="text-gray-900 dark:text-gray-100">Buy groceries</div>
//       <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="icon" variant="ghost">
//         <TrashIcon className="h-5 w-5" />
//       </Button>
//     </Card>
//     <Card className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between">
//       <div className="text-gray-900 dark:text-gray-100">Clean the house</div>
//       <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="icon" variant="ghost">
//         <TrashIcon className="h-5 w-5" />
//       </Button>
//     </Card>
//     <Card className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between">
//       <div className="text-gray-900 dark:text-gray-100">Do laundry</div>
//       <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="icon" variant="ghost">
//         <TrashIcon className="h-5 w-5" />
//       </Button>
//     </Card>
//   </div>
// </div>
// </div>
