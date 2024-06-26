import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h2>My Custom App !</h2> //This gets converted to tree like structure as reactElement by bundlers
  )
}

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement =(
  <a href="https://www.google.com" >Click Me</a>
)

const anotherUser="Chai aur Code"

const reactElements = React.createElement(
  'a',
  {href:"https://www.google.com",target: '_blank'},
  "Click me to visit google", anotherUser // After tree is created variable injection takes place
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
     <App/>
    // <MyApp />
    // reactElement  render method accepts only specific type of objects with specific structure
    // <reactElement />  This does not work as it expects a reactElement function  
    // MyApp() This also works but conventionally we should not use this
    // anotherElement  this gets converted to an object / tree by transpiler
    // reactElements
)

/* 
  NOTES
  =================
   ReactDOM.createRoot(document.getElementById('root')).render(
     <App/>
    ) ---> This will render the html returned by App (which is a function) inside the html element whose id is root . It will create a tree like structure for the returned html

*/
