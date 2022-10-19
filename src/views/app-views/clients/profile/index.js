import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import InnerAppLayout from "layouts/inner-app-layout";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

import { useParams } from "react-router-dom";
import EditProfile from "./setting/EditProfile";
import EditProfileNew from "./setting/EditProfileNew";

function Client() {
  const params = useParams();

  const ClientSideMenu = () => {
    return (
      <Menu mode="inline" defaultSelectedKeys="profile">
        <Menu.Item key="profile">
          <UserOutlined />
          <span>Edit profile</span>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <InnerAppLayout
      sideContentWidth={320}
      sideContent={<ClientSideMenu />}
      mainContent={<EditProfileNew id={params.id} />}
    />
  );
}

export default Client;
