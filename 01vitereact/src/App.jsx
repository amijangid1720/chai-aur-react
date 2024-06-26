

import Chai from "./chai"
function App() {
  const username="Ami"

  return (
    <>
    <Chai/>
    {/* {username} -this is an evaluated expression we cannot write if or for here*/}
    <h1>Chai aur React {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
