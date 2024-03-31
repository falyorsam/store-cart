import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
};
export default UncontrolledInputs;
