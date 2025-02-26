import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background: "#A7C17A", textAlign: "center", padding: "10px 0" }}>
      <Typography.Title level={2} style={{ color: "#fff", margin: 0 }}>
        Sam's To-Do App
      </Typography.Title>
    </Header>
  );
};

export default AppHeader;
