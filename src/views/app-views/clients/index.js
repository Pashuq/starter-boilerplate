import axios from "axios";
import PageHeader from "components/layout-components/PageHeader";
import React, { useEffect, useState } from "react";
import ClientsList from "./clients-list";
import { API_BASE_URL } from "configs/AppConfig";
import ClientsService from "API/ClientsService";

const Clients = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersWithAvatar();
  }, []);

  async function fetchUsersWithAvatar() {
    const clients = await ClientsService.getAll();
    const responseWithAvatar = clients.map((client) => {
      return {
        ...client,
        avatar: `/img/avatars/thumb-${client.id}.jpg`,
      };
    });
    setUsers(responseWithAvatar);
  }

  return (
    <div>
      <PageHeader title={"sidenav.clients"} display={true} />

      <ClientsList
        users={users}
        userProfileVisible={false}
        selectedUser={null}
      />
    </div>
  );
};

export default Clients;
