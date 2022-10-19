import PageHeader from "components/layout-components/PageHeader";
import React, { useEffect, useState } from "react";
import ClientsList from "./clients-list";
import ClientsService from "API/ClientsService";
import Loading from "components/shared-components/Loading";
import { useFetching } from "hooks/useFetching";

const Clients = () => {
  const [users, setUsers] = useState([]);
  const [fetchClients, isClientsLoading, clientsError] =
    useFetching(useFetchingCb);

  async function useFetchingCb() {
    const clients = await ClientsService.getAll();
    const clientsWithAvatar = clients.map((client) => {
      return {
        ...client,
        avatar: `/img/avatars/thumb-${client.id}.jpg`,
      };
    });
    setUsers(clientsWithAvatar);
  }

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const InnerClientsLayout = ({ error }) => {
    return (
      <>
        <PageHeader title={"sidenav.clients"} display={true} />
        {error && <p>{error}</p>}
        <ClientsList
          users={users}
          userProfileVisible={false}
          selectedUser={null}
        />
      </>
    );
  };

  return isClientsLoading.isLoading ? (
    <Loading />
  ) : (
    <InnerClientsLayout error={clientsError} />
  );
};

export default Clients;
