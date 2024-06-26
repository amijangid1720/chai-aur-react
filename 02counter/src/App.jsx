import './App.css'
import { useState } from 'react';



function App() {

  let [counter, setCounter] = useState(0)
  // counter is the variable we need to control and setCounter is the function which is controlling the variable
  // 0 is the initial value . It can be anything true,false,'',or even a function
  //const[ami,amiCounter]=useState(0) we could do this also

  // let counter = 5; --> This is done by useState behind the scene


  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }

    console.log(counter)
  }

  const decreaseValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }

    console.log(counter)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value : {counter}</button>
    </>
  )
}

export default App

