import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj={
    name:"Ami",
    age:"22"
  } 

  let newArr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-cyan-500 text-black p-4 rounded-xl mb-4">
        Tailwind-Props
      </h1>
      <Card  username="Ami" channel="Chai Aur Code" someObject={myObj} arr={newArr} 
     />
      {/* <Card myArr=[1,2,3]/> cannot pass array like this*/}
      {/* <Card myObject={name:"Ami"} /> cannot pass object like this*/}
      {/* <Card myObject=myObj/> */}
      <Card  username="Ayushi" btnText="Click Me" />

    </>
  );
}

export default App;
