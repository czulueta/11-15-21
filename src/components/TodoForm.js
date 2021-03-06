import React, { useState } from "react"

export default function TodoForm(props){
  const initInputs = { title:"", description: "", imgUrl: ""}
  const [inputs, setInputs] = useState(initInputs)
  const { addTodo } = props

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSubmit(e){
    e.preventDefault()
    addTodo()
  }

  const { title, description, imgUrl} = inputs
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title" />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description" />
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image Url" />
      <button>Add Todo</button>
    </form>
  )
}