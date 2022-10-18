import React from "react";
import { Card, Table, Popover, Tag, Tooltip, message, Button } from "antd";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { Link, useHistory } from "react-router-dom";

function ClientsList({ users }) {
  const usersLimit = 10;

  const history = useHistory();

  console.log(history);

  const tableColumns = [
    {
      title: "Clients",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record?.avatar}
            name={record?.name}
            subTitle={record?.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Company",
      dataIndex: "company",
      render: (_, record) => <p>{record?.company.name}</p>,
      sorter: {
        compare: (a, b) => {
          a = a.company.name.toLowerCase();
          b = b.company.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (_, record) => (
        <a href={`tel:${record?.phone}`}>{record?.phone}</a>
      ),
    },
    {
      title: null,
      dataIndex: null,
      render: (_, record) => (
        <Button
          onClick={() => history.push(`/app/clients/profile${record.id}`)}
        >
          Edit profile
        </Button>
      ),
    },
  ];

  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <Table
        columns={tableColumns}
        dataSource={users}
        rowKey="id"
        pagination={{
          defaultPageSize: usersLimit,
          className: users.length <= usersLimit ? "d-none" : null,
        }}
      />
    </Card>
  );
}

export default ClientsList;
