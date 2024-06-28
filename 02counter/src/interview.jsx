import { useState } from "react"
function Interview() {

    let [counter, setCounter] = useState(0)
    const addValue = () => {
    if (counter < 20) {
        // setCounter( counter + 1)
        // setCounter( counter + 1)
        // setCounter( counter + 1)
        // setCounter( counter + 1)
        // We have used setCounter 4 times but value is incremented by one only
        // useState sends update in UI as well as variables in batches  
        setCounter(prevCounter => prevCounter+1);
        setCounter(prevCounter => prevCounter+1);
        setCounter(prevCounter => prevCounter+1);
        setCounter(prevCounter => prevCounter+1);
        // prevCounter is last updated state
        // The second call will start once the first one has finished executing
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

export default Interview;
