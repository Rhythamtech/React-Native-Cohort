import React, {useState} from 'react'

function App() {

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(e.target.elements.name.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name = "name"></input>
            <button type="submit"> Submit </button>
        </form>
    </div>
  )
}

export default App