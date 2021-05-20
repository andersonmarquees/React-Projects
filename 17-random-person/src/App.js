import React from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

import { useFetch } from "./useFetch";

const url = "https://randomuser.me/api/";

const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const { loading, users, title, value, getUsers, setTitle, setValue } =
    useFetch(url);

  console.log(users);

  const handleValues = (e) => {
    if (e.target.classList.contains("icon")) {
      const newLabel = e.target.dataset.label;
      setTitle(newLabel);
      setValue(users[newLabel]);
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            className="user-img"
            src={(users && users.image) || defaultImage}
            alt="name"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValues}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValues}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={handleValues}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValues}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValues}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValues}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getUsers}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
