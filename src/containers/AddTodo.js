import React from 'react'

let AddTodo = () => {
  let input
  return (
    <div>
    <form onSubmit={e => {
      e.preventDefault()
      // reset value
      input.value = ''
    }}>
    <input ref={node => {
      input = node
    }} />
    <button type="submit">
      Add Todo
    </button>
    </form>
      Moin
    </div>
  )
}

export default AddTodo
