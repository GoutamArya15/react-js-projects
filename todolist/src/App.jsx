import React, { useState, useEffect } from 'react'

const App = () => {
  const [array, setArray] = useState([]);
  const [text, Settext] = useState('');
  const btn = () => {
    if (text != '') {
      setArray([...array, text]);
      Settext('');
    }
  }

  document.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      btn();
    };
  })



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(array));
  }, [array]);


  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => { Settext(e.target.value) }}
          className="flex-1 p-2 border rounded"
          placeholder="Add a new task..."
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={btn}
        >
          Add
        </button>
      </div>
      <ul>
        {array.map(function (val, idx) {
          return (
            <li className="flex justify-between items-center mb-2 mt-5" key={idx}>
              <span
                className={`flex-1line-through text-gray-500`}
              >
                {val}
              </span>
              <button
                className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default App