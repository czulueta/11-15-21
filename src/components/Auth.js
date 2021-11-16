import React, { useState } from "react"
import AuthForm from "./AuthForm.js"

const initInputs = { username:"", password: ""}

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    e.preventDefault()
    //sign up function from context
  }
  function handleLogin(e){
    e.preventDefault()
    //login function from context
  }
  function toggleForm(){
    setToggle(prev => !prev)
    //resetAutherr from context
  }

  return(
    <div>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Signup"
            errMsg={errMsg} />
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg} />
        </>
      }
    </div>
  )
}