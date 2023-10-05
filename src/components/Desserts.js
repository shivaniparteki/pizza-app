import { useRef, useState } from "react";

export const Desserts =()=> {
  const name = useRef("");
  const [dName, setName] = useState(" ");
  const takeName = (event) => {
    let val = event.target.value;
    console.log("val", val);
    setName(val);
  };
  const printName = () => {
    setName(name.current.value);
  };

  return(
    <div>
      <input type="text" ref={name} placeholder="Type the dessert u want..."/>
      <button className = "bg-secondary mx-2 rounded" onClick={printName}>Search</button>
      <p>The Name is {dName}</p>
   
      <h1> I am Desserts </h1>
    </div>
    
  );
}