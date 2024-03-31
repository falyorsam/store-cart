import { useState, useEffect } from "react";

const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  return { isLoading, isError, user };
};

export default useFetchPerson;
