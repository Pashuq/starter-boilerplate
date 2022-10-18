import React from "react";
import { Card, Table, Popover, Tag, Tooltip, message, Button } from "antd";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { Link } from "react-router-dom";

function UserListF({ users }) {
  const usersLimit = 10;

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

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
      render: (_, record) => <a tel={record?.phone}>{record?.phone}</a>,
    },
    {
      title: null,
      dataIndex: null,
      render: (_, record) => (
        <Link to="/">
          <Button>Edit profile</Button>
        </Link>
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

export default UserListF;
