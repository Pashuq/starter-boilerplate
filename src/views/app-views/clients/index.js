import PageHeader from "components/layout-components/PageHeader";
import React, { useEffect, useState } from "react";
import UserList from "../pages/user-list";
import UserListF from "../pages/user-listf";

const Clients = () => {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        const resWithAvatar = res.map((user) => {
          return {
            ...user,
            avatar: `/img/avatars/thumb-${user.id}.jpg`,
          };
        });
        setUsers(resWithAvatar);
      });
  }, []);

  return (
    <div>
      <PageHeader title={"sidenav.clients"} display={true} />

      <UserListF users={users} userProfileVisible={false} selectedUser={null} />
    </div>
  );
};

export default Clients;
