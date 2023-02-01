import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"

function App() {
  const [input, setInput]= useState('')
const [submit, setSubmit]=useState([])
 

const changeHandler=(e)=>{
  setInput(e.target.value)
 }
 
 const submitHandler =(e)=>{
  e.preventDefault()
  setSubmit(prevVal=>([...prevVal, input]))
 setInput('')
 }

return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={submitHandler}>
      <label for="text">Write your code</label>
      <br />
<input onChange={changeHandler} type="text" value={input} />
{submit.map(item=><p>{item} </p>)}
</form>
    </div>
  );
}

export default App;
