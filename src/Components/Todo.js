import React from 'react'

function Todo() {
  return (
    <div>
      <h2>TODO APP</h2>
      <from>
        <input type="text" placeholder="Enter your todos here"/>
        <button>ADD</button>
      </from>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
    </div>
  )
}

export default Todo