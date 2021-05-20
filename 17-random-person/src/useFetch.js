import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const person = data.results[0];

      const {
        email,
        phone,
        dob: { age },
        picture: { large: image },
        name: { first, last },
        login: { password },
        location: {
          street: { number, name },
        },
      } = person;
      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number}${name}`,
        name: `${first} ${last}`,
      };
      setUsers(newPerson);
      setLoading(false);
      setTitle("name");
      setValue(newPerson.name);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    getUsers();
  }, [url, getUsers]);

  return { loading, users, title, value, setTitle, setValue, getUsers };
};
