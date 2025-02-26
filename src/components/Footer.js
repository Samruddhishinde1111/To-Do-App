import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#f0f2f5", padding: "10px" }}>
      <Typography.Text>© {new Date().getFullYear()} Sam's To-Do App. All rights reserved.</Typography.Text>
    </Footer>
  );
};

export default AppFooter;
