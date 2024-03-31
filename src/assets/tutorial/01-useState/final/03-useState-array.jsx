import React from "react";
import { data, people } from "../../../../data.js";
const removeItem = (people, id, name, setPeople) => {
  const newData = people.filter((item) => item.id !== id);
  setPeople(newData);

  // const NAME = document.querySelector(`.${name}CONT`);
  // NAME.remove();
  // console.log(newData);
  // console.log(name);
};
const clearAllItems = (people, setPeople) => {
  setPeople([]);
  // console.log(people);
  // const allContainer = document.querySelector(`.allContainer`);
  // allContainer.remove();
};
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <div className="allContainer">
      <h2>the use state version</h2>
      {people.map((theP) => {
        const { name, id } = theP;
        // removeItem(people, id, name);
        return (
          <div
            style={{ marginBottom: "1rem" }}
            className={`${name}CONT`}
            key={id}
          >
            {name}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => removeItem(people, id, name, setPeople)}
            >
              clear {name}
            </button>
          </div>
        );
      })}
      <button onClick={() => clearAllItems(people, setPeople)}>
        clear all
      </button>
    </div>
  );
};
const log = console.log;
export default UseStateArray;
