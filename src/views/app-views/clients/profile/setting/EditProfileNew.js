import React, { useState, useEffect } from "react";
import { Form, Avatar, Button, Input, Row, Col, Upload } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import Loading from "components/shared-components/Loading";
import { useFetching } from "hooks/useFetching";
import { useParams } from "react-router-dom";
import ClientsService from "API/ClientsService";

const EditProfileNew = ({ id }) => {
  const [clientInfo, setClientInfo] = useState({});
  //   const params = useParams();

  const [fetchClient, isClientLoading, error] = useFetching(useFetchingCb);

  async function useFetchingCb() {
    const client = await ClientsService.getUserById(id);
    setClientInfo({ ...client, avatarUrl: `/img/avatars/thumb-${id}.jpg` });
  }

  useEffect(() => {
    fetchClient();
    return () => {
      setClientInfo({});
    };
  }, []);

  const onFinish = () => {
    isClientLoading.setIsLoading(true);

    setTimeout(() => {
      isClientLoading.setIsLoading(false);
    }, 1000);
  };

  const EditProfileLayout = () => {
    return (
      <>
        <Flex
          alignItems="center"
          mobileFlex={false}
          className="text-center text-md-left"
        >
          <Avatar
            size={90}
            src={clientInfo?.avatarUrl}
            icon={<UserOutlined />}
          />
          <div className="ml-md-3 mt-md-0 mt-3">
            <Upload showUploadList={false}>
              <Button type="primary">Change Avatar</Button>
            </Upload>
            <Button
              className="ml-2"
              onClick={() => {
                if (clientInfo.avatarUrl) {
                  setClientInfo({ ...clientInfo, avatarUrl: "" });
                }
              }}
            >
              Remove
            </Button>
          </div>
        </Flex>
        <div className="mt-4">
          <Form
            name="basicInformation"
            layout="vertical"
            initialValues={{
              name: clientInfo?.name,
              email: clientInfo?.email,
              phone: clientInfo?.phone,
              company: clientInfo?.company?.name,
            }}
            onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Company" name="company">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );
  };

  return <>{isClientLoading.isLoading ? <Loading /> : <EditProfileLayout />}</>;
};

export default EditProfileNew;
