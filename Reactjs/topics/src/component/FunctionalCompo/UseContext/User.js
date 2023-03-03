import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  // const { username } = useContext(AppContext);
  const { username,setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>User: {username}</h1>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default User;
