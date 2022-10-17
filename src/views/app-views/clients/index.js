import React, { useEffect, useState } from "react";

const Clients = () => {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <ul className="">
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
