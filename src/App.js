import React, { useState } from "react";
import { Layout, Input, Button, List, Typography, Space, message } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

const { Content } = Layout;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) {
      message.warning("Task cannot be empty!");
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/todo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <Content style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <div className="todo-container" style={{ background: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "8px" }}>
          <Typography.Title level={2}>To-Do App</Typography.Title>
          <Space>
            <Input
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={addTask}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={addTask} />
          </Space>
          <List
            style={{ marginTop: "20px", width: "300px" }}
            bordered
            dataSource={tasks}
            renderItem={(task, index) => (
              <List.Item
                actions={[<DeleteOutlined onClick={() => deleteTask(index)} style={{ color: "red", cursor: "pointer" }} />]}
              >
                {task}
              </List.Item>
            )}
          />
          {tasks.length > 0 && (
            <Button type="dashed" danger onClick={clearAllTasks} style={{ marginTop: "15px" }}>
              Clear All
            </Button>
          )}
        </div>
      </Content>

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
};

export default App;
