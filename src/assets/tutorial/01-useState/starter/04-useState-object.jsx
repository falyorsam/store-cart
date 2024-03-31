import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });
  const DisplayAPerson = () => {
    setPerson({ name: "alex", age: 25, hobby: "set at home and sleep" });
  };
  const { name, age, hobby } = person;
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <p>{hobby}</p>
      <button onClick={DisplayAPerson}>show alex</button>
    </>
  );
};

export default UseStateObject;
