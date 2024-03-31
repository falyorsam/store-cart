import { useState, useCallback, useMemo, memo } from "react";
import { data } from "../../../../../data.js";
import List from "./List";
import { Slow } from "../../../../../z-alpha/Slow.js";
import slowFunction from "./slowFunction";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => Slow(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
